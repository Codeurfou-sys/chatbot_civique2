# CiviCoach — version 42

- La demande « Je veux passer l’examen de naturalisation, par quoi commencer ? » renvoie vers l’aide à la préparation et les activités. Elle n’est plus traitée comme une demande de définition. Les demandes similaires pour la carte de résident et la carte de séjour pluriannuelle sont reconnues.
- Chaque réponse d’aide dans la conversation dispose d’un retour : « Revenir au chatbot » depuis un menu, « Reprendre mon activité » pendant un exercice. La question et sa réponse restent visibles dans l’historique.
- Les commandes « Lire la réponse », « Pause / reprendre » et « Arrêter » sont placées dans une barre fixe sur le côté, en dehors des réglages. Sur petit écran, trois boutons compacts disposent de libellés accessibles et le contenu du chat réserve de l’espace sur la droite. La voix dépend du navigateur et du système.
- Les feedbacks et plans de la version 41 sont inclus : cinq étapes, conseils liés aux erreurs enregistrées, scores et objectifs utilisant le barème réel. Aucune présentation systématique sur 10 ; le bilan reste sur 25, l’examen blanc sur 40 et les résultats thématiques sur leur propre barème.
- Les fonctionnalités précédentes sont conservées, notamment la lecture au survol et la synchronisation entre fenêtres liées.

## Installation

Remplacez les fichiers sur GitHub et actualisez le code Moodle avec `moodle/INTEGRATION_BODY_MULTI_COURS.html` (version 42). Fermez les anciennes fenêtres et ouvrez le plein écran depuis le lien CiviCoach dans Moodle.

## Contrôles

Tests du moteur ChatMD et du DOM : phrase de la capture, retour depuis le menu, reprise d’un QCM réel, synchronisation dans les deux sens et présence permanente des commandes audio. Tests des barèmes et des plans conservés. Les PDFs standard et protanopie ont été contrôlés visuellement pendant la mise à jour des feedbacks. L’affichage de la nouvelle barre audio et le son réel doivent être vérifiés dans votre Moodle et sur vos appareils après publication.
