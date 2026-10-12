# CiviCoach v56 — fiches de révision visuelles

## Installation

Décompressez le ZIP et remplacez les fichiers du dépôt, en conservant les dossiers à la racine. Commitez puis poussez les modifications. Le workflow GitHub Pages actualise les bases et publie le site. Le correctif pour les anciens exports sans Montluel est inclus.

## Nouvelle présentation

Les notions à revoir restent sélectionnées d’après les réponses enregistrées. Les fiches présentent ensuite les connaissances à apprendre, sans mauvaises réponses ni scores : illustrations pertinentes, notes façon post-it, abréviations développées, relations avec des flèches et frises de taille adaptée.

Le sujet de la question et sa bonne réponse ont priorité sur le contexte. Un entretien cité dans une question sur les 35 heures ne remplace donc pas une scène de travail. Le rôle du président utilise un responsable politique générique ; sa résidence utilise le palais de l’Élysée. Marianne utilise un buste. Les auteurs et personnages historiques gardent leurs portraits. Les drapeaux, monuments et documents conservent leur représentation propre. Une notion sans image suffisamment précise reste présentée avec ses repères, sans illustration décorative attribuée au mauvais sujet.

Les dates des frises sont composées en texte à partir des données, avec l’ordre chronologique contrôlé. Les mots et les flèches des PDF restent du texte et des tracés, plutôt que du texte incorporé dans des images. Les notes longues passent sur plusieurs pages pour préserver les explications et les conditions importantes. La date de la fiche figure une fois sur la première page.

Les règles restent : aucune fiche nouvelle sans erreur ; dédoublonnage des notions ; synthèse pour les entraînements et révisions ; après un examen ou un bilan, une synthèse jusqu’à six notions réparties dans plusieurs thèmes, puis un regroupement par thématique au-delà. Les pages sont réunies dans un seul PDF. Les thèmes des questions sont conservés tels qu’ils figurent dans les données.

## Accessibilité

L’interface et les téléchargements reprennent le profil de couleurs actif au moment du téléchargement. Les illustrations et le logo sont disponibles en niveaux de gris pour l’achromatopsie, y compris pendant le chargement du catalogue. Les thèmes restent identifiés par leur titre et leur numéro. Le texte agrandi et le contraste renforcé sont conservés. Le téléchargement d’une fiche depuis un enregistrement ne restaure pas l’ancienne tentative et ne modifie pas les résultats.

## Tester

Ouvrez `exemples/Tester_les_fiches.html`, sélectionnez des notions et un profil, puis téléchargez le PDF.

Les exemples issus du générateur figurent dans `exemples/Exemple_bilan_A_v56.pdf`, `exemples/Exemple_bilan_B_v56.pdf` et `exemples/Exemple_situations_v56.pdf`. Les deux premiers comportent six notions chacun. Les thèmes sont ceux des questions sélectionnées : quatre dans A, trois dans B. La composition s’adapte aux explications et ne force pas un nombre de pages fixe.

## Actualisation et contrôles

Après modification et push des Excel, `scripts/actualiser_bases.py` recompile les questions, les références utilisées par les fiches et les versions de cache. Les scores historiques restent ceux des tentatives enregistrées. Les illustrations sont originales, générées pour CiviCoach, et leur inventaire figure dans `chatbot/assets/fiches/manifest.json`.

Les contrôles vérifient le corpus, les bonnes réponses des sources, les règles de regroupement, INIT/PROG, les téléchargements sans modification du parcours, les profils PDF, les longues notes, les associations rôle/lieu et les frises. Les rendus PDF ont été inspectés ; les dates de création ne sont pas répétées dans les encadrés.

Repères historiques complémentaires : Élysée, Vie publique et Sénat (lois scolaires de 1881-1882), Assemblée nationale (droit de vote), BnF (auteurs) et Légifrance (DDHC). Les variantes de couleurs sont des réglages de présentation, pas une simulation clinique du daltonisme.
