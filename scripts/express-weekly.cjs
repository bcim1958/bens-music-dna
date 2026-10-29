'use strict';
// Offline preparation only. No HTTP client, browser storage, publishing or stock writer.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const VERSION = 'express-preparation-1';
const sha = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
class Hold extends Error { constructor(code, detail) { super(detail); this.code = code; } }
function fail(code, detail) { throw new Hold(code, detail); }
function bytes(root, name) {
  if (typeof name !== 'string' || !name || path.isAbsolute(name)) fail('INPUT_PATH', 'Relative artifact path required');
  const p = path.resolve(root, name);
  if (!p.startsWith(root + path.sep)) fail('INPUT_PATH', name);
  // Reject symlinks at every component, including directories.
  let cursor = root;
  for (const part of path.relative(root, p).split(path.sep)) {
    cursor = path.join(cursor, part);
    if (fs.lstatSync(cursor).isSymbolicLink()) fail('INPUT_PATH', 'Symlink: ' + name);
  }
  if (!fs.statSync(p).isFile()) fail('INPUT_PATH', 'Not a regular file: ' + name);
  return fs.readFileSync(p);
}
function durable(file, content, flags = 'wx') {
  const fd = fs.openSync(file, flags, 0o600);
  try { fs.writeFileSync(fd, content); fs.fsyncSync(fd); } finally { fs.closeSync(fd); }
}
function syncDir(dir) { const fd = fs.openSync(dir, 'r'); try { fs.fsyncSync(fd); } finally { fs.closeSync(fd); } }
function prepare(inputFile, outputRoot, options = {}) {
  let lock, stage, locked = false;
  const result = {schemaVersion: 1, status: 'HOLD', published: false, endToEndProven: false,
    externalWrites: 0, storageWrites: 0, automaticSaturdayProven: false};
  let out;
  try {
    const inputPath = fs.realpathSync(inputFile), root = path.dirname(inputPath);
    const raw = fs.readFileSync(inputPath), input = JSON.parse(raw);
    if (input.schemaVersion !== 1 || !/^\d{4}-W\d{2}$/.test(input.week || '')) fail('SCHEMA', 'schemaVersion/week');
    if (!Number.isInteger(input.revision) || input.revision < 1) fail('SCHEMA', 'Explicit positive revision required');
    if (!['playlist-story','weekly-issue'].includes(input.kind)) fail('SCHEMA', 'Explicit package kind required');
    if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(input.cutoff || '') || !Number.isFinite(Date.parse(input.cutoff))) fail('CUTOFF', 'Explicit UTC cutoff required');
    if (Date.parse(input.cutoff) > Date.now()) fail('CUTOFF', 'Cutoff has not closed');
    result.week = input.week;
    fs.mkdirSync(outputRoot, {recursive: true}); out = fs.realpathSync(outputRoot);
    // Never allow the output tree to contain or overwrite the input bundle.
    if (root === out || root.startsWith(out + path.sep) || out.startsWith(root + path.sep)) fail('OUTPUT_PATH', 'Input and output trees must be disjoint');
    lock = path.join(out, input.week + '.lock');
    try { fs.mkdirSync(lock); locked = true; } catch (e) {
      if (e.code === 'EEXIST') fail('CONCURRENT_OR_INTERRUPTED', 'Inspect retained lock; no automatic stale-lock deletion');
      throw e;
    }
    durable(path.join(lock, 'owner.json'), JSON.stringify({pid: process.pid, at: new Date().toISOString()}));
    const artifacts = Object.create(null);
    if (!Array.isArray(input.artifacts) || !input.artifacts.length) fail('INPUT_MISSING', 'Artifact bundle empty');
    for (const a of input.artifacts) {
      if (!a || !/^[A-Za-z][A-Za-z0-9]*$/.test(a.role || '') || artifacts[a.role]) fail('SCHEMA', 'Duplicate or invalid role');
      const data = bytes(root, a.path), digest = sha(data);
      if (digest !== a.sha256) fail('INPUT_CHANGED', a.role);
      artifacts[a.role] = {path: a.path, sha256: digest, data};
    }
    const fingerprint = sha(Buffer.concat([Buffer.from(VERSION), raw,
      ...Object.keys(artifacts).sort().map(k => Buffer.from(k + artifacts[k].sha256))]));
    result.inputSha256 = fingerprint;
    const key = input.week + '-r' + input.revision;
    const destination = path.join(out, key);
    if (fs.existsSync(destination)) {
      const receipt = JSON.parse(bytes(destination, 'receipt.json'));
      if (receipt.inputSha256 !== fingerprint) fail('REVISION_CONFLICT', 'Existing revision is immutable; explicitly reconcile and use a new revision');
      for (const [name, digest] of Object.entries(receipt.outputs)) {
        if (sha(bytes(destination, name)) !== digest) fail('OUTPUT_CORRUPT', name);
      }
      if (receipt.status !== 'PREPARED' || receipt.published !== false) fail('OUTPUT_CORRUPT', 'Invalid preparation receipt');
      Object.assign(result, receipt, {reused: true});
    } else {
      const missing = [];
      for (const role of ['manuscript','claims','playlist','readingProof','editorialReview','deviceReview']) if (!artifacts[role]) missing.push(role);
      if (missing.length) fail('DEPENDENCY_MISSING', missing.join(', '));
      const read = role => JSON.parse(artifacts[role].data);
      const playlist = read('playlist');
      if (!Array.isArray(playlist.tracks) || !playlist.tracks.length || playlist.tracks.some(t => !/^spotify:track:[A-Za-z0-9]{22}$/.test(t.uri))) fail('PLAYLIST_IDENTITY', 'Missing exact recording identities');
      if (new Set(playlist.tracks.map(t => t.uri)).size !== playlist.tracks.length) fail('PLAYLIST_IDENTITY', 'Duplicate recording');
      const claims = read('claims');
      if (!Array.isArray(claims) || !claims.length) fail('SOURCE_LOCK', 'No claim review');
      for (const c of claims) {
        if (!c.id || !c.claim || !['verified-fact','attributed-account','editorial-interpretation'].includes(c.status)) fail('SOURCE_LOCK', c.id || 'Unclassified claim');
        if (c.status !== 'editorial-interpretation' && (!c.url || !c.locator || !c.checkedAt || !Number.isFinite(Date.parse(c.checkedAt)) || Date.parse(c.checkedAt) > Date.parse(input.cutoff))) fail('SOURCE_LOCK', c.id);
      }
      // Review is an explicit evidence input; this program does not certify journalism or devices.
      for (const role of ['editorialReview','deviceReview']) {
        const r = read(role);
        if (r.status !== 'pass' || r.manuscriptSha256 !== artifacts.manuscript.sha256 || !r.reviewer || !r.checkedAt || Date.parse(r.checkedAt) > Date.parse(input.cutoff) || !Number.isFinite(Date.parse(r.checkedAt))) fail('REVIEW_REQUIRED', role);
        if (role === 'editorialReview' && (r.claimsSha256 !== artifacts.claims.sha256 || r.playlistSha256 !== artifacts.playlist.sha256)) fail('REVIEW_REQUIRED', 'Editorial review must bind claims and playlist');
        if (role === 'deviceReview' && r.readingProofSha256 !== artifacts.readingProof.sha256) fail('REVIEW_REQUIRED','Device review must bind exact layout');
        if (role === 'deviceReview' && !['iMac','iPhone','iPad'].every(x => r.devices?.[x] === 'pass')) fail('DEVICE_QA', 'All required device views must be reviewed');
      }
      if (input.kind === 'weekly-issue') {
        if (!artifacts.weekManifest || !artifacts.weekReadback || !artifacts.weekBios) fail('WEEK_TRUTH_HOLD', 'Frozen week manifest, independent readback and sourced bios required');
        const m = read('weekManifest'), rb = read('weekReadback'), bios = read('weekBios');
        if (m.week !== input.week || m.frozen !== true || !Array.isArray(m.tracks) || m.tracks.length !== 21 || new Set(m.tracks.map(t=>t.uri)).size !== 21 || m.tracks.some(t=>!t.artistId || !/^spotify:track:[A-Za-z0-9]{22}$/.test(t.uri))) fail('WEEK_TRUTH_HOLD', 'Invalid frozen official-21 week manifest');
        if (rb.week !== input.week || rb.manifestSha256 !== artifacts.weekManifest.sha256 || rb.kind !== 'external-readback' || !rb.sourceUrl || !Number.isFinite(Date.parse(rb.checkedAt)) || Date.parse(rb.checkedAt)>Date.parse(input.cutoff) || JSON.stringify(rb.orderedUris)!==JSON.stringify(m.tracks.map(t=>t.uri))) fail('WEEK_TRUTH_HOLD', 'Readback mismatch or missing provenance');
        const artists = [...new Set(m.tracks.map(t=>t.artistId))].sort();
        if (!Array.isArray(bios) || JSON.stringify(bios.map(b=>b.artistId).sort())!==JSON.stringify(artists) || bios.some(b=>b.status!=='ready'||!b.text||!Array.isArray(b.claimIds)||!b.claimIds.length||b.claimIds.some(id=>!claims.some(c=>c.id===id&&c.status!=='editorial-interpretation')))) fail('BIO_HOLD','Unique week artists need sourced biographies');
      }
      stage = fs.mkdtempSync(path.join(out, '.stage-'));
      const outputs = {};
      for (const [role, a] of Object.entries(artifacts)) {
        const name = role + path.extname(a.path);
        if (!/^[A-Za-z][A-Za-z0-9]*\.[a-z0-9]+$/.test(name)) fail('SCHEMA','Invalid output filename');
        durable(path.join(stage, name), a.data); outputs[name] = a.sha256;
      }
      Object.assign(result, {status:'PREPARED', outputs, revision:input.revision, reused:false,
        note:'Offline package only; publication adapter and release authority are absent.'});
      durable(path.join(stage,'receipt.json'), JSON.stringify(result,null,2)+'\n'); syncDir(stage);
      if (options.beforeCommit) options.beforeCommit(stage);
      fs.renameSync(stage, destination); stage = null; syncDir(out);
      // Read back every committed output before acknowledging preparation.
      for (const [name,digest] of Object.entries(outputs)) if (sha(bytes(destination,name))!==digest) fail('OUTPUT_CORRUPT',name);
    }
  } catch (e) {
    Object.assign(result, {status:'HOLD', reason:e.code || 'IO_OR_INVALID_INPUT', detail:e.message, published:false});
  } finally {
    if (stage) fs.rmSync(stage,{recursive:true,force:true});
    if (locked) {
      try {
        durable(path.join(out,'attempts.jsonl'), JSON.stringify({at:new Date().toISOString(),...result})+'\n','a');
      } catch (e) { Object.assign(result,{status:'HOLD',reason:'LOG_WRITE_FAILED',detail:e.message}); }
      fs.rmSync(lock,{recursive:true,force:true});
    }
  }
  return result;
}
module.exports = {prepare, sha, VERSION};
if (require.main === module) {
  const r = prepare(process.argv[2], process.argv[3]);
  console.log(JSON.stringify(r,null,2)); process.exitCode = r.status === 'PREPARED' ? 0 : 2;
}
