"""Read-only validation against the actual definitive workbook. Usage: script workbook.xlsx"""
import json,sys,hashlib
from pathlib import Path
import openpyxl
root=Path(__file__).resolve().parents[1]
state=json.loads((root/'data/master-100/state.json').read_text())
source=Path(sys.argv[1]);assert hashlib.sha256(source.read_bytes()).hexdigest()==state['source']['sha256']
w=openpyxl.load_workbook(source,read_only=True,data_only=True)
s={ws.title:list(ws.values) for ws in w}
population=json.loads((root/state['populationPath']).read_text())
actual={}
for i,r in enumerate(s['Playlist'][1:],2):actual.setdefault(r[3],[]).append(i)
assert len(actual)==3333
assert {r['displayName']:r['playlistRows'] for r in population['mentions']}==actual
seen=set();baseline=[];production=[]
for manifest in state['batches']:
 batch=json.loads((root/manifest['path']).read_text())
 for record in batch['records']:
  name=record['displayName'];assert name not in seen;seen.add(name)
  assert name in actual
  obs=record['sourceObservation'];raw=s[obs['sheet']][obs['row']-1]
  expected=list(raw) if obs['sheet']=='AllMusic-classificatie' else list(raw[26:31])
  assert obs['values']==expected,(name,'source mismatch')
  if obs['sheet']=='AllMusic-classificatie':assert raw[0]==name
  else:assert raw[3]==name
  for r in record['repairObservations']:assert r['values']==list(s[r['sheet']][r['row']-1])
  for ref in record['populationEvidence']:assert s[ref['sheet']][ref['row']-1][3]==name
  if batch['batchId'].startswith('MASTER-RECOVERY-'):baseline.append(name)
 if not batch['batchId'].startswith('MASTER-RECOVERY-'):production.append(batch)
ordered=[r[0] for r in s['AllMusic-classificatie'][1:]]
ordered += [n for n in actual if n not in set(ordered)]
assert len(baseline)==575
processed=set(baseline)
for batch in production:
 names=[r['displayName'] for r in batch['records']]
 assert names==[n for n in ordered if n not in processed][:100],batch['batchId']
 assert len(names)==100
 if 'priorTreatedCount' in batch:assert batch['priorTreatedCount']==len(processed)
 processed.update(names)
assert len(processed)==state['treatedCount']
print(json.dumps({'result':'PASS','sourceSha256':state['source']['sha256'],'population':len(actual),'recordsComparedToOriginalWorkbook':len(seen),'deterministicBatches':[b['batchId'] for b in production],'sourceWorkbookUnchanged':hashlib.sha256(source.read_bytes()).hexdigest()==state['source']['sha256']}))
