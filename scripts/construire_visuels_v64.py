"""Tracés géographiques contrôlés et plan officiel de l'hémicycle, sans image générée."""
import json, re, sys, html, pathlib, xml.etree.ElementTree as ET
from PIL import Image, ImageOps
ROOT=pathlib.Path(__file__).resolve().parents[1]
DEST=ROOT/'chatbot/assets/fiches'
# Dépendance pour reconstruire ces SVG : pip install cairosvg
import cairosvg
FONT='DejaVu Sans'
def render(key,body,box='0 0 620 620',width=720,height=720):
    svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{box}" width="{width}" height="{height}"><style>text{{font-family:{FONT};fill:#382b25}} .label{{font-weight:bold;font-size:20px;stroke:none}}</style><defs><pattern id="pencil" width="6" height="6" patternUnits="userSpaceOnUse"><path d="M0 6L6 0" stroke="#947653" stroke-opacity=".18" stroke-width=".5"/></pattern></defs>{body}</svg>'
    (DEST/(key+'.svg')).write_text(svg)
    cairosvg.svg2png(bytestring=svg.encode(),write_to=str(DEST/(key+'.png')))
    return key
def rivers():
    d=json.loads((ROOT/'activites-geographie/data.json').read_text())
    keys={'Seine':'seine','Rhône':'rhone','Rhin':'rhin','Loire':'loire','Garonne':'garonne'}
    result=[]
    for chosen in [None,*d['fleuves']]:
        body=f'<path d="{d["outline"]}" fill="#faf2dd" stroke="#443731" stroke-width="1.7"/><path d="{d["outline"]}" fill="url(#pencil)"/>'
        for r in d['fleuves']:
            if r==chosen:continue
            body+=f'<path d="{r["path"]}" fill="none" stroke="'+('#3b6985" stroke-width="2.8"/>' if chosen is None else '#b6b4b2" stroke-width="1.6" stroke-dasharray="3 3"/>')
        if chosen:
            r=chosen
            body+=f'<path d="{r["path"]}" fill="none" stroke="white" stroke-width="8"/><path d="{r["path"]}" fill="none" stroke="#1a5777" stroke-width="5" stroke-linecap="round"/>'
            body+=f'<circle cx="{r["x"]}" cy="{r["y"]}" r="5" fill="#1a5777" stroke="white" stroke-width="2"/><text class="label" x="{r["x"]+10}" y="{r["y"]-9}">{r["name"]}</text>'
            body+='<text x="30" y="565" font-size="20">Trait épais : fleuve à retenir</text>'
        else:
            for r in d['fleuves']:body+=f'<text class="label" x="{r["x"]}" y="{r["y"]-8}">{r["name"]}</text>'
        key='river-'+keys[chosen['name']] if chosen else 'rivers'
        result.append(render(key,body))
    return result
def assembly():
    p=ET.fromstring((DEST/'sources-v64/hemicycle-officiel.svg').read_text())
    paths=[]
    for e in p.iter():
        if e.tag.endswith('path'):
            attrs=' '.join(f'{k}="{html.escape(v,quote=True)}"' for k,v in e.attrib.items() if k in ['d','transform'])
            paths.append('<path '+attrs+' fill="#ead2c4" stroke="#634539" stroke-width=".7"/>')
    body='<g transform="translate(8 5)">'+''.join(paths)+'</g><text x="126" y="187" text-anchor="middle" font-size="13" font-weight="bold">577 députés</text>'
    render('assembly-seats',body,'0 0 252 198',840,660)
def decolonization():
    geo=json.loads((DEST/'sources-v64/natural-earth-countries.json').read_text())
    body=''
    for f in geo['features']:
        if f['properties'].get('ADMIN')=='Antarctica':continue
        geom=f['geometry'];polys=[geom['coordinates']] if geom['type']=='Polygon' else geom['coordinates']
        highlighted=f['properties'].get('ADMIN')=='Algeria'
        for poly in polys:
            pts=' '.join(f'{(lng+180)*2:.2f},{(85-lat)*2.7+10:.2f}' for lng,lat,*_ in poly[0])
            body+=f'<polygon points="{pts}" fill="'+('#b6673c' if highlighted else '#f3e7cc')+'" stroke="#705d48" stroke-width=".5"/>'
    body+='<text x="377" y="180" font-size="20" font-weight="bold" stroke="white" stroke-width="3" paint-order="stroke">Algérie</text><text x="413" y="285" font-size="28" font-weight="bold">AFRIQUE</text>'
    render('decolonization',body,'0 0 720 450',840,525)
def separation():
    body='<rect x="20" y="35" width="240" height="245" rx="7" fill="#faf1cf" stroke="#514638" stroke-width="2"/><rect x="310" y="35" width="240" height="245" rx="7" fill="#f1dee3" stroke="#514638" stroke-width="2"/>'
    body+='<text x="140" y="73" text-anchor="middle" font-size="25" font-weight="bold">ÉTAT</text><text x="430" y="73" text-anchor="middle" font-size="25" font-weight="bold">CULTES</text>'
    body+='<path d="M66 137L140 102L214 137ZM76 148H205M76 225H205M83 148V225M121 148V225M159 148V225M197 148V225" fill="#e2c59e" stroke="#574334" stroke-width="3"/>'
    body+='<path d="M368 226V154L430 110L493 154V226ZM416 226V181Q430 167 444 181V226" fill="#e5cbc1" stroke="#574334" stroke-width="3"/>'
    body+='<text x="285" y="314" text-anchor="middle" font-size="23" font-weight="bold">1905 : séparation</text>'
    render('separation1905',body,'0 0 570 350',840,516)
if __name__=='__main__':
    rivers();assembly();decolonization();separation()
    print('9 visuels contrôlés construits.')
