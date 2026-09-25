"""Append one v3 migration batch. Requires an explicit expected prior count.

Usage: python scripts/append-master-100-batch.py workbook.xlsx --batch MASTER-013 --expected-prior 675
Existing records and source workbook remain immutable. Requires openpyxl.
"""
import json,re,hashlib,argparse,datetime
from pathlib import Path
from collections import Counter
import openpyxl

def mention_id(s):return 'mdna:mention:'+hashlib.sha256(s.encode()).hexdigest()[:24]
def record(name,batch,sequence):
 mid=mention_id(name)
 refs=[{'sheet':'Playlist','row':r,'nameColumn':'D'} for r in population[name]]
 if name in classification:
  row,raw=classification[name]
  observation={'sheet':'AllMusic-classificatie','row':row,'range':f'A{row}:H{row}','values':raw}
  genre,structure,styles,status,locator=raw[2:7]
 else:
  rr=population[name][0];r=S['Playlist'][rr-1]
  genre,structure,styles,status,locator=r[26:31]
  observation={'sheet':'Playlist','row':rr,'range':f'AA{rr}:AE{rr}','values':r[26:31]}
 repair_observations=[{'sheet':'Taxonomie-reparatie 2026-09-04','row':i,'range':f'A{i}:M{i}','values':r} for i,r in repair.get(name,[])]
 issues=[]
 # Scope: verify faithful migration of workbook provenance, not a fresh AllMusic retrieval.
 if status=='afgeleid volgens AllMusic-taxonomie':
  treatment='treated-verified' if genre and styles and locator else 'treated-unresolved'
  claim_status='derived'
 elif status=='rechtstreeks AllMusic':
  if locator=='https://www.allmusic.com/genres':
   treatment='treated-conflict';issues=['direct-status-with-generic-taxonomy-source']
  elif locator and re.match(r'https://www\.allmusic\.com/(artist|song|album)/',locator) and genre and styles:
   treatment='treated-verified'
  else:
   treatment='treated-unresolved';issues=['direct-source-locator-missing']
  claim_status='unknown' # Original direct label remains in evidence; no new provider verification.
 else:
  treatment='treated-unresolved';claim_status='unknown';issues=['insufficient-source-metadata']
 if treatment=='treated-conflict':claim_status='conflict'
 if treatment=='treated-unresolved' and not issues:issues=['incomplete-classification-fields']
 claims=[];evidence=[]
 for predicate,value in [('genre',genre),('mainStructure',structure),('styles',styles)]:
  if value is None:continue
  values=value.split(';') if predicate in ['genre','styles'] else [value]
  for j,v in enumerate(values):
   v=v.strip()
   if not v:continue
   cid=f'{mid}:{predicate}:{j}'
   # Main structure is an internal taxonomic grouping even on direct-source rows.
   cs='derived' if predicate=='mainStructure' and treatment=='treated-verified' else claim_status
   claims.append({'id':cid,'predicate':predicate,'value':v,'status':cs,'scope':'v3-classification'})
   evidence.append({'id':cid+':evidence','claimId':cid,'sourceId':SOURCE_ID,'sourcePath':observation['sheet']+'!'+observation['range'],'relation':'supports','observedValue':value,'verificationMethod':'local-workbook-read-and-provenance-preservation','checkedAt':'2026-09-25'})
 return {'sequence':sequence,'musicDnaId':mid,'displayName':name,'identityStatus':'exact','identityScope':'literal-v3-denominator-mention','artistEntityResolution':'not-performed','inputRef':SOURCE_ID,'batchId':batch,'treatmentStatus':treatment,'treatmentScope':'v3-classification-and-provenance-migration','originalProvenanceStatus':status,'externalSourceLocator':locator,'freshAllMusicVerification':False,'populationEvidence':refs,'sourceObservation':observation,'repairObservations':repair_observations,'sourceRefs':[SOURCE_ID],'claimRefs':[c['id'] for c in claims],'evidenceRefs':[e['id'] for e in evidence],'claims':claims,'evidence':evidence,'errorRefs':issues,'historicalReference':seed_refs.get(name),'checkpoint':batch+'-complete'}

