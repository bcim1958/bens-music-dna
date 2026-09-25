"""Complete remaining v3 migration with persisted batches of at most 100.

One invocation covers the remaining population; unresolved records are terminal.
Usage: python scripts/complete-master-100.py source.xlsx --node /path/to/node
"""
import argparse,json,subprocess,sys
from pathlib import Path

def main():
 p=argparse.ArgumentParser();p.add_argument('source');p.add_argument('--node',required=True);a=p.parse_args()
 root=Path(__file__).resolve().parents[1];sp=root/'data/master-100/state.json'
 subprocess.run([a.node,str(root/'test/master-100-register.cjs')],check=True)
 while True:
  s=json.loads(sp.read_text())
  if s['remainingCount']==0:break
  subprocess.run([sys.executable,str(root/'scripts/append-master-100-batch.py'),a.source,'--batch',s['nextBatch'],'--expected-prior',str(s['treatedCount'])],check=True)
  subprocess.run([a.node,str(root/'test/master-100-register.cjs')],check=True)
 subprocess.run([sys.executable,str(root/'scripts/verify-master-100-source.py'),a.source],check=True)
 print('Complete: all denominator mentions terminal; source enrichment is a separate scope.')

if __name__=='__main__':main()
