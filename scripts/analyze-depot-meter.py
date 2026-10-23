"""Offline read-only Master/Depot and bounded historical-rating analysis.
Run with Python 3 and Node on PATH; output directory must be outside source data.
"""
import argparse, collections, csv, hashlib, json, subprocess, zipfile
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
ARCHIVE = 'archive/checkpoints/2026-10-08/Music-DNA-Master-1.14.4-Broncontrole.zip'
RATINGS = 'data/historical-ratings-recovery-w35-w38-v2.json'
UNKNOWN = 'ONBEKEND'
def absent(v):
    return v is None or v == '' or v == [] or v == 'Niet vastgesteld'
def labels(value, sep):
    return sorted(set(x.strip() for x in (value or '').split(sep) if x.strip() and x.strip()!='Niet vastgesteld')) or [UNKNOWN]
def distribution(rows, field, sep):
    out = collections.defaultdict(lambda: {'master':0,'used':0,'withoutRegisteredUse':0})
    for r in rows:
        for label in labels(r.get(field),sep):
            out[label]['master']+=1
            out[label]['used' if r['DNA Gebruikt']=='Ja' else 'withoutRegisteredUse']+=1
    return dict(sorted(out.items(),key=lambda x:(-x[1]['master'],x[0])))
def analyze():
    with zipfile.ZipFile(ROOT/ARCHIVE) as z:
        master=json.loads(z.read('master-1.14.4/MASTER_ACTUEEL.json'))
        sources=json.loads(z.read('master-1.14.4/BRONCONTROLE.json'))
    assert len({r['Track URI'] for r in master})==len(master)
    assert set(r['DNA Gebruikt'] for r in master)<= {'Ja','Nee'}
    exported=json.loads(subprocess.check_output(['node',str(ROOT/'scripts/export-meter-candidates.cjs')]))
    candidates=exported['tracks']; rating_data=json.loads((ROOT/RATINGS).read_text()); ratings=rating_data['ratings']
    assert len({r['id'] for r in ratings})==len(ratings), 'Duplicate recovered rating identity'
    master_by_uri={r['Track URI']:r for r in master}
    ledger=json.loads((ROOT/'data/music-dna-historical-ledger-v1.json').read_text())
    ledger_ids={}
    for week in ledger['weeks'].values():
        for item in week.get('playlist',[]):
            key=item['candidateId']; sid=item['spotifyTrackId']
            assert key not in ledger_ids or ledger_ids[key]==sid, 'Conflicting historical identity'
            ledger_ids[key]=sid
    observed=[]; by_style=collections.defaultdict(collections.Counter)
    for r in ratings:
        c=candidates.get(r['id'],{}); url=c.get('spotifyUrl',''); sid=url.split('/track/')[-1].split('?')[0] if '/track/' in url else None
        sid=sid or ledger_ids.get(r['id'])
        m=master_by_uri.get('spotify:track:'+sid) if sid else None
        styles=sorted(set(c.get('taxonomy',{}).get('allMusicStyles',[]))) or [UNKNOWN]
        row={**r,'spotifyTrackId':sid,'identity':c.get('identity'),'candidateStyles':styles,'masterMatched':m is not None,'masterMainStructure':m.get('AllMusic hoofdstructuur') if m else None,'source':RATINGS,'observedAt':None,'staticOfferedFlag':c.get('discoverDNA',{}).get('offered'),'offeredEvidence':'rating proves assessment; exact offer time unavailable'}
        observed.append(row)
        for s in styles: by_style[s]['assessed']+=1; by_style[s][r['rating']]+=1
    ledger=json.loads((ROOT/'data/music-dna-historical-ledger-v1.json').read_text())
    files=[ARCHIVE,'data/depot/catalogus.json',RATINGS,'data/music-dna-historical-ledger-v1.json',*exported['files']]
    for f in ['scripts/analyze-depot-meter.py','scripts/export-meter-candidates.cjs']: files.append(f)
    result={'schemaVersion':1,'sourceCommit':subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT,text=True).strip(),
      'inputs':{f:hashlib.sha256((ROOT/f).read_bytes()).hexdigest() for f in files},
      'totals':{'master':len(master),'used':sum(r['DNA Gebruikt']=='Ja' for r in master),'withoutRegisteredUse':sum(r['DNA Gebruikt']=='Nee' for r in master)},
      'definitions':{'used':'Master DNA Gebruikt=Ja: registered application, not listening or rating','candidatePool':'historical W35–W38 declarations, not proof of actual offer','assessed':'unique recovered candidate IDs; assessment is evidence of exposure, no complete offer denominator','labels':'multi-label counts; unknown explicit; no alias normalization; Spotify Genres separate from AllMusic','sources':'coverage of explicit BRONCONTROLE only; no claim that other rows lack all provenance'},
      'distributions':{f:distribution(master,f,sep) for f,sep in [('AllMusic hoofdgenre',';'),('AllMusic hoofdstructuur',';'),('AllMusic stijlen',';'),('Genres',',')]},
      'missingFields':{f:sum(absent(r.get(f)) for r in master) for f in sorted(set().union(*(r.keys() for r in master)))},
      'classificationStatus':dict(collections.Counter(r.get('Classificatiestatus') or UNKNOWN for r in master)),
      'sourceQuality':{'explicitCheckedRecords':len(sources),'outsideExplicitCheck':len(master)-len(sources),'scopes':dict(collections.Counter(s.get('genre_scope') for s in sources.values())),'openGenreReviews':{k:v['open_genre_review'] for k,v in sources.items() if v.get('open_genre_review')}},
      'historical':{'candidatePool':len(candidates),'recoveredRatings':len(ratings),'ratingCounts':dict(collections.Counter(r['rating'] for r in ratings)),'staticOfferFlagContradictions':sum(x['staticOfferedFlag'] is False for x in observed),'candidateIdentityMissing':sum(x['identity'] is None for x in observed),'spotifyIdentityMissing':sum(x['spotifyTrackId'] is None for x in observed),'masterMatches':sum(x['masterMatched'] for x in observed),'candidateStyleUnknown':sum(x['candidateStyles']==[UNKNOWN] for x in observed),'byCandidateStyle':{k:dict(v) for k,v in sorted(by_style.items())},'assessmentEvents':observed,'playlistMembershipByWeek':{k:len(v.get('playlist',[])) for k,v in ledger['weeks'].items()},'limits':rating_data['evidenceNote']}}
    return result

def main():
    p=argparse.ArgumentParser(description=__doc__);p.add_argument('--output-dir',required=True,type=Path);args=p.parse_args()
    target=args.output_dir.resolve()
    if target==ROOT or any(target.is_relative_to(ROOT/d) for d in ['data','archive','test','scripts']): p.error('Output must not overwrite input directories')
    result=analyze();target.mkdir(parents=True,exist_ok=True)
    (target/'analysis.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
    for field,rows in result['distributions'].items():
        name={'AllMusic hoofdgenre':'main-genres','AllMusic hoofdstructuur':'main-structures','AllMusic stijlen':'styles','Genres':'spotify-genres'}[field]
        with (target/(name+'.csv')).open('w',newline='') as f:
            w=csv.DictWriter(f,fieldnames=['label','master','used','withoutRegisteredUse'],lineterminator='\n');w.writeheader();w.writerows({'label':k,**v} for k,v in rows.items())
    print(json.dumps({**result['totals'],'historical':{k:v for k,v in result['historical'].items() if k not in ['assessmentEvents','byCandidateStyle']}},ensure_ascii=False))
if __name__=='__main__':main()
