# CiviCoach v54 — fiches personnalisées illustrées

## Installer et essayer

Décompressez le ZIP, remplacez les fichiers du dépôt GitHub et poussez l’ensemble des modifications. Les fichiers doivent rester à la racine du dépôt, comme dans la version précédente. Le workflow GitHub Pages reconstruit les questions et les fiches à partir des six bases Excel.

Pour tester les fiches directement, ouvrez `exemples/Tester_les_fiches.html` après décompression ou sur le site publié. Recherchez des notions, cochez celles à regrouper et téléchargez le PDF. Ce test n’écrit pas dans les résultats de l’apprenant.

Dans le chatbot, essayez un entraînement de connaissances, un entraînement de mises en situation, un examen blanc, le premier bilan, un bilan de progression et une activité de révision. Les fiches sont proposées uniquement pour les erreurs détaillées enregistrées. Elles restent accessibles depuis les feedbacks, le parcours personnalisé et les enregistrements. Télécharger une ancienne tentative ne la restaure pas et ne change pas l’activité en cours.

## Documents composés selon les erreurs

Il n’existe pas une liste fixe de PDF couvrant toutes les combinaisons : le chatbot compose le document avec les notions manquées dans la tentative sélectionnée. Tous les contenus référencés dans le corpus sont disponibles.

- Aucune fiche nouvelle pour une tentative sans erreur.
- Les erreurs identiques sur une même notion sont regroupées ; les contextes de situations différents restent distincts.
- Entraînements et révisions : une synthèse, même avec plusieurs thèmes.
- Examens et les deux bilans : un thème donne une fiche thématique ; plusieurs thèmes et au plus six notions donnent une synthèse ; au-delà de six notions, les fiches par thème sont réunies dans un seul PDF.
- Des blocs horizontaux de tailles adaptées remplacent les colonnes systématiques. Plusieurs notions courtes peuvent partager un bloc. Une explication longue passe sur plusieurs pages, sans suppression des conditions du corrigé.
- Le titre et la couleur identifient la thématique. Le logo Frate, les illustrations et les mémos suivent la même présentation dans la fenêtre et dans le PDF.
- Une situation ratée reprend la situation, la réponse adaptée et l’explication pédagogique complète. Aucun quiz final n’est ajouté.
- Lorsqu’au moins deux rôles institutionnels sont à revoir, un exemple fictif sur le tri des déchets illustre le parcours d’une loi. Il est présenté comme un schéma simplifié.

## Profils de daltonisme dans les téléchargements

Le PDF prend les réglages actifs au moment du téléchargement, y compris depuis les enregistrements : deutéranopie, protanopie, tritanopie ou achromatopsie. Désactiver le mode revient aux couleurs habituelles. Les trois premiers profils reprennent la couleur d’interface choisie ; l’achromatopsie utilise des illustrations et un logo en niveaux de gris. Le texte agrandi et le contraste renforcé sont également repris.

Chaque thème conserve son titre et un repère T1 à T5 ; les couleurs ne portent jamais seules l’information. Les explications, les étapes et les flèches restent lisibles dans tous les profils. La page de test permet de choisir ces réglages avant de télécharger un exemple. Les variantes ne constituent pas une simulation clinique du daltonisme.

Références : https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html et https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html

## Illustrations et actualisation

Toutes les illustrations des fiches sont originales et générées dans le même style éditorial, y compris les scènes du quotidien et les objets. Les personnages historiques disposent de portraits dessinés ; ils ne constituent pas des photographies ou des reproductions documentaires. Les titulaires actuels des fonctions politiques sont représentés par des personnages génériques.

La bibliothèque et ses fichiers PNG figurent dans `chatbot/assets/fiches/manifest.json`. La sélection utilise la question, sa situation et sa réponse correcte ; elle ne choisit pas un portrait à partir d’une mauvaise proposition du QCM. Pour une nouvelle notion non reconnue, une illustration générale de sa thématique est utilisée, sans inventer un personnage.

Après modification et push d’un Excel, `scripts/actualiser_bases.py` reconstruit le contenu des questions et des fiches, actualise aussi les anciennes références source utilisées par les sauvegardes et renouvelle les versions de cache. Les scores historiques restent inchangés. Après remplacement d’un PNG présent dans le manifeste, le même script recompile le catalogue illustré.

Les réponses et les explications viennent des bases existantes. Les mémos supplémentaires se limitent à des abréviations développées ou aux rôles institutionnels déjà présents dans les sources. « Lecture simplifiée » ne vaut pas certification FALC.

## Correction vérifiée dans les sources

Dans `BANQUE_OFFICIELLE_CSP.xlsx`, la ligne `CSP-T4-040` pointait sur la réponse B (« Un musicien ») alors que la réponse A et l’explication identifiaient Marc Chagall comme peintre. La bonne réponse est désormais A. Aucun autre contenu de ce classeur n’a été changé. Source de vérification : https://www.culture.gouv.fr/rechercher-une-publication-du-ministere-de-la-culture/repertoire-des-informations-publiques/Musees-des-Beaux-arts/musee-national-marc-chagall

## Vérifications

`validate_fiches_v54.cjs` vérifie l’illustration de toutes les références, les portraits distincts, la conservation des réponses source, les six erreurs dans trois thèmes, les longs corrigés et les réglages du PDF. Les contrôles v53 couvrent les seuils 6/7, les mises en situation et les bilans INIT/PROG. Les contrôles v52 couvrent les résultats parfaits et les téléchargements sans changement de parcours. Les contrôles des activités et des bases complètent ces tests.
