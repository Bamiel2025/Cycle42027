import os
import json

raw_dir = r'D:\Cours 2026\Progessions\lelivre-2027\raw'
print("=== Exploration raw/ lelivre-2027 ===")
files = os.listdir(raw_dir)
print(f"Total fichiers JSON : {len(files)}")
for f in files[:5]:
    fp = os.path.join(raw_dir, f)
    with open(fp, 'r', encoding='utf-8') as jf:
        data = json.load(jf)
    print(f"\nFichier : {f}")
    print(f"  Level: {data.get('level')}, Chapter: {data.get('chapter')}, Title: {data.get('title')}")
    text = data.get('text', '')
    print(f"  Text length: {len(text)} chars")
    print(f"  Extrait text: {text[:200]}...")
