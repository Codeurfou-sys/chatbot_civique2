# CiviCoach — version 40

## Nouveautés

- Icônes colorées habituelles rétablies dans l’affichage normal. Les pictogrammes adaptés restent disponibles lorsque le contraste renforcé ou le mode daltonisme est actif.
- Suppression du bouton flottant « Une question ? » et du panneau à droite.
- Saisie des questions dans le champ habituel et affichage de la question et de la réponse dans la conversation.
- Suggestions sous la réponse, puis bouton « Reprendre mon activité » lorsqu’une activité est en cours.
- La demande d’aide ne modifie pas le score ni les réponses de l’exercice. La reprise conserve le contexte de saisie et les choix de l’activité. Le chronomètre d’un examen blanc continue pendant la demande d’aide.
- Questions successives et synchronisation de la conversation entre fenêtres liées conservées.

La reconnaissance demeure fondée sur la banque de questions et des règles : une réponse courte à une question de connaissances reste traitée comme une réponse à l’exercice. Une demande d’aide explicite (par exemple « Comment retrouver mes résultats ? ») est reconnue à part.

## Installation

Remplacez les fichiers correspondants sur GitHub et utilisez le code Moodle de `moodle/INTEGRATION_BODY_MULTI_COURS.html` pour la version 40. Fermez les anciennes fenêtres, puis ouvrez le plein écran depuis le lien de CiviCoach dans Moodle.

## Vérifications

Tests automatisés dans le moteur ChatMD : aide dans la conversation, QCM réel avec réponse correcte après reprise, absence de modification du score et du contexte, restauration du bouton de reprise dans une autre fenêtre et synchronisation dans les deux sens. Contrôle des destinations et des écrans. Le contrôle visuel dans un navigateur n’a pas pu être relancé dans cet environnement ; vérifier l’affichage dans votre Moodle après publication.
