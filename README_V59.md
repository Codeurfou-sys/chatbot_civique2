# CiviCoach v59 — fiches de révision illustrées

Le modèle commun reprend les deux références validées : écriture manuscrite, titres au pinceau, blocs par thématique, post-it, flèches et annotations. Le catalogue contient 91 dessins : portraits historiques, institutions, monuments, objets et scènes de la vie quotidienne. Toutes les références de questions, révisions et activités disposent d’une illustration et d’une variante monochrome.

Le même générateur est utilisé pour les bilans initiaux et de progression, examens blancs, entraînements, mises en situation et parcours personnalisé. Les notions sont réunies dans des pages de synthèse ; la pagination s’adapte à leur longueur et à l’agrandissement du texte. Les erreurs portant sur la même notion peuvent être regroupées, sans supprimer des sujets distincts. Aucune fiche n’est proposée lorsqu’il n’y a aucune notion à revoir.

La date figure une fois, sur la première page. Le PDF reprend le profil de daltonisme, le contraste et la taille de texte choisis dans les réglages. Les couleurs ne remplacent pas les titres et les explications. Les drapeaux restent décrits par du texte. Les scores et les bases Excel ne sont pas modifiés. Les mises à jour des bases restent traitées par le processus GitHub existant.

## Installation

Extraire le ZIP et remplacer tous les fichiers du projet, y compris chatbot/vendor et chatbot/assets. Effectuer le commit et le push. Après le déploiement, actualiser avec Ctrl+F5, puis télécharger à nouveau les fiches depuis les enregistrements. Un PDF déjà téléchargé ne change pas automatiquement.

## Exemples et vérification

Les exemples sont dans exemples : institutions/histoire/société (six notions), symboles/culture/droits (six notions), bilan de progression et examen blanc (dix notions). Les mises en page sont adaptées aux notions retenues, et non à un seul type d’évaluation.

Commande de contrôle : node scripts/validate_fiches_v59.cjs.

Les dessins sont des illustrations originales générées pour le projet. Le logo Frate fourni est conservé. Les licences des polices et leur provenance sont dans chatbot/vendor.
