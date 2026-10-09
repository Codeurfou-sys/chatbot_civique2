# CiviCoach — version 50

Les adresses sont mises à jour dans la recherche de proximité, les fiches des centres et les boutons de choix par région.

| Centre | Adresse affichée |
| --- | --- |
| Chaumont | 49 rue Lévy Alphandéry, 52000 Chaumont |
| Troyes | 28 rue Coulommières (3e étage), 10000 Troyes |
| Vichy | 2-4 rue de Paris, Passage des Commerces, 03200 Vichy |
| Le Puy-en-Velay | 16 rue des Moulins (Résidence Alfred de Vigny), 43000 Le Puy-en-Velay |
| Annemasse | 3 passage Jean Moulin, 74100 Annemasse |
| Montluel | 630 rue des Valets, 01120 Montluel |

Montluel est ajouté au menu Rhône-Alpes et aux données utilisées par la recherche de proximité, y compris sa copie de secours. Sessions ajoutées : 18 novembre et 16 décembre 2026, telles que publiées sur https://frateformation.net/formation/examen-civique/ le 9 octobre 2026. Le formulaire régional Rhône-Alpes est utilisé pour l'inscription.

Les coordonnées de Montluel proviennent du repère communal déjà fourni par la base des communes ; elles servent au calcul des distances approximatives à vol d'oiseau.

Les adresses modifiables sont dans `recherche-centres/data/adresses_centres.json`. Le workflow GitHub synchronise les adresses des écrans du chatbot avant de compiler et publier les parcours. Les centres et sessions restent dans `recherche-centres/data/sessions.json`.

## Installation

Décompressez le ZIP, copiez son contenu dans votre dépôt GitHub en conservant `.github`, puis faites le commit et le push. Attendez que GitHub Actions termine le déploiement, puis actualisez la page et rouvrez le chatbot.

## Contrôles

Recherche avec les données actualisées et avec la copie locale ; Montluel trouvé par commune et proposé pour le code postal 01120 ; six adresses contrôlées dans les boutons régionaux et les fiches avec le moteur ChatMD ; synchronisation répétée sans duplication ; liens et banques de questions contrôlés.

Toutes les améliorations de la version 49 sont incluses.
