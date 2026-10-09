"""Read-only comparison of canonical Master 1.14.4, its CSV and the served Depot."""
import argparse
import csv
import hashlib
import io
import json
from pathlib import Path
import sys
import zipfile

ROOT = Path(__file__).resolve().parents[1]
ARCHIVE = ROOT / 'archive/checkpoints/2026-10-08/Music-DNA-Master-1.14.4-Broncontrole.zip'
CATALOG = ROOT / 'data/depot/catalogus.json'


def audit(master, csv_rows, source_checks, depot, control):
    errors = []
    def check(condition, message):
        if not condition:
            errors.append(message)
    def index(rows, field, label):
        result = {}
        for row in rows:
            key = row.get(field)
            check(bool(key), label + ': missing ' + field)
            check(key not in result, label + ': duplicate ' + str(key))
            result[key] = row
        return result
    master_by_uri = index(master, 'Track URI', 'Master JSON')
    csv_by_uri = index(csv_rows, 'Track URI', 'Master CSV')
    depot_by_id = index(depot, 'id', 'Depot')
    check(set(master_by_uri) == set(csv_by_uri), 'CSV and JSON identities differ')
    check(set(master_by_uri) == {'spotify:track:' + str(i) for i in depot_by_id}, 'Depot and Master identities differ')
    for uri, row in master_by_uri.items():
        exported = csv_by_uri.get(uri, {})
        for field, value in row.items():
            expected = '' if value is None else str(value)
            check(exported.get(field, '') == expected, uri + ': CSV field differs: ' + field)
        card = depot_by_id.get(uri.split(':')[-1])
        if card is None:
            continue
        for target, origin in [('artist', 'Artist Name(s)'), ('track', 'Track Name'), ('album', 'Album Name')]:
            check((card.get(target) or '') == (row.get(origin) or ''), uri + ': Depot field differs: ' + target)
        check(card.get('year') == row.get('DNA Uitgiftejaar uitvoering'), uri + ': Depot source year differs')
        check(card.get('exposed') is (row.get('DNA Gebruikt') == 'Ja'), uri + ': usage differs')
        expected_apps = [x.strip() for x in (row.get('DNA Playlist(s)') or '').split(';') if x.strip()]
        check(card.get('apps') == expected_apps, uri + ': application list differs')
        for field, warning in [('album', 'album ontbreekt'), ('year', 'year ontbreekt'), ('country', 'country ontbreekt')]:
            check(not (card.get(field) and warning in card.get('missing', [])), uri + ': stale missing-field warning: ' + field)
        sources = source_checks.get(uri)
        if sources:
            check(card.get('sources') == sources.get('source_urls'), uri + ': source URLs differ')
            check(bool(card.get('context_scope')), uri + ': source scope missing')
            check(card.get('country') == sources.get('country'), uri + ': country source context differs')
        else:
            check(not card.get('sources'), uri + ': unregistered source URLs')
    used = sum(row.get('DNA Gebruikt') == 'Ja' for row in master)
    check(len(master) == control['tracks'], 'Master total differs from canonical checkpoint')
    check(used == control['used'], 'Used count differs from canonical checkpoint')
    check(len(master) - used == control['unused'], 'Unused count differs from canonical checkpoint')
    check(len(source_checks) == control['reviewed_records'], 'Source coverage differs from canonical checkpoint')
    return {'pass': not errors, 'canonicalVersion': control['version'], 'masterTracks': len(master),
            'csvTracks': len(csv_rows), 'depotTracks': len(depot), 'used': used,
            'withoutRegisteredUse': len(master)-used, 'sourceCheckedCards': len(source_checks),
            'errors': errors, 'filesModified': False, 'liveFifoProven': False, 'w41EndToEndProven': False}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output', type=Path)
    args = parser.parse_args()
    with zipfile.ZipFile(ARCHIVE) as archive:
        def read(name):
            return archive.read('master-1.14.4/' + name)
        master = json.loads(read('MASTER_ACTUEEL.json'))
        csv_rows = list(csv.DictReader(io.StringIO(read('MASTER_ACTUEEL.csv').decode('utf-8-sig'))))
        sources = json.loads(read('BRONCONTROLE.json'))
        control = json.loads(read('CONTROLE.json'))
    depot = json.loads(CATALOG.read_text())
    report = audit(master, csv_rows, sources, depot, control)
    report['archiveSha256'] = hashlib.sha256(ARCHIVE.read_bytes()).hexdigest()
    report['catalogSha256'] = hashlib.sha256(CATALOG.read_bytes()).hexdigest()
    encoded = json.dumps(report, ensure_ascii=False, indent=2) + '\n'
    if args.output:
        args.output.write_text(encoded)
    print(encoded, end='')
    return 0 if report['pass'] else 1


if __name__ == '__main__':
    sys.exit(main())
