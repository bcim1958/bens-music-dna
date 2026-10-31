#!/usr/bin/env python3
"""Explicit, synthetic storage test; no Spotify, credentials, scheduler or old files."""
import argparse, hashlib, json, os, tempfile, uuid
from datetime import datetime, timezone
from pathlib import Path


def sha(data):
    return hashlib.sha256(data).hexdigest()


def run(parents):
    result = {"schemaVersion": 1, "checkedAt": datetime.now(timezone.utc).isoformat(),
              "productionProof": False, "cloudServerSyncProven": False, "destinations": []}
    payload = b'Music DNA SYNTHETIC PREFLIGHT ONLY\n' + uuid.uuid4().hex.encode()
    for parent in parents:
        record = {"testedParent": str(parent), "pass": False}
        try:
            # Never create a missing external volume or choose a production destination.
            if not parent.is_dir() or parent.is_symlink():
                raise RuntimeError('parent missing or symbolic link')
            with tempfile.TemporaryDirectory(prefix='.music-dna-preflight-', dir=parent) as tmp:
                root = Path(tmp)
                stage = root / 'staging'
                stage.mkdir()
                csv = stage / 'synthetic.csv'
                with csv.open('xb') as f:
                    f.write(payload); f.flush(); os.fsync(f.fileno())
                manifest = {"synthetic": True, "sha256": sha(payload)}
                with (stage / 'manifest.json').open('x') as f:
                    json.dump(manifest, f); f.flush(); os.fsync(f.fileno())
                final = root / 'committed'
                stage.rename(final)
                # Exclusive creation is essential for the eventual production writer.
                try:
                    with (final / 'synthetic.csv').open('xb'):
                        pass
                    raise AssertionError('collision unexpectedly accepted')
                except FileExistsError:
                    pass
                restored = root / 'restore.csv'
                restored.write_bytes((final / 'synthetic.csv').read_bytes())
                assert sha(restored.read_bytes()) == manifest['sha256']
                corrupt = bytearray(restored.read_bytes()); corrupt[0] ^= 1
                assert sha(corrupt) != manifest['sha256']
                record.update(pass_=True, sha256=manifest['sha256'], bytes=len(payload),
                              device=os.stat(parent).st_dev, atomicDirectoryRename=True,
                              collisionRefused=True, restoreHashVerified=True, corruptionDetected=True)
                record['pass'] = record.pop('pass_')
            record['testFilesRemoved'] = True
        except Exception as exc:
            record['error'] = type(exc).__name__ + ': ' + str(exc)
        result['destinations'].append(record)
    return result

if __name__ == '__main__':
    p = argparse.ArgumentParser()
    p.add_argument('--parent', action='append', required=True, type=Path)
    args = p.parse_args()
    print(json.dumps(run(args.parent), indent=2))
