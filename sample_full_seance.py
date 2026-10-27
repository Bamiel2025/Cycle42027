import re

with open(r'D:\Cours 2026\Progessions\svt-2027\data\4eme.js', 'r', encoding='utf-8') as f:
    c = f.read()

# Trouver la première séance complète jusqu'à l'accolade fermante
idx_start = c.find('seances: [')
idx_s01 = c.find('id: "s01"', idx_start)
idx_s02 = c.find('id: "s02"', idx_s01)
print(c[idx_s01-10:idx_s02-15])
