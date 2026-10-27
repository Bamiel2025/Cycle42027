import re
import json

def get_seances(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        c = f.read()
    pattern = re.compile(r'\{\s*s:\s*(\d+),\s*h:\s*(\d+),\s*type:\s*"([^"]+)",\s*st:\s*"([^"]+)",\s*titre:\s*"([^"]+)"([\s\S]*?)(?=\n\s*\{\s*s:|\n\s*\]\s*\}\s*\])')
    matches = pattern.findall(c)
    out = []
    for m in matches:
        s_num, s_h, s_type, s_st, s_titre, rest = m
        act_m = re.search(r'act:\s*"([^"]+)"', rest)
        act_id = act_m.group(1) if act_m else None
        res_m = re.findall(r'"([^"]+)"', rest)
        out.append({
            's': int(s_num),
            'h': int(s_h),
            'type': s_type,
            'st': s_st,
            'titre': s_titre,
            'act': act_id,
            'res': [r for r in res_m if any(r.startswith(p) for p in ['pdf:', 'pack:', 's:', 'web:'])]
        })
    return out

seances_4e = get_seances('app/data/4e.js')
seances_3e = get_seances('app/data/3e.js')

print(f"4e: {len(seances_4e)} séances")
print(f"3e: {len(seances_3e)} séances")

print("\n--- Séances 4e avec act ou ressources ---")
for s in seances_4e:
    print(f"S{s['s']:02d} ({s['h']}h) [{s['type']:4s} | {s['st']:8s}] {s['titre'][:50]} -> act: {s['act']} | res: {s['res']}")

print("\n--- Séances 3e avec act ou ressources ---")
for s in seances_3e:
    print(f"S{s['s']:02d} ({s['h']}h) [{s['type']:4s} | {s['st']:8s}] {s['titre'][:50]} -> act: {s['act']} | res: {s['res']}")
