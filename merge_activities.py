import json
import re

with open('app/data/activites_extra.json', 'r', encoding='utf-8') as f:
    extra = json.load(f)

with open('app/data/activites.js', 'r', encoding='utf-8') as f:
    c = f.read()

# Pour chaque activité dans extra, générer la chaîne JS
js_blocks = []
for k, act in extra.items():
    if f'"{k}":' in c:
        print(f"Activité {k} déjà présente, ignorée.")
        continue
    act_str = json.dumps(act, ensure_ascii=False, indent=2)
    # indenter proprement
    indented = "\n".join("  " + line for line in act_str.splitlines())
    js_blocks.append(f'  "{k}": {indented.strip()},\n')

if js_blocks:
    # Insérer avant la dernière accolade fermante de PROG.activites
    # Trouver le dernier '};'
    last_idx = c.rfind('};')
    if last_idx != -1:
        new_c = c[:last_idx] + "\n" + "".join(js_blocks) + c[last_idx:]
        with open('app/data/activites.js', 'w', encoding='utf-8') as f:
            f.write(new_c)
        print(f"{len(js_blocks)} activités ajoutées avec succès à activites.js !")
    else:
        print("Erreur : impossible de trouver '};' dans activites.js")
else:
    print("Aucune nouvelle activité à ajouter.")
