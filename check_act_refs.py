import json
import re

with open('app/data/4e.js', 'r', encoding='utf-8') as f:
    c4 = f.read()

with open('app/data/3e.js', 'r', encoding='utf-8') as f:
    c3 = f.read()

# Trouver les seances avec act: "..."
acts_4e = re.findall(r'act:\s*"([^"]+)"', c4)
acts_3e = re.findall(r'act:\s*"([^"]+)"', c3)

print("Activités référencées dans 4e.js :", len(acts_4e), set(acts_4e))
print("Activités référencées dans 3e.js :", len(acts_3e), set(acts_3e))
