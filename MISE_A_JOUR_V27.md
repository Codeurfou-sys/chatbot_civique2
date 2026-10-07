# CiviCoach v27 — correction de l’affichage de la mascotte

La mascotte utilise désormais une véritable image PNG, placée au début de l’accueil et des réponses de CiviCoach après leur affichage. Elle est également rétablie lors de la reprise d’une conversation sauvegardée. Cette intégration ne dépend plus du premier élément HTML du message, qui peut être le menu technique de ChatMD.

Le design rose, l’affichage rapide et le PDF FRATE restent inchangés.

Remplacer les fichiers du dépôt, y compris tout le dossier `chatbot/`, par ceux de cette archive. Attendre la fin du déploiement GitHub Pages et actualiser avec Ctrl+F5. Le code BODY Moodle actuel reste compatible.

Tests navigateur : fichier image effectivement chargé (`naturalWidth > 0`) et visible à l’accueil et dans le cours ; affichage accéléré ; largeur 375/768/1280 px ; reprise des variables et de la conversation ; téléchargements PDF répétés.
