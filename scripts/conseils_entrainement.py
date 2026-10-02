"""Conseils pédagogiques et paliers ludiques, sans valeur de certification."""
THEMES={1:'Principes et valeurs',2:'Institutions et système politique',3:'Droits et devoirs',4:'Histoire, géographie et culture',5:'Vivre dans la société française'}
ROLES={
1:['🕯️ Éclaireur des valeurs','🧭 Explorateur des principes','🤝 Artisan du respect','🕊️ Ambassadeur du vivre-ensemble','⚖️ Gardien des valeurs','🌟 Porte-parole des valeurs'],
2:['🗺️ Explorateur de la cité','🏛️ Visiteur des institutions','🧩 Décrypteur des pouvoirs','🗳️ Observateur de la démocratie','📜 Guide des institutions','🌟 Ambassadeur de la démocratie'],
3:['🔎 Chercheur de repères','📖 Lecteur des règles','⚖️ Apprenti défenseur des droits','🤝 Médiateur du quotidien','🛡️ Gardien des droits et devoirs','🌟 Ambassadeur de la citoyenneté'],
4:['🎨 Explorateur des traces du passé','🏺 Archéologue en herbe','📜 Gardien des chroniques','🧭 Voyageur des siècles','🏛️ Guide du patrimoine','🌟 Passeur d’histoire et de culture'],
5:['🚪 Explorateur du quotidien','🗺️ Chercheur de bonnes adresses','🤝 Voisin solidaire','🧰 Guide des démarches','🌍 Acteur du vivre-ensemble','🌟 Ambassadeur de la vie en société']}
HINTS={1:'Repérez la valeur en jeu : liberté, égalité, fraternité ou laïcité. Cherchez la réponse qui respecte cette valeur et les personnes.',2:'Identifiez qui décide et à quelle échelle : commune, État ou Union européenne. Distinguez le rôle de chaque institution.',3:'Demandez-vous quel droit doit être respecté et quelle obligation s’applique. Vérifiez la règle avant de choisir une réponse.',4:'Repérez les dates, les lieux et les personnages. Reliez chaque événement à son contexte et situez les lieux sur une carte.',5:'Identifiez le besoin de la personne et l’interlocuteur adapté. Cherchez une démarche utile, respectueuse et conforme aux règles.'}
STORIES={1: ['Vous commencez à identifier les valeurs de la République. Reprenez la liberté, l’égalité, la fraternité et la laïcité à partir d’exemples concrets.', 'Vous avez reconnu certaines valeurs dans cette série. Entraînez-vous maintenant à distinguer une opinion personnelle d’un principe commun.', 'Vous disposez de premiers repères sur les valeurs. Pour chaque choix, expliquez comment il respecte la liberté, l’égalité ou la laïcité.', 'Vous reconnaissez plusieurs principes dans cette série. Travaillez les situations où deux réponses semblent proches, en identifiant la valeur à respecter.', 'Vous avez bien identifié les valeurs dans la plupart des situations. Analysez les dernières erreurs pour préciser votre raisonnement.', 'Vous avez identifié les valeurs attendues dans toutes les réponses de cette série. Vérifiez ces acquis avec de nouvelles situations.'], 2: ['Vous découvrez les rôles des institutions. Commencez par distinguer le Gouvernement, le Parlement et le président de la République.', 'Vous avez identifié certaines institutions. Associez chacune d’elles à une action : proposer une loi, la voter ou l’appliquer.', 'Vos repères institutionnels se développent. Distinguez les pouvoirs exécutif, législatif et judiciaire à partir des corrections.', 'Vous comprenez plusieurs rôles institutionnels dans cette série. Précisez qui décide au niveau communal, national et européen.', 'Vous avez bien distingué la plupart des institutions. Reprenez les fonctions ou les niveaux de décision qui ont entraîné une erreur.', 'Vous avez correctement identifié les institutions sur cette série. Confirmez votre compréhension sur de nouveaux exemples.'], 3: ['Vous commencez à repérer les droits et les devoirs. Reprenez un droit et une obligation dans chaque correction.', 'Vous avez reconnu certaines règles. Distinguez ce qui est autorisé, obligatoire et interdit dans les exemples proposés.', 'Vous avez des repères sur les droits et les obligations. Reliez chaque règle à la protection des personnes ou au respect de la loi.', 'Vous avez identifié plusieurs réponses adaptées dans cette série. Vérifiez quel droit protège la personne et quel devoir guide l’action.', 'Vous avez bien appliqué les règles dans la plupart des cas. Analysez les erreurs pour distinguer les réponses proches.', 'Vous avez respecté les droits et les devoirs dans tous les choix de cette série. Confirmez ce résultat dans d’autres situations.'], 4: ['Vous commencez à relier les repères historiques, géographiques et culturels. Classez les événements rencontrés et situez les lieux cités.', 'Vous avez identifié certains repères. Associez chaque personnage à son époque et chaque lieu à sa position sur une carte.', 'Vos repères prennent forme. Construisez une courte frise chronologique et notez les éléments culturels rencontrés dans les corrections.', 'Vous avez relié plusieurs événements et lieux dans cette série. Travaillez les liens entre une date, un événement et son contexte.', 'Vous avez bien reconnu la plupart des repères. Revoyez les dates, les lieux ou les éléments du patrimoine qui vous ont fait hésiter.', 'Vous avez correctement mobilisé les repères historiques, géographiques et culturels de cette série. Vérifiez-les avec de nouvelles questions.'], 5: ['Vous découvrez les repères de la vie quotidienne. Identifiez les services utiles pour la santé, l’école, le logement et le travail.', 'Vous avez reconnu certains interlocuteurs. Pour chaque besoin, cherchez le service ou la démarche adaptée.', 'Vos repères du quotidien se développent. Distinguez le rôle des services publics et les obligations de chacun.', 'Vous avez identifié plusieurs démarches adaptées dans cette série. Vérifiez l’interlocuteur et les règles avant de choisir une réponse.', 'Vous avez trouvé la plupart des bons réflexes du quotidien. Reprenez les démarches ou les situations qui vous ont fait hésiter.', 'Vous avez choisi les réponses adaptées dans toutes les situations de cette série. Confirmez ces réflexes sur de nouveaux exemples.']}
def slot(score):return min(score//2,5)
def target(score,n):
 if score/n<.6:return (n*6+9)//10
 if score/n<.8:return (n*8+9)//10
 return n

def feedback(n,theme,nq,ns,counts,exam,link):
 text='### 💡 '+('Votre progression en '+THEMES[theme] if theme else 'Votre prochaine étape')+'\n\n'
 if ns:text+='🎭 Pour chaque mise en situation, posez-vous deux questions : **« Que cherche-t-on à vérifier ? Quel principe civique faut-il identifier ? »** Lisez toutes les réponses et prenez le temps de les comparer avant de faire votre choix.\n\n'
 if nq:text+='📘 Pour les questions de connaissances, repérez les mots-clés de la question, rappelez-vous la règle ou le fait demandé, puis lisez les quatre réponses avant de choisir.\n\n'

 for score in range(n+1):
  text+=f'`if @score == {score}`\n'
  if theme:text+=f'Vous avez atteint le rôle de **{ROLES[theme][slot(score)]}**.\n\n{STORIES[theme][slot(score)]}\n\n'
  text+=f'Sur cette série'+(' en **'+THEMES[theme]+'**' if theme else '')+f', votre score est de **{score}/{n}**. '
  if score==n:text+='Bravo, toutes vos réponses sont correctes sur cette série ! Faites une autre série et cherchez à confirmer ce résultat sur de nouvelles questions. Puis essayez un examen blanc.\n'
  else:
   goal=target(score,n)
   text+='Pour poursuivre votre progression, voici une méthode adaptée à votre résultat. '
   if theme:text+=f'Relisez la thématique **{THEMES[theme]}**, en vous aidant des corrections de cette séance. {HINTS[theme]} '
   else:text+='Relisez les thématiques à retravailler indiquées ci-dessous, en vous aidant des corrections. '
   text+=f'Refaites un entraînement du même type et visez **{goal}/{n}**. '
   if goal/n<.8:text+=f'Une fois cet objectif atteint, cherchez à obtenir **{(n*8+9)//10}/{n} à deux reprises**, sur deux séries différentes.'
   elif goal<n:text+=f'Essayez de confirmer **{goal}/{n} à deux reprises**, sur deux séries différentes, puis visez **{n}/{n}**.'
   elif score/n>=.8:text+=f'Consolidez aussi un résultat d’au moins **{(n*8+9)//10}/{n} sur deux séries différentes** avant de passer à un examen blanc.'
   text+='\n'
  text+='`endif`\n\n'
 text+='### 🔗 Les ressources pour poursuivre\n\n'
 if ns:text+=link('🎭 Réussir les mises en situation','SCR_CONS_SITUATIONS_MENU')+'\n'
 text+=link('🧠 Mémoriser efficacement','SCR_CONS_MEMOIRE_MENU')+'\n'
 if nq:text+=link('✅ Réussir les QCM','SCR_CONS_QCM_MENU')+'\n'
 text+=link('🎯 Passer un examen blanc','SCR_PREP_MENU')+'\n'
 text+='\n### 🎯 Les thématiques à retravailler\n\n' 
 for t,count in counts.items():
  text+=f'`if @ent_t{t} < {count}`\n**{THEMES[t]}** — {HINTS[t]}\n\n'+link('📘 Relire cette thématique',f'SCR_REV_T{t}_MENU')+'\n'
  if theme is None:
   typ='MIS' if ns and not nq else 'Q' if nq and not ns else None
   for kind in ([typ] if typ else ['Q','MIS']):text+=link('🎭 Refaire des mises en situation' if kind=='MIS' else '📘 Refaire des questions officielles',f'SCR_ENT_{exam}_T{t}_{kind}_LAUNCH')+'\n'
   text+='Pour la série de 10 questions sur ce thème : visez **6/10**, puis **8/10 à deux reprises**, sur des séries différentes.\n'
  text+='`endif`\n'
 text+=f'`if @score == {n}`\n✅ Aucun thème à retravailler sur cette série. Variez maintenant les questions pour confirmer vos acquis.\n`endif`\n'
 return text
