import json
import re

with open(r'D:\Cours 2026\Progessions\svt-2027\data\4eme.js', 'r', encoding='utf-8') as f:
    c = f.read()

# Trouver la première séance complète
m = re.search(r'seances:\s*\[\s*(\{[\s\S]*?\n\s*\})', c)
if m:
    print("--- Structure Séance 1 svt-2027 4eme ---")
    print(m.group(1)[:1200])

with open(r'D:\Cours 2026\Progessions\svt-2027\data\3eme.js', 'r', encoding='utf-8') as f:
    c3 = f.read()

m3 = re.search(r'seances:\s*\[\s*(\{[\s\S]*?\n\s*\})', c3)
if m3:
    print("\n--- Structure Séance 1 svt-2027 3eme ---")
    print(m3.group(1)[:1200])
