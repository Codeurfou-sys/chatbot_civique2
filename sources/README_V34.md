# CiviCoach — version 34

- Questions successives directement dans le champ de saisie : la rubrique reste active après chaque réponse.
- Question « Est-ce qu’il y a un centre proche de Lyon ? » : réponse et lien vers la recherche de centres.
- Quatre interrupteurs de daltonisme réunis dans un seul cadre ; un seul profil actif à la fois.
- Réglages de lecture étendus aux libellés des commandes, aux fonds et aux icônes. Le texte agrandi conserve des libellés lisibles sur smartphone.
- Un seul paragraphe explicatif, conformément à la demande.
- Adresses conservées dans recherche-centres/data/adresses_centres.json, indépendamment de la mise à jour des sessions.

## Adresses

9 adresses confirmées sur le répertoire officiel FRATE : Besançon, Bourg-en-Bresse, Clermont-Ferrand, Dijon, Lons-le-Saunier, Montbéliard, Mulhouse, Reims et Strasbourg.
12 adresses provenant d’annuaires externes portent la mention « à confirmer sur votre convocation ». Les sources figurent dans le fichier JSON.
Les adresses précises d’Annemasse, Bourges et Chaumont restent à compléter ; un message invite à consulter la convocation ou à contacter le centre.
Les distances restent calculées depuis les coordonnées de la commune du centre.

## Validation

Test du moteur ChatMD : trois questions consécutives sans cliquer sur « Poser une autre question », activation des quatre profils, texte agrandi et absence de débordement aux largeurs 375, 768 et 1280 pixels ; recherche Besançon et affichage des adresses après chargement des sessions actualisées.
Validation du Markdown : aucune destination manquante ou écran en doublon.

## Installation

Remplacer les fichiers du dépôt par le contenu de ce ZIP. Conserver le code d’intégration Moodle existant. Après le déploiement GitHub Pages, recharger les onglets Moodle et plein écran déjà ouverts.
Les réglages visuels ne constituent pas à eux seuls une certification de conformité RGAA.
