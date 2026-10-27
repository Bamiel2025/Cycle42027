#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Générateur ODT (LibreOffice) pour fiches activité SVT 2027
Utilise odfpy. Génère fiches/odt/<ID>-eleve.odt et <ID>-prof.odt
"""
import os
import sys
import json
import base64
from odf.opendocument import OpenDocumentText
from odf.style import Style, TextProperties, ParagraphProperties, PageLayout, PageLayoutProperties, MasterPage
from odf.text import H, P, Span, List, ListItem
from odf.table import Table, TableColumn, TableRow, TableCell
from odf.draw import Frame, Image
from odf import teletype

ROOT = r"D:\IA\ProgrammesSVT2027Antigravity"
CUR_PATH = os.path.join(ROOT, "_curation.cjs")
ASSETS_DIR = os.path.join(ROOT, "app", "assets", "docs")
OUT_DIR = os.path.join(ROOT, "fiches", "odt")

os.makedirs(OUT_DIR, exist_ok=True)

# Charger PROG (Node) via subprocess léger? Ou lire les JS
# Plus simple: exécuter petit snippet Node pour exporter JSON
def load_prog():
    import subprocess
    code = r'''
const fs=require('fs');
global.window=global; global.PROG={levels:{},activites:{}};
require('./app/data/5e.js'); require('./app/data/4e.js'); require('./app/data/3e.js');
require('./app/data/activites.js'); require('./app/data/docs_rich.js');
const out={levels:global.PROG.levels,activites:global.PROG.activites};
process.stdout.write(JSON.stringify(out));
'''
    try:
        res = subprocess.run(['node', '-e', code], cwd=ROOT, capture_output=True, text=True, timeout=60)
        return json.loads(res.stdout)
    except Exception as e:
        print(e, file=sys.stderr)
        return {'levels':{}, 'activites':{}}

def load_curation():
    try:
        # lire _curation.cjs et extraire objet (simple)
        with open(CUR_PATH, encoding='utf-8') as f:
            s = f.read()
        # extraire entre module.exports = { ... };
        m = re.search(r'module\.exports\s*=\s*({[\s\S]*?});\s*$', s, re.M)
        if m:
            body = m.group(1)
            # évaluer de façon prudente: remplacer guillemets simples par doubles pour JSON-like basique
            # mais garde apostrophes françaises
            import ast
            # ast.literal_eval exige Python dict; on contourne via json + nettoyages mineurs
            body_json = body.replace("'", '"')
            # corriger apostrophes françaises dans chaînes (garde)
            # ast ne marche pas direct; utiliser demjson? non. Alternative: évaluer via Node JSON
            pass
        # fallback: via node
        import subprocess, re as _re
        code = r'''
const c=require('./_curation.cjs');
process.stdout.write(JSON.stringify(c));
'''
        res = subprocess.run(['node','-e',code], cwd=ROOT, capture_output=True, text=True, timeout=30)
        return json.loads(res.stdout)
    except Exception as e:
        print(e, file=sys.stderr)
        return {}

import re
PROG = load_prog()
CUR = load_curation()

def get_ctx(actid):
    act = PROG['activites'].get(actid, {})
    for nivk,niv in PROG['levels'].items():
        if act.get('niveau') in (nivk, niv.get('label')):
            for t in niv.get('themes',[]):
                for p in t.get('parties',[]):
                    for ch in p.get('chapitres',[]):
                        for sec in ch.get('sections',[]):
                            for se in sec.get('seances',[]):
                                if se.get('act')==actid:
                                    return {
                                        'niveau': niv.get('label'),
                                        'couleur': niv.get('couleur','#2e7d32'),
                                        'theme': t.get('titre',''),
                                        'partie': p.get('titre',''),
                                        'probleme': p.get('problematique',''),
                                        'seanceTitre': se.get('titre',''),
                                        'duree': f"{se.get('h','')} h",
                                        'competences': se.get('comp',[]),
                                    }
    return {}

def img_path(fig):
    if not fig: return None
    base = os.path.splitext(fig)[0]+'.jpg'
    p = os.path.join(ASSETS_DIR, base)
    return p if os.path.exists(p) else None

def add_h(doc, text, level=1):
    h = H(outlinelevel=level, text=teletype.extractText(text) if text else '')
    doc.text.addElement(h)

def add_p(doc, text, bold=False, sizept=None, color=None, pagebreakbefore=False):
    p = P()
    if pagebreakbefore:
        sp = Style(name=f'PB{abs(id(p))}', family='paragraph')
        sp.addElement(ParagraphProperties(breakbefore='page'))
        doc.automaticstyles.addElement(sp)
        p.setAttribute('stylename', sp)
    if bold or sizept or color:
        stn = f'S{abs(id(p))}'
        st = Style(name=stn, family='paragraph')
        tp = TextProperties()
        if bold: tp.setAttribute('fontweight','bold')
        if color: tp.setAttribute('color',color)
        if sizept: tp.setAttribute('fontsize', f'{sizept}pt')
        st.addElement(tp)
        doc.automaticstyles.addElement(st)
        p.setAttribute('stylename', st)
    if text:
        teletype.addTextToElement(p, teletype.extractText(text))
    doc.text.addElement(p)
    return p

def add_img(doc, fig):
    p = path = img_path(fig)
    if not path: return
    try:
        with open(path,'rb') as f: data=f.read()
        img = Image(href=f'Pictures/{os.path.basename(path)}', type='simple', show='embed', actuate='onLoad')
        # embed
        doc.addPicture(path, os.path.basename(path))
        frame = Frame(width='17cm', height='auto')
        frame.addElement(img)
        p = P()
        p.addElement(frame)
        doc.text.addElement(p)
    except Exception as e:
        pass

def gen_odt(actid, mode):
    c = CUR.get(actid) or {'docs':[], 'questions':[]}
    act = PROG['activites'].get(actid,{})
    ctx = get_ctx(actid)
    doc = OpenDocumentText()
    # styles basiques
    pl = PageLayout(name='pagelayout')
    pl.addElement(PageLayoutProperties(pagewidth='21cm', pageheight='29.7cm', marginleft='2cm', marginright='2cm', margintop='2cm', marginbottom='2cm'))
    doc.automaticstyles.addElement(pl)
    mp = MasterPage(name='Standard', pagelayoutname=pl)
    doc.masterstyles.addElement(mp)

    add_h(doc, f"{actid} — {act.get('titre','')}", level=1)
    add_p(doc, f"Niveau : {ctx.get('niveau', act.get('niveau',''))}   |   Durée : {ctx.get('duree', act.get('duree',''))}")
    if act.get('contexte'): add_p(doc, f"Contexte : {act['contexte']}")
    pb = act.get('problematique') or ctx.get('probleme')
    if pb: add_p(doc, f"Problématique : {pb}", bold=True, color=ctx.get('couleur','#2e7d32'))

    # documents
    for d in c.get('docs',[]):
        add_h(doc, f"Document {d.get('num')} — {d.get('titre','')}", level=2)
        add_p(doc, f"Type : {d.get('type','')} | {d.get('legende','')}")
        if d.get('fig'): add_img(doc, d['fig'])
        src = d.get('source','')
        if src: add_p(doc, f"Source : {src} {d.get('annee') or ''}", sizept=8)
        add_p(doc, ' ')

    # questions
    add_h(doc, "Questions", level=2)
    for q in c.get('questions',[]):
        txt = f"Q{q.get('n')} ({q.get('pts')} pts) — {q.get('texte','')}"
        add_p(doc, txt, bold=True)
        dref = q.get('docs') or []
        add_p(doc, f"Appui : Documents {', '.join(map(str,dref)) if dref else 'Connaissances'} | Compétence : {q.get('competence','')}", sizept=9)
        rep = '________________________________\n________________________________\n________________________________'
        if mode=='prof' and q.get('corrige'):
            rep = q['corrige']
            if q.get('diff'): rep += f"\n\nDifférenciation : {q['diff']}"
        add_p(doc, rep)
        add_p(doc, ' ')

    if mode=='prof' and act.get('grille_lsu'):
        add_p(doc, 'Correction / Grille LSU', bold=True, pagebreakbefore=True)
        gl = act['grille_lsu']
        # tableau simple
        table = Table()
        table.addElement(TableColumn())
        for _ in range(4): table.addElement(TableColumn())
        trh = TableRow()
        for h in ['Domaine','MI','MF','MS','TBM']:
            tc = TableCell()
            tc.addElement(P(text=h))
            trh.addElement(tc)
        table.addElement(trh)
        for dom,vals in gl.items():
            tr = TableRow()
            for v in [dom, vals.get('MI',''), vals.get('MF',''), vals.get('MS',''), vals.get('TBM','')]:
                tc = TableCell()
                tc.addElement(P(text=str(v)))
                tr.addElement(tc)
            table.addElement(tr)
        doc.text.addElement(table)

    out = os.path.join(OUT_DIR, f"{actid}-{mode}.odt")
    doc.save(out, True)
    return out

def main():
    import re as _re
    acts = list(CUR.keys())
    print(f"Génération ODT pour {len(acts)} activités...")
    for aid in acts:
        try:
            gen_odt(aid,'eleve')
            gen_odt(aid,'prof')
            print(f"  {aid} OK")
        except Exception as e:
            print(f"  {aid} ERREUR: {e}")
    print("Terminé")

if __name__=='__main__':
    main()
