# CiviCoach v53 — fiches de révision regroupées

Cette version applique les règles aux examens blancs, aux entraînements de connaissances et de mises en situation, au premier bilan, au bilan de progression et aux erreurs des activités de révision.

## Règles

- Aucun document nouveau pour une tentative sans erreur.
- Les erreurs identiques sur une même notion sont regroupées. Une étiquette de chapitre ne suffit pas à fusionner des rôles, dates ou actions différents.
- Les situations restent distinctes quand leur contexte diffère, pour conserver les conditions de la réponse.
- Entraînements courts et révisions : une synthèse, même si plusieurs thématiques sont concernées.
- Examens et bilans : une fiche thématique si une seule thématique est concernée ; une synthèse si plusieurs thématiques et au plus six notions ; des fiches par thématique au-delà de six notions.
- Un seul PDF téléchargeable pour chaque tentative, même si plusieurs fiches ou pages sont nécessaires.
- Les cinq thématiques officielles ont une couleur constante et un titre textuel. Histoire et culture appartiennent à la même thématique ; les symboles républicains appartiennent aux principes et valeurs.
- La taille du texte PDF reste de 14 points minimum pour les explications. Le nombre de pages s’adapte au contenu ; aucune limite de pages ne coupe un corrigé ou ses exceptions.

## Situations ratées

La fiche reprend la situation enregistrée, puis la réponse adaptée et l’explication pédagogique de la base Excel. Le chatbot présente ces trois étapes sous forme de schéma vertical et conserve les explications de la source. Si une ancienne référence n’a pas d’explication, il l’indique et conseille la notion à relire sans lien de navigation.

Les nouvelles questions finales ont été retirées. Le logo Frate et des illustrations unDraw figurent dans la fenêtre et dans le PDF. « Lecture simplifiée » ne constitue pas une certification FALC.

Pour les questions factuelles d’histoire et de culture (date ou auteur), la fiche utilise la première phrase du corrigé afin de garder le repère essentiel. Les mises en situation et les règles conservent leur explication complète.

## Accès et actualisation

Les fiches sont accessibles depuis les feedbacks, la fin des révisions, le parcours personnalisé et les enregistrements. Le téléchargement ne restaure pas une ancienne tentative et ne modifie pas le parcours en cours. Les erreurs historiques restent attachées à leur tentative.

Après modification des fichiers Excel dans `sources`, le workflow GitHub Pages lance `scripts/actualiser_bases.py`, qui reconstruit aussi le contenu des fiches. Le regroupement est défini dans `chatbot/fiches-regles.js` ; les explications viennent des sources, sans service d’IA externe.

## Validation

`validate_fiches_v53.cjs` vérifie les seuils 6/7, les catégories, les erreurs des mises en situation, les bilans, les thèmes, les doublons, les résultats parfaits, la fenêtre et les exports PDF. Les contrôles v52 vérifient les téléchargements des enregistrements et la navigation. Les contrôles des bases vérifient les 8750 questions/corrections et tous les bilans.
