# Expérience v8 — demandes du document V3

- « Retenez » sans doublon dans les corrections.
- Parcours personnalisé en premier après les bilans ; conseil sur les mises en situation expliqué et conditionné à un résultat de 4/5 ou 5/5 sur au moins une thématique.
- Saisie des questions reliée à SCR_QL_ANSWER, accueil sans traitement prématuré, 245 notions et 56 intentions. Les réponses utilisent des contenus déterministes : une question hors périmètre peut demander une reformulation.
- Recherche locale : 35 558 correspondances de communes/codes postaux ; Lyon, Paris et Marseille avec codes globaux et arrondissements ; priorité aux noms exacts, choix des homonymes, accents normalisés.
- Conseils : un seul pictogramme par encadré, cinq thématiques pour l’entretien, navigation cohérente et retour aux conseils.
- Exemple illustré d’image mentale pour retenir 1905, avec texte alternatif et explication.
- Glossaire : 244 fiches ; ajout de 33 notions, définitions révisées et liens connexes explicites. Les notions géographiques utiles sont conservées.
- Sessions actualisées le 4 octobre 2026 conservées dans le module et dans la recherche des centres.

## Sources consultées

- https://geo.api.gouv.fr/communes (référentiel communes, 5 octobre 2026).
- Six banques Excel présentes dans sources/ ; traçabilité dans reports/glossaire_sources.json.
- https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/
- https://qpc360.conseil-constitutionnel.fr/bloc-constitutionnalite
- https://www.service-public.gouv.fr/particuliers/vosdroits/F2532

## Maintenance

Après une régénération du contenu, appliquer dans cet ordre :

```sh
python scripts/enrichir_contenu_v8.py
python scripts/enrichir_glossaire_v6.py
python scripts/questions_libres_v7.py
python scripts/ameliorations_v8.py
python scripts/ameliorer_presentation.py
```

Ne pas relancer les générateurs de bilans v6 : les bilans v7 utilisent des tirages dynamiques.

## Vérifications

Validation des banques, des destinations, des conseils et de 762 formulations de questions libres ; moteur ChatMD : 54 bilans complets, filtre/recherche glossaire, accueil et réponses aux questions, conditions des scores 0 à 5. Recherche de communes testée pour Lyon, 69000, 69001, 69009, Paris, Marseille, Saint-Étienne, Bordeaux, Lille, Nantes, Toulouse et Saint-Aubin.

Après publication, contrôler visuellement le chatbot intégré à Moodle sur ordinateur et téléphone ; l’illustration devient accessible lorsque le fichier assets/image-mentale-1905.png est publié dans le dépôt.

## Installation

Copier le contenu de Chatbot_civique2 dans le dossier du dépôt existant, en remplaçant les fichiers. Conserver le dossier .git du dépôt local. Vérifier qu’aucune fusion n’est en cours avant de déposer cette nouvelle version, puis commit et Push origin dans GitHub Desktop.
