# Version 14 — Révisions et sauvegarde

## Mise en ligne
Copiez tout le contenu du ZIP dans le dépôt, puis Commit / Push dans GitHub Desktop. Après le déploiement GitHub Pages, utilisez dans l'iframe Moodle :

https://codeurfou-sys.github.io/chatbot_civique2/chatbot/

Cette URL est nécessaire pour la sauvegarde et le déblocage automatique des activités. Le lien vers le service ChatMD externe conserve les fonctions Markdown, mais ne dispose pas du gestionnaire de sauvegarde de cette version.

## Modifications
- Mon parcours personnalisé : Mon bilan, Mes entraînements, Mes examens blancs.
- Deux activités après les notions utiles des 19 chapitres : associations dans les deux sens ; histoire : dates et événements sur une frise ; géographie : cartes des fleuves et des massifs.
- Questions de connaissances accessibles après validation des deux activités. Retour automatique aux notions utiles après la seconde activité dans la page avec sauvegarde ; bouton Actualiser la progression disponible en complément. Progression persistante sur ce navigateur.
- Poser une question accessible uniquement dans l'accueil / menu principal. Les réponses de QCM contenant ces mots sont conservées.
- Correspondances des corrigés : question et bonne réponse prioritaires ; les mots-clés généraux ne sélectionnent plus seuls un personnage. Le titre d'une question « Qui était… » reprend son sujet exact.
- Copie locale du moteur ChatMD avec sauvegarde des variables dynamiques avant/après rendu.
- Sauvegarde locale et historique des 20 dernières tentatives par catégorie, export / import JSON, effacement avec confirmation.
- Chaque tentative conserve ses résultats, erreurs et conseils ; sélectionner une ancienne tentative remet son résultat à disposition dans Mon parcours personnalisé.

## Limites
Sauvegarde sur l'appareil et le navigateur utilisés, sans association au compte Moodle. Les navigateurs peuvent bloquer le stockage dans les iframes : ouvrir la page directement et utiliser Exporter dans ce cas. Sur un poste partagé, exporter puis effacer sa progression. Aucune note envoyée à Moodle. Une mise à jour ultérieure des banques peut modifier le texte d'un corrigé : garder le ZIP correspondant pour une restitution historique identique.

## Vérification après publication
Ouvrir le nouveau lien dans Moodle, terminer un entraînement, actualiser puis consulter Mon parcours personnalisé. Terminer les deux activités d'un chapitre puis actualiser la progression. Exporter le parcours, l'importer sur un autre navigateur. Vérifier le rendu et les restrictions éventuelles du navigateur dans l'iframe Moodle.
