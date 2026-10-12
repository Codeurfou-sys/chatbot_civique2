# CiviCoach v55 — fiches pour réviser rapidement

Remplacez les fichiers du dépôt par le contenu du ZIP, puis commitez et poussez les modifications. Le correctif GitHub pour les anciens exports sans Montluel est inclus.

## Règles communes à toutes les fiches

Les erreurs servent uniquement à sélectionner les sujets. La fiche présente ensuite des connaissances à apprendre, sans mauvaises réponses, sans score ni rappel de l’erreur. Les règles s’appliquent aux entraînements de connaissances et de mises en situation, aux révisions, aux examens blancs et aux bilans INIT et PROG.

Le moteur partagé `chatbot/fiches-visuels.js` choisit l’illustration selon la question, sa situation et sa bonne réponse. Les mauvaises propositions ne servent pas à choisir une image. Monuments, drapeaux, objets, personnes et scènes de travail ont des critères distincts. Une notion inconnue ne reçoit plus automatiquement une image de sa thématique : elle reste présentée avec ses repères écrits. Les portraits et scènes détaillés existants conservent leur style.

Les textes sont composés de phrases entières issues des corrigés. Les répétitions sont retirées. Une réponse courte « oui », « non » ou numérique est remplacée par une phrase explicite du corrigé lorsque celle-ci est disponible. Les conditions légales sont conservées. Les mémos utilisent des abréviations développées, des dates ou un lien utile à retenir, sans inventer d’acronyme arbitraire.

Des schémas relient les rôles institutionnels, les étapes de déclaration des revenus et les démarches d’Assurance maladie. Les repères sur les drapeaux, la tour Eiffel et les dates historiques suivent la même logique. Aucun quiz final n’est ajouté. Les PDF sont au format A4 portrait, avec des blocs de hauteur adaptée ; seules les notions courtes peuvent partager un encadré.

La date figure une fois sur la première page du PDF. Le titre ne contient plus les mentions « Lecture simplifiée », le nombre de notions ou le profil de couleurs. Les thèmes restent indiqués par des titres et des repères T1 à T5. Les couleurs ne portent pas seules l’information.

## Accessibilité et enregistrements

Le bloc de consultation et son bouton suivent le profil de daltonisme choisi. Les PDF et les fiches ouvertes prennent les réglages actifs. L’achromatopsie utilise les illustrations et le logo en niveaux de gris. Le texte agrandi et le contraste renforcé sont conservés. Le bouton des enregistrements porte le libellé « Télécharger ma ou mes fiches de révision ». Un téléchargement depuis un enregistrement ne restaure pas l’ancienne tentative.

## Tester et actualiser

Ouvrez `exemples/Tester_les_fiches.html`. Vous pouvez sélectionner les notions et un profil de couleurs. Trois PDF exemples sont fournis. Les questions et corrigés sont toujours reconstruits après modification et push des Excel. L’illustration d’une nouvelle notion est choisie avec les mêmes règles ; une nouvelle image spécialisée nécessite son ajout au catalogue, aucune IA externe n’est appelée pendant la consultation.

Références complémentaires des repères illustrés :
- Tour Eiffel : https://www.toureiffel.paris/fr/le-monument/exposition-universelle
- Drapeau suisse : https://www.aboutswitzerland.eda.admin.ch/fr/drapeau
- Suisse et Union européenne : https://www.seco.admin.ch/fr/union-europeenne-ue

Les cinq nouvelles illustrations sont originales et générées pour CiviCoach : tour Eiffel, drapeaux français et suisse, travail en atelier et entreprise. Les prompts décrivent le sujet précis, le style éditorial détaillé bordeaux/ocre/crème et un fond transparent, sans textes ni logos. Elles figurent dans `chatbot/assets/fiches/` et leurs variantes monochromes sont compilées automatiquement.

Le contenu de la fiche est un support de révision ; les corrigés complets restent dans le feedback de l’activité. La lecture simplifiée ne constitue pas une certification FALC.
