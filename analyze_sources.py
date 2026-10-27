import os
import json
import re

print("=== ANALYSE DE D:\\Cours 2026\\Progessions\\svt-2027 ===")
svt_4e = r'D:\Cours 2026\Progessions\svt-2027\data\4eme.js'
svt_3e = r'D:\Cours 2026\Progessions\svt-2027\data\3eme.js'

def extract_svt_data(filepath, lvl):
    with open(filepath, 'r', encoding='utf-8') as f:
        c = f.read()
    # extraire JSON ou structure
    # Cherchons toutes les occurrences de { id: "s...", titre: "...", ... }
    # ou utilisons une regex
    seances = re.findall(r'\{\s*id:\s*"([^"]+)",\s*titre:\s*"([^"]+)",\s*type:\s*"([^"]+)"([\s\S]*?)(?=\n\s*\{\s*id:|\n\s*\])', c)
    print(f"[{lvl}] {len(seances)} séances trouvées dans {os.path.basename(filepath)}")
    for s_id, s_titre, s_type, s_rest in seances[:8]:
        obj = re.search(r'objectif:\s*"([^"]+)"', s_rest)
        obj_txt = obj.group(1)[:50] if obj else ""
        print(f"   {s_id} ({s_type}): {s_titre[:60]} | obj: {obj_txt}")
    return seances

s4 = extract_svt_data(svt_4e, '4eme')
s3 = extract_svt_data(svt_3e, '3eme')

print("\n=== ANALYSE DE D:\\Cours 2026\\Progessions\\lelivre-2027 ===")
ll_4e = r'D:\Cours 2026\Progessions\lelivre-2027\data\4eme.js'
ll_3e = r'D:\Cours 2026\Progessions\lelivre-2027\data\3eme.js'
ll4 = extract_svt_data(ll_4e, '4eme')
ll3 = extract_svt_data(ll_3e, '3eme')

# Regardons le dossier raw de lelivre-2027
raw_dir = r'D:\Cours 2026\Progessions\lelivre-2027\raw'
if os.path.exists(raw_dir):
    raw_files = os.listdir(raw_dir)
    print(f"\nFichiers JSON raw dans lelivre-2027 : {len(raw_files)} fichiers")
    for rf in raw_files[:10]:
        print(f"   - {rf}")
