# Expérience v9 — demandes V4

Cette version reprend le projet complet v8 et les demandes de « Chat bot V4.docx ».

## Changements

- Un seul libellé « 💡 Retenez : », sans étoiles visibles ni répétition.
- Lettres A, B, C et D dans des cercles gris sur les QCM, y compris les anciennes questions de la carte de résident ; cohérence avec les lettres des corrections existantes.
- Bilan : conseils distincts pour les six scores 0–5 et les cinq thématiques, classement par score exact croissant, félicitations et examen blanc pour 5/5.
- Parcours : étapes consécutives même si la révision préalable est masquée ; thématiques à 4/5 avant celles à 5/5.
- Entraînements complets : total /15, connaissances /10 et /2 par thématique, mises en situation /5 et /1 par thématique ; barres et liens vers les cours et entraînements adaptés aux lacunes.
- Bouton « Accéder aux mises en situation » au passage entre les deux parties.
- Consigne de recherche du glossaire réécrite.
- Cartes des fleuves et des massifs avec le contour géographique réel de la France métropolitaine. Les zones des massifs sont indicatives.
- Deux activités cliquables dans activites-geographie/, accessibles aussi au clavier, avec indications, corrections, score de première tentative et recommencement.
- Courbe de l’oubli : Hermann Ebbinghaus (1885), schéma pédagogique et explication des rappels actifs, référence à Murre et Dros (2015). Les courbes illustratives ne sont pas des mesures individuelles.
- Icône de l’oubli harmonisée, cinq thèmes uniques pour l’entretien, « Faire un entraînement » dans les erreurs fréquentes.
- FAQ : retrait des fiches de synthèse signalées, icônes harmonisées, phrase « Il permet » continue, liens d’inscription Frate Formation et tarif de 80 € chez Frate Formation.
- Réponses FAQ synchronisées vers les questions libres.

## Sources des cartes et du schéma

Natural Earth, domaine public : contours ne_50m_admin_0_countries et cours d’eau ne_10m_rivers_lake_centerlines. Extraction du 5 octobre 2026 depuis https://github.com/nvkelso/natural-earth-vector ; présentation locale. Les fichiers SVG et les données nécessaires aux activités sont inclus ; aucune dépendance cartographique externe à charger.

Courbe : https://doi.org/10.1371/journal.pone.0120644 (Murre et Dros, 2015).

## Vérifications réalisées

- 23 533 écrans et liens internes : aucun doublon d’identifiant ni destination manquante.
- 7 250 QCM : quatre lettres A–D.
- Moteur ChatMD : 5 400 réponses simulées pour les entraînements complets ; scores séparés et actions par thématique ; tri et étapes pour chaque score 0–5.
- Régression : 54 bilans de 25 questions, 480 séries d’entraînement, 762 formulations de questions libres, recherche de communes et glossaire.
- Activités : clic/clavier, erreur, indication, correction, score et recommencement testés avec un environnement DOM simulé. Cartes SVG et schéma rendus et inspectés.

Le navigateur de test n’a pas pu être installé dans cet environnement. Après publication, vérifier le rendu réel sur ordinateur et mobile dans Moodle. Si l’intégration bloque l’iframe, le bouton « Ouvrir les activités dans une nouvelle page » permet d’accéder aux exercices.

## Maintenance

Pour réappliquer la présentation après régénération, exécuter les générateurs de la version actuelle, puis :

```sh
python scripts/ameliorations_v8.py
python scripts/ameliorations_v9.py
python scripts/ameliorer_presentation.py
python scripts/validate_chatbot_final.py
python scripts/validate_v7.py
python scripts/validate_conseils.py
node scripts/validate_questions_libres.js
node scripts/validate_geographie.js
```

Le script v9 synchronise également les réponses pratiques de la FAQ vers les questions libres. Ne pas régénérer les anciens bilans v6.

## Installation

Terminer toute fusion GitHub Desktop en cours. Copier le contenu du dossier Chatbot_civique2 dans le dépôt local existant en remplaçant les fichiers, sans supprimer son dossier .git. Effectuer Commit puis Push origin. Les cartes et activités seront accessibles après le déploiement GitHub Pages.
