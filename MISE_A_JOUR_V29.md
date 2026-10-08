# CiviCoach v29 — réglages d’accessibilité

Quatre interrupteurs rouges en haut du chatbot :
- Contraste renforcé : texte sombre, liens soulignés et bordures plus visibles.
- Repères sans couleur : distinctions textuelles et bordures différentes pour les retours de réussite et d’erreur ; motif dans les barres de progression. Ce réglage aide en cas de daltonisme sans modifier les couleurs utiles aux exercices.
- Texte agrandi : corps du texte augmenté avec retour à la ligne.
- Sans animation : texte affiché directement et animations visuelles réduites. La préférence système de réduction des mouvements est prise en compte par défaut.

Les états sont indiqués visuellement et avec `aria-checked`. Les réglages sont conservés localement. Les outils intégrés de révision, de géographie et de recherche des centres reprennent les préférences de leur navigateur ; leurs couleurs pédagogiques ne sont pas filtrées.

Un lien « Aller à la conversation », un focus clavier visible et un correctif de la navigation clavier des liens/boutons complètent cette mise à jour.

## Installation
Remplacer les fichiers GitHub, notamment tout le dossier `chatbot/` et les dossiers des outils intégrés. Attendre le déploiement puis actualiser avec Ctrl+F5. Le code BODY Moodle existant reste compatible.

## Vérifications effectuées
Interrupteurs utilisables avec Espace et Entrée, états ARIA, lien d’évitement, stockage/rechargement, réduction de l’affichage progressif, repères textuels, rendu à 375/768/1280 px et simulation de zoom à 200 %, contraste du rouge des interrupteurs, deux entraînements complets et sauvegardes dans Moodle simulé.

## Portée RGAA
Référence officielle consultée le 8 octobre 2026 : RGAA 4.1.2. La version 5 est annoncée pour fin 2026.

Ces améliorations ne constituent pas un audit de conformité RGAA et aucun taux de conformité n’est annoncé. L’absence d’information donnée uniquement par la couleur doit être vérifiée dans tous les états et toutes les activités, même quand le réglage est désactivé. Les contrastes de chaque élément, l’utilisation de toutes les activités au clavier, la restitution avec lecteurs d’écran, les tableaux, les PDF et l’intégration Moodle complète restent à inclure dans un audit représentatif. La page Moodle et l’animation du bouton d’ouverture extérieur au chatbot ne sont pas contrôlées par ces réglages.

Sources :
- https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/ (notamment 3.1, 3.2, 3.3, 7.3, 10.4 et 10.7)
- https://accessibilite.numerique.gouv.fr/obligations/evaluation-conformite/
