"""Conseils pédagogiques et paliers ludiques, sans valeur de certification."""
THEMES={1:'Principes et valeurs',2:'Institutions et système politique',3:'Droits et devoirs',4:'Histoire, géographie et culture',5:'Vivre dans la société française'}
ROLES={
1:['🕯️ Éclaireur des valeurs','🧭 Explorateur des principes','🤝 Artisan du respect','🕊️ Ambassadeur du vivre-ensemble','⚖️ Gardien des valeurs','🌟 Porte-parole des valeurs'],
2:['🗺️ Explorateur de la cité','🏛️ Visiteur des institutions','🧩 Décrypteur des pouvoirs','🗳️ Observateur de la démocratie','📜 Guide des institutions','🌟 Ambassadeur de la démocratie'],
3:['🔎 Chercheur de repères','📖 Lecteur des règles','⚖️ Apprenti défenseur des droits','🤝 Médiateur du quotidien','🛡️ Gardien des droits et devoirs','🌟 Ambassadeur de la citoyenneté'],
4:['🎨 Explorateur des traces du passé','🏺 Archéologue en herbe','📜 Gardien des chroniques','🧭 Voyageur des siècles','🏛️ Guide du patrimoine','🌟 Passeur d’histoire et de culture'],
5:['🚪 Explorateur du quotidien','🗺️ Chercheur de bonnes adresses','🤝 Voisin solidaire','🧰 Guide des démarches','🌍 Acteur du vivre-ensemble','🌟 Ambassadeur de la vie en société']}
HINTS={1:'Repérez la valeur en jeu : liberté, égalité, fraternité ou laïcité. Cherchez la réponse qui respecte cette valeur et les personnes.',2:'Identifiez qui décide et à quelle échelle : commune, État ou Union européenne. Distinguez le rôle de chaque institution.',3:'Demandez-vous quel droit doit être respecté et quelle obligation s’applique. Vérifiez la règle avant de choisir une réponse.',4:'Repérez les dates, les lieux et les personnages. Reliez chaque événement à son contexte et situez les lieux sur une carte.',5:'Identifiez le besoin de la personne et l’interlocuteur adapté. Cherchez une démarche utile, respectueuse et conforme aux règles.'}
STORIES={1: ['Votre lanterne est allumée : il reste à éclairer les valeurs derrière chaque situation.', 'Vous avancez avec votre boussole : entraînez-vous à reconnaître la valeur qui donne la bonne direction.', 'Votre atelier prend forme : assemblez les principes et les bons réflexes pour que chacun trouve sa place.', 'Vous savez ouvrir le dialogue : quelques repères supplémentaires vous aideront à défendre votre choix.', 'Vous veillez sur les valeurs communes : vérifiez les derniers détails pour ne rien laisser passer.', 'Vous avez trouvé les mots et les principes justes sur cette série : faites-les vivre dans de nouveaux exemples.'], 2: ['Vous entrez dans la cité : commencez par repérer les institutions et leurs missions.', 'Les portes des institutions s’ouvrent : découvrez qui fait quoi derrière chacune d’elles.', 'Les pièces du puzzle se rassemblent : reliez chaque pouvoir à l’institution qui l’exerce.', 'Vous suivez le fonctionnement démocratique : affinez vos repères sur les décisions et les représentants.', 'Vous connaissez les couloirs des institutions : quelques détours méritent encore une visite.', 'Vous avez bien décodé les institutions sur cette série : explorez maintenant de nouvelles questions.'], 3: ['Votre enquête commence : cherchez le droit et le devoir cachés dans chaque situation.', 'Vous ouvrez le livre des règles : reliez chaque principe à un exemple concret.', 'Votre argumentaire se construit : vérifiez comment les droits et les obligations s’articulent.', 'Vous trouvez des solutions équilibrées : prenez encore le temps de vérifier la règle applicable.', 'Vous veillez au respect des droits : consolidez les quelques points qui vous ont échappé.', 'Votre boussole citoyenne a bien fonctionné sur cette série : testez-la sur de nouveaux cas.'], 4: ['Les traces du passé vous intriguent : commencez à relier les indices pour raconter leur histoire.', 'Vous avez sorti le pinceau de l’archéologue : dépoussiérez les dates, les lieux et les personnages.', 'Vos chroniques prennent forme : rangez les événements dans le bon ordre et situez-les sur la carte.', 'Vous voyagez d’une époque à l’autre : quelques escales vous aideront à mieux comprendre les liens entre les événements.', 'Vous pouvez déjà guider la visite : révisez les derniers détails pour enrichir votre récit.', 'Vous avez relié les lieux, les événements et la culture sur cette série : ouvrez un nouveau chapitre.'], 5: ['Vous ouvrez la porte du quotidien : découvrez les bons interlocuteurs et les démarches utiles.', 'Votre carnet d’adresses se remplit : apprenez à choisir le bon service selon le besoin.', 'Vous avez le réflexe d’aider : complétez vos repères pour proposer une réponse adaptée.', 'Votre boîte à outils s’enrichit : vérifiez les démarches et les règles avant de conseiller quelqu’un.', 'Vous savez agir avec les autres : consolidez les quelques situations qui vous font encore hésiter.', 'Vous avez trouvé les bons réflexes sur cette série : mettez-les à l’épreuve dans de nouveaux exemples.']}
def slot(score):return min(score//2,5)
def target(score,n):
 if score/n<.6:return (n*6+9)//10
 if score/n<.8:return (n*8+9)//10
 return n

def feedback(n,theme,nq,ns,counts,exam,link):
 text='### 💡 Votre défi pour la prochaine séance\n\n'
 if ns:text+='🎭 Pour chaque mise en situation, posez-vous deux questions : **« Que cherche-t-on à vérifier ? Quel principe civique faut-il identifier ? »** Lisez toutes les réponses et prenez le temps de les comparer avant de faire votre choix.\n\n'
 if nq:text+='📘 Pour les questions de connaissances, repérez les mots-clés de la question, rappelez-vous la règle ou le fait demandé, puis lisez les quatre réponses avant de choisir.\n\n'
 if theme:text+='🎮 Découvrez votre palier ludique dans cette thématique.\n\n'
 for score in range(n+1):
  text+=f'`if @score == {score}`\n'
  if theme:text+=f'**Votre palier : {ROLES[theme][slot(score)]}**\n\n{STORIES[theme][slot(score)]}\n\n'
  text+=f'Votre score est de **{score}/{n}**. '
  if score==n:text+='Bravo, toutes vos réponses sont correctes sur cette série ! Faites une autre série et cherchez à confirmer ce résultat sur de nouvelles questions. Puis essayez un examen blanc.\n'
  else:
   goal=target(score,n)
   text+='Vous pouvez encore progresser ! **Comment ?** '
   if theme:text+=f'Relisez la thématique **{THEMES[theme]}**, en vous aidant des corrections de cette séance. {HINTS[theme]} '
   else:text+='Relisez les thématiques à retravailler indiquées ci-dessous, en vous aidant des corrections. '
   text+=f'Refaites un entraînement du même type et visez **{goal}/{n}**. '
   if goal/n<.8:text+=f'Une fois cet objectif atteint, cherchez à obtenir **{(n*8+9)//10}/{n} à deux reprises**, sur deux séries différentes.'
   elif goal<n:text+=f'Essayez de confirmer **{goal}/{n} à deux reprises**, sur deux séries différentes, puis visez **{n}/{n}**.'
   elif score/n>=.8:text+=f'Consolidez aussi un résultat d’au moins **{(n*8+9)//10}/{n} sur deux séries différentes** avant de passer à un examen blanc.'
   text+='\n'
  text+='`endif`\n\n'
 text+='### 🎯 Les thématiques à retravailler\n\n'
 for t,count in counts.items():
  text+=f'`if @ent_t{t} < {count}`\n**{THEMES[t]}** — {HINTS[t]}\n\n'+link('📘 Relire cette thématique',f'SCR_REV_T{t}_MENU')+'\n'
  if theme is None:
   typ='MIS' if ns and not nq else 'Q' if nq and not ns else None
   for kind in ([typ] if typ else ['Q','MIS']):text+=link('🎭 Refaire des mises en situation' if kind=='MIS' else '📘 Refaire des questions officielles',f'SCR_ENT_{exam}_T{t}_{kind}_LAUNCH')+'\n'
   text+='Pour la série de 10 questions sur ce thème : visez **6/10**, puis **8/10 à deux reprises**, sur des séries différentes.\n'
  text+='`endif`\n'
 text+=f'`if @score == {n}`\n✅ Aucun thème à retravailler sur cette série. Variez maintenant les questions pour confirmer vos acquis.\n`endif`\n'
 return text
