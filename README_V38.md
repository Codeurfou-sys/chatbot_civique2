# CiviCoach — version 38

## Activités et repères visuels
Les 76 boutons de navigation dupliqués autour des activités ont été retirés du Markdown. Le jeu de boutons immédiatement sous l’activité est conservé, ainsi que l’ouverture en grand.
Les feedbacks utilisent des cartes thématiques et des repères visuels : cible, boussole, livre, écriture et temps. Le PDF conserve ses cartes et ajoute un pictogramme de lecture.

## Feedbacks personnalisés
Un même moteur calcule les plans affichés dans CiviCoach et dans le PDF. Six paliers sur 10 : 0–1, 2–3, 4–5, 6–7, 8–9, 10. Les scores d’autres longueurs sont ramenés proportionnellement sur 10 uniquement pour choisir le palier ; le score réel reste affiché.
Les objectifs varient : rappel de deux règles, quiz court, distinction de réponses proches, justification, vérification à 48 heures, transfert, examen chronométré et maintien dans le temps. La méthode de travail dépend de la thématique.
Les nouvelles erreurs des bilans et entraînements sont conservées dans les variables parcoursMistakes et trainMistakes de chaque tentative. Les examens blancs utilisent leurs indicateurs lastErr déjà sauvegardés. L’index associe les erreurs à la question et, lorsque la notion est identifiée, au cours correspondant. Les questions sans notion précise reconnue sont citées telles quelles, avec un retour vers leur thématique.
Les tentatives anciennes sans trace des questions manquées ne permettent pas de reconstituer leurs erreurs : le plan le signale. Aucun détail d’erreur n’est inventé.

## Palette du PDF
Le PDF reprend la palette active : bleu pour deutéranopie, violet pour protanopie, bordeaux pour tritanopie, gris pour achromatopsie. Le profil est transmis avec le parcours à l’ouverture d’un nouvel onglet, pour couvrir les stockages séparés des iframes Moodle. Hors mode daltonisme, les couleurs FRATE restent le réglage par défaut. Le logo FRATE reste dans ses couleurs originales.
Il s’agit de palettes de lecture adaptées et de repères textuels, pas d’une simulation médicale de la perception ni d’une certification RGAA.

## Vérifications
Validation structurelle du Markdown ; suivi des réponses incorrectes ; tests du moteur, du rendu des cartes et des liens de cours ; vérification de l’absence de duplication au second rendu ; erreurs d’examen existantes ; génération et contrôle visuel du PDF ; contrôle des quatre palettes et du lien précis vers la laïcité.

L’export conserve le dernier résultat de chaque catégorie. Les autres tentatives restent dans CiviCoach. Déployer le contenu du ZIP puis recharger les onglets ouverts.
