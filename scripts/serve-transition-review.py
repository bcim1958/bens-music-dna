from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import sys
# Localhost-only server. No deployment, credentials or real device storage.
root=Path(__file__).resolve().parents[1]
class Handler(SimpleHTTPRequestHandler):
 def __init__(self,*a,**kw):super().__init__(*a,directory=str(root),**kw)
 def do_GET(self):
  if self.path.split('?')[0]=='/test/transition-modern.html':
   text=(root/'test/daily.html').read_text()
   clock='''<script>const NativeDate=Date;window.Date=class extends NativeDate{constructor(...a){super(...(a.length?a:["2026-10-12T13:00:00+02:00"]));}static now(){return new NativeDate("2026-10-12T13:00:00+02:00").getTime();}};const nativeSet=Storage.prototype.setItem;Storage.prototype.setItem=function(k,v){if(window.injectBankFailure&&k==="bmd-positive-bank-v1")throw new DOMException("Synthetic bank quota","QuotaExceededError");return nativeSet.call(this,k,v);};</script>'''
   lifecycle="""<script>
let lifecycleBefore=null,lifecycleEvents=[];
const lifecycleBytes=()=>JSON.stringify(Object.fromEntries(Object.keys(localStorage).sort().map(k=>[k,localStorage.getItem(k)])));
function lifecycleReport(){const el=document.getElementById('transition-lifecycle-status');if(el)el.textContent=JSON.stringify({synthetic:true,origin:location.origin,events:lifecycleEvents},null,2);}
document.addEventListener('DOMContentLoaded',()=>{const p=document.createElement('pre');p.id='transition-lifecycle-status';document.body.append(p);const b=document.createElement('button');b.textContent='Capture synthetic lifecycle snapshot';b.onclick=()=>{lifecycleBefore=lifecycleBytes();lifecycleEvents.push({captured:true});lifecycleReport();};document.body.append(b);const a=document.createElement('a');a.href='transition-away.html';a.textContent='Navigate away for lifecycle test';document.body.append(a);});
window.addEventListener('pageshow',e=>setTimeout(()=>{let lease=false;try{MUSIC_DNA_RATING_TRANSACTION.requireLease();lease=true;}catch(ignore){}lifecycleEvents.push({pageshow:true,persisted:e.persisted,leaseUsable:lease,blocked:!!window.MUSIC_DNA_STORAGE_BLOCKED,storageUnchanged:lifecycleBefore===null?null:lifecycleBefore===lifecycleBytes()});lifecycleReport();},0));
</script>"""
   text=text.replace('<head>','<head>'+clock+lifecycle,1)
   data=text.encode();self.send_response(200);self.send_header('Content-Type','text/html; charset=utf-8');self.send_header('Cache-Control','no-store');self.send_header('Content-Length',str(len(data)));self.end_headers();self.wfile.write(data)
  else:super().do_GET()
server=ThreadingHTTPServer(('127.0.0.1',int(sys.argv[1])),Handler)
print('Isolated synthetic QA: http://127.0.0.1:'+str(server.server_port),flush=True)
server.serve_forever()
