"""Pure offline prototype. No storage, network, playlist or production integration."""
from copy import deepcopy
from datetime import date, timedelta
RATINGS = {'RAAK','GOED','TERUGKOMEN','NIET'}
FIRST_REVIEW = date(2027,1,4)

def quarter_opening(year, month):
    start=date(year,month,1)
    return start+timedelta(days=(-start.weekday()) % 7)

def next_review(observed_date=None):
    """First Monday of a quarter strictly after assessment; never before Jan 4 2027."""
    threshold=date.fromisoformat(observed_date) if observed_date else date(2026,12,31)
    for year in range(max(2027,threshold.year),threshold.year+3 if threshold.year>=2027 else 2030):
        for month in (1,4,7,10):
            opening=quarter_opening(year,month)
            if opening>=FIRST_REVIEW and opening>threshold:return opening.isoformat()
    raise ValueError('No quarterly opening found')

def validate(event):
    for field in ('eventId','candidateId','source'):
        if not isinstance(event.get(field),str) or not event[field].strip():raise ValueError('Missing '+field)
    if event.get('rating') not in RATINGS:raise ValueError('Invalid rating')
    if type(event.get('sequence')) is not int or event['sequence']<1:raise ValueError('Invalid sequence')
    if event.get('observedDate') is not None:date.fromisoformat(event['observedDate'])

def append_event(history,event):
    """Preserve every prior event; identical import retries are idempotent."""
    validate(event)
    for old in history:
        validate(old)
        if old['eventId']==event['eventId']:
            if old!=event:raise ValueError('Conflicting event ID')
            return deepcopy(history)
    if history and event['sequence']<=max(x['sequence'] for x in history):raise ValueError('Sequence must increase')
    return deepcopy([*history,event])

def project(history,as_of):
    """Derived archive queues by candidate identity; history remains authoritative.
    Unknown recording IDs are never joined by title/artist. Cross-ID recording
    reconciliation requires a separate explicit identity decision before import.
    """
    today=date.fromisoformat(as_of); validated=[]
    for event in history:validated=append_event(validated,event)
    latest={}
    for e in validated:latest[e['candidateId']]=e
    result={'outgoing':[],'waiting':[],'retained':[],'due':[]}
    for key,e in sorted(latest.items()):
        row={'candidateId':key,'latestEventId':e['eventId'],'rating':e['rating']}
        if e['rating']=='NIET':result['outgoing'].append(row)
        elif e['rating']=='TERUGKOMEN':
            row['reviewOn']=next_review(e.get('observedDate'));result['waiting'].append(row)
            if date.fromisoformat(row['reviewOn'])<=today:result['due'].append(deepcopy(row))
        else:result['retained'].append(row)
    return result
