# Mise à jour v19

## Ouvrir le chatbot en grand

L’accueil et le menu principal contiennent un lien qui ouvre la page complète dans un nouvel onglet. L’en-tête de la page hébergée fournit le même lien. Utiliser cette adresse pour Moodle : https://codeurfou-sys.github.io/chatbot_civique2/chatbot/

L’export PDF et la sauvegarde complète sont disponibles sur cette page hébergée. Le fichier Markdown peut aussi être testé sur le service public ChatMD : son lien « Ouvrir le chatbot en grand » mène à la page hébergée avec ces fonctions.

## Symboles de la République

La consigne demande quatre symboles officiels : le drapeau, l’hymne, la devise et Marianne. Le score maximal est 4. Le cours distingue les trois symboles cités à l’article 2 de la Constitution et Marianne, également présentée comme un symbole officiel sur le site gouvernemental de formation civique.

Les illustrations sont des fichiers SVG locaux : notamment OpenMoji pour le drapeau, la musique, le coq, la baguette, le croissant et la tour Eiffel. Le profil de Marianne reproduit un visuel institutionnel comme objet pédagogique. Le bonnet est une illustration de Delapouite ; le béret et la devise sont des illustrations vectorielles originales. Les sources et licences sont dans SOURCES_VISUELS_V19.md.

Sources : https://www.conseil-constitutionnel.fr/la-constitution/quels-sont-les-symboles-de-l-etat-prevus-par-la-constitution et https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/les-symboles-de-la-republique/

## PDF du parcours

« Mes résultats sauvegardés » propose deux exports : un PDF consultable (bilans, entraînements, examens blancs, scores par thème, conseils et progression des révisions), et le JSON permettant la reprise du parcours. Le PDF est généré dans le navigateur à partir des résultats enregistrés, sans transmettre ces résultats à un serveur. Bibliothèque PDF et police sont incluses dans le dépôt ; il n’est pas nécessaire de visiter un autre site pour produire le document.

Les conseils du PDF réutilisent les textes thématiques du projet. Les corrections détaillées et les plans d’action interactifs restent consultables dans « Mon parcours personnalisé ».

## Deuxième activité : langues régionales

La carte métropolitaine propose 12 étiquettes, une par région concernée, regroupant plusieurs langues lorsque cela est pertinent. Une étiquette apparaît à la fois dans un ordre mélangé. Cliquez sur l’étiquette puis sur la région, ou faites-la glisser sur la carte. Les boutons portant les noms des régions permettent aussi une utilisation au clavier.

Les regroupements sont pédagogiques : les aires linguistiques traversent les frontières administratives et ne couvrent pas uniformément chaque région. Le corrigé précise cette nuance. Le Grand Est regroupe notamment l’alsacien, le francique, le lorrain, le champenois, le wallon et le franc-comtois, présent dans certaines communes du sud de l’Alsace. Le franc-comtois figure aussi dans le regroupement Bourgogne-Franche-Comté. Aucune étiquette artificielle n’est créée pour l’Île-de-France. Les langues régionales font partie du patrimoine ; le français reste la langue officielle.

Source : https://www.culture.gouv.fr/thematiques/langue-francaise-et-langues-de-france/agir-pour-les-langues/promouvoir-les-langues-de-france/langues-regionales

## Culture : couvertures réelles

Huit couvertures réelles remplacent les illustrations pédagogiques de la v18. Elles sont vérifiées visuellement et conservées localement pour éviter les images manquantes pendant l’exercice. Le nom de l’auteur est caché par une couche de l’interface avant et après le choix ; il apparaît dans les propositions et le corrigé. L’œuvre « Le Corbeau et le Renard » est explicitement reliée à son recueil, les Fables, dont la couverture est montrée. Les éditions et sources sont documentées.

## Bulletin de paie

Les montants ne changent pas : net avant impôt 1 600 €, CSG non déductible 50 €, net imposable 1 650 €, taux de prélèvement 5 %, prélèvement 82,50 €, net payé 1 517,50 €. Le corrigé explique désormais clairement pourquoi le net imposable est supérieur au net avant impôt. Les taux restent fictifs et pédagogiques.

Source : https://www.urssaf.fr/accueil/salarie/salarie-particulier-employeur/salarie-declaration-remuneration/salarie-domicile-bulletin-paie.html

## Poser une question

Les consignes invitent à attendre la réponse complète, ses suggestions et ses boutons, puis à cliquer sur « Poser une autre question » pour continuer. Sur la page hébergée, un cercle de chargement et un message restent affichés jusqu’à la fin du rendu des suggestions. Le bouton Envoyer est temporairement désactivé pour éviter les envois multiples. Le service public ChatMD affiche les consignes du Markdown ; l’indicateur interactif est fourni par la page hébergée à utiliser dans Moodle.

## Sauvegarde et contrôles

Les historiques de bilans, entraînements et examens sont conservés. Les étapes d’ateliers v18 compatibles sont reprises. Les deux chapitres modifiés (symboles et langue officielle) demandent une nouvelle réalisation des activités, afin de ne pas attribuer le score d’un exercice ancien à un exercice nouveau.

39 activités contrôlées dans le navigateur, sans débordement à 390 pixels. Les placements de langues, clics et calculs du bulletin, choix de symboles, couvertures, liens, sauvegarde et téléchargement PDF sont testés. Les 62 questions écrites, les banques des trois examens et les 30 examens blancs restent vérifiés. Les pages du PDF sont rendues pour contrôler les accents et la pagination.

Tests v19 : node scripts/validate_sauvegarde_v19.js ; node scripts/validate_revision_v19_runtime.js ; node scripts/validate_ui_v19.cjs (Playwright). Les tests de banques et de compilation restent dans scripts/validate_banques_examens.py et scripts/validate_chatbot_final.py.

Copier les fichiers à la racine du dépôt existant, puis Commit et Push origin. Aucun Push n’a été effectué automatiquement. Le workflow d’actualisation des dates de la v18 est conservé ; sa publication distante se vérifie dans GitHub Actions après le Push.
