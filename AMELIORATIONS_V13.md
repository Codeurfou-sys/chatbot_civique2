# Version 13 — demandes du document « Chat bot V6 »

- Suppression complète des paragraphes « Un repère à conserver » et « Pour progresser » dans les 630 séries d’entraînement. La bonne réponse et l’explication de la question sont conservées.
- Trente feedbacks validés : six tranches de réussite pour chacune des cinq thématiques. Les scores restent affichés avec leur dénominateur et leur pourcentage. Les notions manquées sont identifiées à partir des erreurs de la série.
- Résultat d’examen plus court : score global, connaissances, situations, tableau des cinq thématiques classées, puis deux priorités au maximum. Chaque priorité montre au plus trois notions pour éviter une nouvelle accumulation de texte.
- Bouton « Travailler ma première priorité » vers le bon examen et la bonne thématique ; il choisit les mises en situation si leur réussite est inférieure à celle des connaissances dans cette thématique. Les autres conseils sont disponibles sur un écran dédié.
- Corrigé des seules erreurs en tableau : question, réponse correcte, explication courte, liens vers la notion précise et le glossaire lorsqu’une fiche correspondante existe. Sur mobile, le tableau est prévu pour s’afficher en cartes.
- « Détails » conserve la situation, les quatre propositions et l’explication complète. Les nuances et les exceptions sont conservées dans les explications courtes.
- Accès direct à la notion précise depuis chaque erreur, sans passer uniquement par le menu générique d’un chapitre. Les liens de révision ne s’accumulent plus dans les boutons de fin.
- Dernier examen terminé et erreurs mémorisés dans la session, parcours, bilans, cartes et questions libres conservés.
- Exclusions de la v12 conservées : aucune situation issue d’une connaissance déjà posée, ni reprise directe ou réponse correcte identique entre les deux parties selon les contrôles de sélection.

## Publication
Copier l’ensemble du contenu du dossier Chatbot_civique2 dans le dépôt existant, puis Commit et Push origin. Le rendu des tableaux dans ChatMD/Moodle reste à vérifier après publication.

## Vérifications
90 simulations d’examens, les six tranches de feedback, priorités et tableaux, liens vers 1200 notions contextualisées, erreurs mémorisées, 630 séries d’entraînement, bilans et glossaire, activités de géographie, compilation et liens internes.

## Régénération
Si les banques sources changent, appliquer scripts/corriger_examens_v12.py puis scripts/ameliorations_v13.py et scripts/ameliorer_presentation.py pour les examens blancs. Une régénération des entraînements nécessite les étapes de présentation et de compteurs déjà fournies dans le projet avant de réappliquer la v13.
