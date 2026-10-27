import re

with open('app/data/activites.js', 'r', encoding='utf-8') as f:
    c = f.read()

# Trouver toutes les clés de premier niveau dans PROG.activites = { ... }
keys = re.findall(r'^\s*\"([^\"]+)\":\s*\{', c, re.MULTILINE)
print("Clés trouvées avec regex multiline :", len(keys))
for k in keys:
    print("  -", k)
