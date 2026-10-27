import re
import json

with open('app/data/activites.js', 'r', encoding='utf-8') as f:
    c = f.read()

keys = re.findall(r'"([A-Za-z0-9_-]+)":\s*\{\s*id:', c)
print(f"Total activites dans activites.js : {len(keys)}")
for k in keys:
    m = re.search(r'"' + re.escape(k) + r'":\s*\{[\s\S]*?niveau:\s*"([^"]+)"[\s\S]*?titre:\s*"([^"]+)"', c)
    if m:
        print(f"  [{m.group(1)}] {k:10} : {m.group(2)[:65]}")
    else:
        print(f"  {k}")
