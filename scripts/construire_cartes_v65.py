"""Cartes des ports, à partir des coordonnées des communes et de Natural Earth."""
import json,pathlib,urllib.request,math,html
from PIL import Image,ImageDraw,ImageFont
ROOT=pathlib.Path(__file__).resolve().parents[1];DEST=ROOT/'chatbot/assets/fiches'
country=json.loads((DEST/'sources-v65/natural-earth-50m-countries.json').read_text())
fr=next(f for f in country['features'] if f['properties']['ADMIN']=='France')['geometry']
polys=fr['coordinates'] if fr['type']=='MultiPolygon' else [fr['coordinates']]
polys=[p[0] for p in polys if all(-7<x<11 and 40<y<52 for x,y,*_ in p[0])]
towns=[('Dunkerque','59183'),('Le Havre','76351'),('Saint-Nazaire','44184'),('Nantes','44109'),('Marseille','13055')]
coords={}
for name,code in towns:
 u='https://geo.api.gouv.fr/communes/'+code+'?fields=nom,centre'
 q=json.load(urllib.request.urlopen(u));assert q['nom']==name,(name,q['nom']);coords[name]=q['centre']['coordinates']
(ROOT/'reports/sources_v65/ports-coordonnees.json').write_text(json.dumps(coords,ensure_ascii=False,indent=2))
S=3;W,H=720,620
fontpath=ROOT/'chatbot/vendor/repere-hand.ttf'
def position(lng,lat):return ((lng+6.5)*42,(51.7-lat)*54+15)
labels={'Dunkerque':(390,37),'Le Havre':(315,108),'Saint-Nazaire':(10,206),'Nantes':(205,248),'Marseille':(465,482)}
for key,selected in [('ports',list(coords)),('ports-nantes',['Nantes']),('ports-marseille',['Marseille'])]:
 im=Image.new('RGBA',(W*S,H*S),(0,0,0,0));d=ImageDraw.Draw(im);font=ImageFont.truetype(str(fontpath),28*S)
 svgpaths=[]
 for poly in polys:
  pts=[position(*p[:2]) for p in poly];d.polygon([(x*S,y*S) for x,y in pts],fill='#faf0d6');d.line([(x*S,y*S) for x,y in pts]+[(pts[0][0]*S,pts[0][1]*S)],fill='#47382d',width=2*S)
  svgpaths.append('<polygon points="'+' '.join(f'{x:.1f},{y:.1f}' for x,y in pts)+'" fill="#faf0d6" stroke="#47382d" stroke-width="2"/>')
 for name in selected:
  x,y=position(*coords[name]);lx,ly=labels[name];text='Marseille-Fos' if name=='Marseille' else name
  d.ellipse(((x-6)*S,(y-6)*S,(x+6)*S,(y+6)*S),fill='#a52339',outline='#fffefb',width=2*S)
  box=d.textbbox((lx*S,ly*S),text,font=font);d.rounded_rectangle((box[0]-5*S,box[1]-2*S,box[2]+5*S,box[3]+2*S),radius=4*S,fill='#fffefb');d.text((lx*S,ly*S),text,font=font,fill='#33261e')
  svgpaths.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="6" fill="#a52339" stroke="white" stroke-width="2"/><text x="{lx}" y="{ly+27}" font-family="sans-serif" font-size="25" fill="#33261e">{html.escape(text)}</text>')
 im.resize((W,H),Image.Resampling.LANCZOS).save(DEST/(key+'.png'),optimize=True)
 (DEST/(key+'.svg')).write_text('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 620">'+''.join(svgpaths)+'</svg>')
print('Trois cartes de ports construites avec coordonnées contrôlées.')