def main():
 global population,classification,repair,S,SOURCE_ID,seed_refs
 p=argparse.ArgumentParser();p.add_argument('source',type=Path);p.add_argument('--batch',required=True);p.add_argument('--expected-prior',type=int,required=True)
 a=p.parse_args()
 root=Path(__file__).resolve().parents[1]
 statepath=root/'data/master-100/state.json';state=json.loads(statepath.read_text())
 assert state['treatedCount']==a.expected_prior,'Unexpected prior count; refuse to repeat or skip a batch'
 assert state['nextBatch']==a.batch,'Unexpected next batch'
 assert re.fullmatch(r'MASTER-\d{3}',a.batch),'Invalid batch ID'
 digest=hashlib.sha256(a.source.read_bytes()).hexdigest()
 assert digest==state['source']['sha256'],'Source changed; reconciliation required'
 SOURCE_ID=state['source']['id'];seed_refs={}
 w=openpyxl.load_workbook(a.source,read_only=True,data_only=True)
 S={ws.title:list(ws.values) for ws in w};w.close()
 population={}
 for i,r in enumerate(S['Playlist'][1:],2):population.setdefault(r[3],[]).append(i)
 stored_population=json.loads((root/state['populationPath']).read_text())
 assert {r['displayName']:r['playlistRows'] for r in stored_population['mentions']}==population
 assert len(population)==state['denominator']
 classification={r[0]:(i,r) for i,r in enumerate(S['AllMusic-classificatie'][1:],2)}
 assert len(classification)==state['source']['classificationRows']
 repair={}
 for i,r in enumerate(S['Taxonomie-reparatie 2026-09-04'][13:],14):
  if len(r)>10 and r[2] in population:repair.setdefault(r[2],[]).append((i,r))
 prior=[]
 for entry in state['batches']:
  content=(root/entry['path']).read_bytes()
  assert hashlib.sha256(content).hexdigest()==entry['sha256'],'Prior manifest changed'
  b=json.loads(content);assert len(b['records'])==entry['count']
  assert dict(Counter(r['treatmentStatus'] for r in b['records']))==entry['counts']
  prior.extend(b['records'])
 seen={r['musicDnaId'] for r in prior}
 assert len(seen)==len(prior)==a.expected_prior
 assert dict(Counter(r['treatmentStatus'] for r in prior))==state['counts']
 ordered=list(classification)+[n for n in population if n not in classification]
 target_count=min(100,state['denominator']-a.expected_prior)
 assert target_count>0,'Population already complete'
 names=[n for n in ordered if mention_id(n) not in seen][:target_count]
 assert len(names)==target_count and len(set(names))==target_count
 target='data/master-100/'+a.batch.lower()+'.json';assert not (root/target).exists(),'Refuse to overwrite a batch'
 date=datetime.date.today().isoformat()
 records=[];checkpoints=[]
 for i,name in enumerate(names,1):
  r=record(name,a.batch,i)
  for e in r['evidence']:e['checkedAt']=date
  assert r['musicDnaId'] not in seen;seen.add(r['musicDnaId'])
  assert r['treatmentStatus'] in ('treated-verified','treated-unresolved','treated-conflict')
  if r['treatmentStatus']=='treated-verified':assert r['sourceRefs'] and r['evidenceRefs']
  records.append(r)
  if i==50 or i==target_count:checkpoints.append({'label':a.batch+('-complete' if i==target_count else '-halfway'),'treated':i,'total':target_count,'errors':0})
 counts=dict(Counter(r['treatmentStatus'] for r in records))
 b={'schemaVersion':1,'engineVersion':'master-100-v1-compatible','batchId':a.batch,'sourceId':SOURCE_ID,'createdAt':date,'historicalAttribution':'new-batch','scope':{'kind':'v3-classification-provenance-migration','denominatorUnit':'literal-artist-mention','freshAllMusicRetrieval':False},'priorTreatedCount':a.expected_prior,'records':records,'counts':counts,'checkpoints':checkpoints}
 content=json.dumps(b,ensure_ascii=False)+'\n'
 state['batches'].append({'path':target,'batchId':a.batch,'count':target_count,'sha256':hashlib.sha256(content.encode()).hexdigest(),'counts':counts})
 state['treatedCount']=len(prior)+len(records);state['remainingCount']=state['denominator']-state['treatedCount']
 state['counts']=dict(Counter(r['treatmentStatus'] for r in prior+records))
 state['newBatchCount']=target_count;state['lastCompletedBatch']=a.batch
 state['nextBatch']=('MASTER-'+str(int(a.batch.split('-')[1])+1).zfill(3)) if state['remainingCount'] else None
 state['latestBatch']={'batchId':a.batch,'first':names[0],'last':names[-1],'priorTreatedCount':a.expected_prior,'newUniqueCount':target_count,'counts':counts}
 assert hashlib.sha256(a.source.read_bytes()).hexdigest()==digest
 (root/target).write_text(content)
 statepath.write_text(json.dumps(state,ensure_ascii=False)+'\n')
 print(json.dumps({'batch':state['latestBatch'],'treated':state['treatedCount'],'remaining':state['remainingCount'],'unresolved':[r['displayName'] for r in records if r['treatmentStatus']=='treated-unresolved'],'conflicts':[r['displayName'] for r in records if r['treatmentStatus']=='treated-conflict']},ensure_ascii=False))

if __name__=='__main__':main()
