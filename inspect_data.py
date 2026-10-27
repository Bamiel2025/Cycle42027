import re
import json

with open('app/data/activites.js', 'r', encoding='utf-8') as f:
    c = f.read()

keys = re.findall(r'PROG\.activites\["([^"]+)"\]', c)
print('Total activites dans activites.js actuel:', len(keys))
print('Liste des cles:', keys)

# Voir les 2 premieres activites
for k in keys[:2]:
    m = re.search(r'PROG\.activites\["' + k + r'"\]\s*=\s*(\{[\s\S]*?\n\};)', c)
    if m:
        print(f"\n--- {k} ---")
        lines = m.group(1).splitlines()[:15]
        print("\n".join(lines))
