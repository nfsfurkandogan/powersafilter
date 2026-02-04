#!/usr/bin/env python3
import sys
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path
import re
import json


def col_to_index(col):
    idx = 0
    for c in col:
        idx = idx * 26 + (ord(c.upper()) - ord('A') + 1)
    return idx - 1


def parse_sheet(z, sheet_name, shared_strings):
    root = ET.fromstring(z.read(sheet_name))
    ns = {'ns': root.tag.split('}')[0].strip('{')}
    rows = []
    max_col = 0
    for row in root.findall('.//ns:row', ns):
        cells = {}
        for c in row.findall('ns:c', ns):
            r = c.attrib.get('r', '')
            m = re.match(r"([A-Z]+)(\d+)", r)
            col_idx = None
            if m:
                col_idx = col_to_index(m.group(1))
                if col_idx > max_col:
                    max_col = col_idx
            t = c.attrib.get('t')
            v = c.find('ns:v', ns)
            if v is None:
                val = ''
            else:
                val = v.text or ''
                if t == 's':
                    try:
                        val = shared_strings[int(val)]
                    except Exception:
                        pass
            if col_idx is not None:
                cells[col_idx] = val
        if cells:
            row_vals = [''] * (max_col + 1)
            for idx, val in cells.items():
                if idx >= len(row_vals):
                    row_vals.extend([''] * (idx - len(row_vals) + 1))
                row_vals[idx] = val
            rows.append(row_vals)
    return rows


def main():
    if len(sys.argv) < 2:
        print('Usage: python3 scripts/xlsx_to_js.py "2026 STOK SABİT.XLSX"', file=sys.stderr)
        sys.exit(1)

    xlsx_path = Path(sys.argv[1])
    if not xlsx_path.exists():
        print(f'File not found: {xlsx_path}', file=sys.stderr)
        sys.exit(1)

    with zipfile.ZipFile(xlsx_path) as z:
        shared_strings = []
        if 'xl/sharedStrings.xml' in z.namelist():
            ss_root = ET.fromstring(z.read('xl/sharedStrings.xml'))
            ns = {'ns': ss_root.tag.split('}')[0].strip('{')}
            for si in ss_root.findall('.//ns:si', ns):
                texts = [t.text or '' for t in si.findall('.//ns:t', ns)]
                shared_strings.append(''.join(texts))

        sheet_name = 'xl/worksheets/sheet1.xml'
        if sheet_name not in z.namelist():
            for name in z.namelist():
                if name.startswith('xl/worksheets/sheet') and name.endswith('.xml'):
                    sheet_name = name
                    break

        rows = parse_sheet(z, sheet_name, shared_strings)

    max_len = max(len(r) for r in rows)
    rows = [r + [''] * (max_len - len(r)) for r in rows]

    header = rows[0]
    col_index = {name: i for i, name in enumerate(header)}

    cols = {
        'stokKodu': col_index.get('Stok Kodu'),
        'ureticiKodu': col_index.get('Üretici Kodu'),
        'stokIsmi': col_index.get('Stok İsmi'),
        'kod1': col_index.get('Kod-1'),
        'kod3': col_index.get('Kod-3'),
        'kod4': col_index.get('Kod-4'),
        'grupIsmi': col_index.get('Grup İsmi'),
    }

    items = []
    for r in rows[1:]:
        obj = {k: (r[idx] if idx is not None else '') for k, idx in cols.items()}
        if not any(obj.values()):
            continue
        items.append(obj)

    out_path = Path('data/products.js')
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with out_path.open('w', encoding='utf-8') as f:
        f.write('window.POWERSA_PRODUCTS = ')
        json.dump(items, f, ensure_ascii=False)
        f.write(';\n')

    print(f'Wrote {out_path} with {len(items)} items')


if __name__ == '__main__':
    main()
