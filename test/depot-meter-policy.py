import importlib.util, unittest
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
def load(name,file):
    spec=importlib.util.spec_from_file_location(name,ROOT/file);module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module);return module
p=load('policy','scripts/depot-review-policy.py');a=load('analysis','scripts/analyze-depot-meter.py')
class Checks(unittest.TestCase):
    def event(self,n,rating,**kw):return dict(eventId=f'e{n}',candidateId='legacy-without-spotify',rating=rating,sequence=n,source='fixture',observedDate=None,**kw)
    def test_history_transition_and_no_mutation(self):
        original=[];h=p.append_event(original,self.event(1,'TERUGKOMEN'));self.assertEqual(original,[])
        self.assertEqual(p.project(h,'2027-01-03')['due'],[])
        self.assertEqual(len(p.project(h,'2027-01-04')['due']),1)
        h=p.append_event(h,self.event(2,'NIET'));self.assertEqual(len(h),2);self.assertEqual(p.project(h,'2027-01-04')['waiting'],[])
        h=p.append_event(h,self.event(3,'GOED'));self.assertEqual(len(h),3);self.assertEqual(p.project(h,'2027-01-04')['outgoing'],[])
    def test_import_retry_and_conflict(self):
        e=self.event(1,'NIET');h=p.append_event([],e);self.assertEqual(p.append_event(h,e),h)
        with self.assertRaises(ValueError):p.append_event(h,{**e,'rating':'RAAK'})
        with self.assertRaises(ValueError):p.append_event(h,{**self.event(2,'GOED'),'sequence':1})
    def test_quarter_dates(self):
        for after,expect in [(None,'2027-01-04'),('2026-10-09','2027-01-04'),('2027-01-04','2027-04-05'),('2027-04-05','2027-07-05'),('2027-07-05','2027-10-04'),('2027-10-04','2028-01-03')]:self.assertEqual(p.next_review(after),expect)
    def test_invalid_inputs(self):
        for e in [{**self.event(1,'GOED'),'rating':'YES'},{**self.event(1,'GOED'),'source':''},{**self.event(1,'GOED'),'observedDate':'2027-02-31'}]:
            with self.assertRaises(ValueError):p.append_event([],e)
    def test_multilabel_unknown_and_usage_separate(self):
        rows=[{'AllMusic stijlen':'Rock; Rock; Metal','DNA Gebruikt':'Ja'},{'AllMusic stijlen':None,'DNA Gebruikt':'Nee'}]
        d=a.distribution(rows,'AllMusic stijlen',';');self.assertEqual(d['Rock']['master'],1);self.assertEqual(d['ONBEKEND']['withoutRegisteredUse'],1)
    def test_canonical_reconciliation(self):
        r=a.analyze();self.assertEqual(r['totals'],dict(master=3877,used=3005,withoutRegisteredUse=872))
        for dist in r['distributions'].values():
            for row in dist.values():self.assertEqual(row['master'],row['used']+row['withoutRegisteredUse'])
        self.assertEqual(sum(r['historical']['ratingCounts'].values()),33);self.assertEqual(r['historical']['candidateIdentityMissing'],0)
        self.assertEqual(r['historical']['staticOfferFlagContradictions'],3)
if __name__=='__main__':unittest.main()
