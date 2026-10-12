# CiviCoach — version 51

Cette version ajoute des fiches de révision personnalisées aux fonctionnalités de la version 50.

## Ce que voit l’apprenant

- Dans les feedbacks du bilan, de l’entraînement et de l’examen blanc : « Consulter ma fiche de révision », lorsque des erreurs détaillées sont disponibles.
- Dans les révisions : consultation après une réponse, à la fin du chapitre et à la fin des activités.
- Dans « Mon parcours personnalisé » : « Mes fiches de révision », avec sélection d’une tentative ou d’un chapitre.
- Une fenêtre affiche une notion à la fois : réponse à retenir, comparaison avec le choix de l’apprenant, schéma, explication, exemple et vérification personnelle.
- Lecture audio, pause, arrêt et accès aux réglages. Fermer la fenêtre permet de retrouver le chat ou l’activité en cours.
- Téléchargement d’une fiche ou des huit fiches affichées en PDF, avec texte principal en corps 14. Les fiches suivantes sont accessibles par pagination.

## Personnalisation et sauvegarde

Les fiches utilisent les erreurs réellement enregistrées. Les réponses partielles aux questions libres sont également prises en compte. Une nouvelle réponse correcte à la même question libre retire l’erreur active. Les activités enregistrent les premiers choix incorrects, avec les index d’origine malgré le tirage aléatoire. La remise à zéro d’une activité efface ses erreurs ; l’effacement du parcours efface aussi les fiches.

Les fiches de bilan et d’examen se fondent sur les références fiables déjà sauvegardées. Le menu permet de consulter les anciennes tentatives : une ancienne erreur reste donc accessible avec le contexte de cette tentative. Les tentatives anciennes qui ne contiennent qu’un score ne permettent pas de déduire les questions manquées. Une fiche de chapitre reste disponible, explicitement présentée comme une fiche générale.

Les scores et leurs barèmes ne sont pas modifiés. Les fiches ne constituent pas un diagnostic des difficultés de l’apprenant. Aucun lien vers un cours externe n’est ajouté dans leur contenu.

## Actualisation des contenus

`scripts/construire_fiches_v51.py` construit `chatbot/fiches-data.js` à partir des réponses, explications et astuces des Excel, des corrections des questions libres et des données des activités. Aucun service de génération externe n’est nécessaire au fonctionnement des fiches.

Le workflow GitHub existant exécute `scripts/actualiser_bases.py`, qui reconstruit désormais également les fiches. Après modification et push d’un Excel ou des données sources des activités, le déploiement Pages met donc à jour les contenus des fiches. Les versions des ressources sont renouvelées pour limiter la réutilisation de fichiers en cache.

## Lecture simplifiée et FALC

La mise en page s’inspire des [règles officielles de l’Unapei](https://falc.unapei.org/quest-ce-que-le-falc/les-regles-du-falc/) : information ordonnée, une notion à la fois, texte aéré, caractères sans empattement, repères visuels et exemples issus du corpus. Les formulations correctes du corpus restent la référence ; certaines notions juridiques peuvent encore nécessiter une explication avec un formateur.

L’interface indique « Lecture simplifiée ». Ces fiches ne sont pas présentées comme du FALC validé : la participation de personnes en situation de handicap intellectuel à la transcription ou à la relecture est indispensable selon l’Unapei. Le logo officiel FALC n’est pas utilisé.

## Vérifications

- Cohérence du corpus Excel, liens et destinations du chatbot.
- Consultation native des feedbacks, du menu et des réponses libres, fermeture sans modification de la progression, boutons après reprise du contenu sauvegardé.
- Sélection par thématique, données anciennes, absence d’erreurs, résolution d’une erreur et effacement.
- Simulation d’activités avec un choix faux : index, score, bouton de fin et remise à zéro.
- Génération du PDF et contrôle visuel de sa mise en page.
- Conservation des réglages, de la reprise du dernier bilan et du bouton grand écran.

Un exemple fictif de fiches figure dans `exemples/fiche-revision-exemple.pdf`.
