#!/usr/bin/env python3
import os, json, subprocess
ROOT = r'D:\IA\ProgrammesSVT2027Antigravity'
with open(os.path.join(ROOT,'_curation.json'), encoding='utf-8') as f: CUR=json.load(f)
code = \"\"\"
global.window=global;global.PROG={levels:{},activites:{}};
try{require('./app/data/5e.js');require('./app/data/4e.js');require('./app/data/3e.js');}catch(e){}
try{require('./app/data/activites.js');require('./app/data/docs_rich.js');}catch(e){}
process.stdout.write(JSON.stringify({levels:global.PROG.levels,activites:global.PROG.activites}));
\"\"\"
res = subprocess.run(['node','-e',code], cwd=ROOT, capture_output=True, text=True, encoding='utf-8')
PROG = json.loads(res.stdout) if res.returncode==0 and res.stdout else {'levels':{},'activites':{}}
OUT = os.path.join(ROOT,'fiches','odt')
os.makedirs(OUT, exist_ok=True)
from odf.opendocument import OpenDocumentText
from odf.style import PageLayout, PageLayoutProperties, MasterPage
from odf.text import H,P
from odf.draw import Frame, Image
def get_ctx(aid):
    act = PROG['activites'].get(aid,{})
    for nivk,niv in PROG['levels'].items():
        if act.get('niveau') in (nivk,niv.get('label')):
            for t in niv.get('themes',[]):
                for p in t.get('parties',[]):
                    for se in p.get('chapitres',[])[0].get('sections',[])[0].get('seances',[]) if p.get('chapitres') else []:
                        if se.get('act')==aid: return {'probleme':p.get('problematique','')}
    return {}
def imgp(fig):
    if not fig: return None
    p = os.path.join(ROOT,'app','assets','docs',os.path.splitext(fig)[0]+'.jpg')
    return p if os.path.exists(p) else None
for aid in CUR:
    try:
        c=CUR[aid]; act=PROG['activites'].get(aid,{}); ctx=get_ctx(aid)
        doc = OpenDocumentText()
        pl = PageLayout(name='pl'); pl.addElement(PageLayoutProperties(pagewidth='21cm', pageheight='29.7cm', marginleft='2cm', marginright='2cm', margintop='2cm', marginbottom='2cm')); doc.automaticstyles.addElement(pl); doc.masterstyles.addElement(MasterPage(name='Standard', pagelayoutname='pl'))
        doc.text.addElement(H(outlinelevel=1, text=f"{aid} — {act.get('titre','')}"))
        pb = act.get('problematique') or ctx.get('probleme')
        if pb: doc.text.addElement(P(text=f"Problématique : {pb}"))
        for d in c.get('documents',[]):
            doc.text.addElement(H(outlinelevel=2, text=f"Document {d.get('numero')} — {d.get('titre','')}"))
            if d.get('legende'): doc.text.addElement(P(text=d['legende']))
            ip = imgp(d.get('image') or '')
            if ip:
                try:
                    doc.addPicture(ip, os.path.basename(ip))
                    f=Frame(width='17cm',height='auto'); f.addElement(Image(href=f'Pictures/{os.path.basename(ip)}', type='simple', show='embed', actuate='onLoad')); pr=P(); pr.addElement(f); doc.text.addElement(pr)
                except: pass
        doc.text.addElement(H(outlinelevel=2, text="Questions"))
        for q in c.get('questions',[]):
            doc.text.addElement(P(text=f"Q{q.get('n')} ({q.get('pts')} pts) — {q.get('texte','')}"))
            doc.text.addElement(P(text="Réponse : __________________"))
        doc.save(os.path.join(OUT,f"{aid}-eleve.odt"), True)
        print('ok',aid)
    except Exception as e:
        print('err',aid,e)