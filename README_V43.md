# CiviCoach — version 43

## Changements

- Une roue dentée rejoint les commandes audio fixes. Elle ouvre une fenêtre de réglages d’accessibilité à tout moment, sans quitter l’activité. Les mêmes réglages sont utilisés, avec fermeture au clavier et retour au bouton d’ouverture.
- Les feedbacks nomment la notion manquée, par exemple « le rôle du Premier ministre ». Les situations ayant une question identique sont désormais distinguées par leur contexte et leur bonne réponse. Les anciennes erreurs dont le contexte est ambigu ne sont pas présentées comme des corrections fiables ; une nouvelle tentative enregistre le détail complet.
- Les questions, choix et corrections restent dans le déroulé des erreurs. Le plan d’action ne les répète pas. Le bouton final devient « Revoir le ou les erreur(s) ».
- La cinquième étape propose deux objectifs adaptés au niveau : sur les deux questions de connaissances de la thématique dans une série toutes thématiques, ou sur les dix questions d’une série ciblée. Les résultats des bilans et examens gardent leur barème réel. Le feedback à 9/10 invite à corriger la seule hésitation, sans reprendre tout le cours.
- Les trente rôles d’encouragement définis dans PALIERS_ENTRAINEMENT.md sont affichés selon la thématique et le niveau atteint, et repris dans le PDF.
- Le bilan de progression préremplit le dernier score sauvegardé du même examen. La liste reste modifiable et sert de solution de secours si aucun résultat correspondant n’est disponible. La sauvegarde reste liée au navigateur utilisé.
- Les icônes existantes, les questions dans la conversation, les boutons de retour, la lecture au survol et la synchronisation sont conservés.

## Installation

Remplacez les fichiers du projet sur GitHub et utilisez le code Moodle de `moodle/INTEGRATION_BODY_MULTI_COURS.html` (version 43). Fermez les anciennes fenêtres avant de rouvrir CiviCoach depuis Moodle.

## Vérifications effectuées

Validation de 33 165 écrans et 139 763 liens ; contrôle des 8 750 références de questions, des clés d’erreurs sauvegardées et des correspondances d’examen. Tests automatisés du moteur ChatMD et du DOM : réglages, conservation du contexte, questions libres, retour à l’activité, synchronisation, feedback précis, objectifs, badges, correction dépliable, dernier score du même examen et modification manuelle. Contrôle des activités accessibles et inspection visuelle des PDF standard et protanopie.

Le son réel et l’affichage dans votre Moodle restent à vérifier après publication sur vos appareils.
