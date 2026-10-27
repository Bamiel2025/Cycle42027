import re

# Mise à jour 4e.js
with open('app/data/4e.js', 'r', encoding='utf-8') as f:
    c4 = f.read()

# S6 -> A4-TECT
c4 = re.sub(r'(\{ s: 6,[\s\S]*?titre: "[^"]+")', r'\1, act: "A4-TECT"', c4)
# S7 -> A4-GPS
c4 = re.sub(r'(\{ s: 7,[\s\S]*?titre: "[^"]+")', r'\1, act: "A4-GPS"', c4)
# S9 -> A4-VOLC
c4 = re.sub(r'(\{ s: 9,[\s\S]*?titre: "[^"]+")', r'\1, act: "A4-VOLC"', c4)
# S15 -> A4-MYCO
c4 = re.sub(r'(\{ s: 15,[\s\S]*?titre: "[^"]+")', r'\1, act: "A4-MYCO"', c4)
# S27 -> A4-AUDI
c4 = re.sub(r'(\{ s: 27,[\s\S]*?titre: "[^"]+")', r'\1, act: "A4-AUDI"', c4)

with open('app/data/4e.js', 'w', encoding='utf-8') as f:
    f.write(c4)
print("4e.js mis à jour avec les nouveaux liens d'activités")

# Mise à jour 3e.js
with open('app/data/3e.js', 'r', encoding='utf-8') as f:
    c3 = f.read()

# S2 -> A3-DENS
c3 = re.sub(r'(\{ s: 2,[\s\S]*?titre: "[^"]+")', r'\1, act: "A3-DENS"', c3)
# S19 -> A3-TCA
c3 = re.sub(r'(\{ s: 19,[\s\S]*?titre: "[^"]+")', r'\1, act: "A3-TCA"', c3)

with open('app/data/3e.js', 'w', encoding='utf-8') as f:
    f.write(c3)
print("3e.js mis à jour avec les nouveaux liens d'activités")
