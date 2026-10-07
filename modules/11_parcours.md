## SCR_PARCOURS_MENU
### 🧭 Mon parcours personnalisé

Retrouvez vos résultats et les conseils pour progresser.

1. [📊 Mon bilan](SCR_PARCOURS_BILAN)
2. [🎯 Mes entraînements](SCR_ENT_PLAN_MENU)
3. [📝 Mes examens blancs @lastRetour=SCR_PARCOURS_MENU](SCR_LAST_EXAM_RESULT)
4. [🏠 Menu principal](MENU_PRINCIPAL)

Vos résultats et vos conseils sont conservés sur ce navigateur.

1. [💾 Mes résultats sauvegardés](SCR_SAVE_MENU)

## SCR_PARCOURS_T1
### 🧭 Votre plan — Principes et valeurs de la République

`if !@parcoursDisponible`
Terminez un bilan pour obtenir un plan adapté.
1. [🧭 Faire mon bilan](SCR_BIL_MENU)
`endif`
`if @parcoursDisponible`
`@planPct1 = calc(@parcoursT1*20)`
**Dernier bilan : `@parcoursT1`/5 — `@planPct1` %.**
`if @planPct1 < 40`
**Votre priorité : comprendre les repères essentiels.** Travaillez les libertés, l’égalité, la fraternité et la laïcité, une notion à la fois. Pour chaque erreur, expliquez la bonne réponse avec vos propres mots et donnez un exemple concret. Faites ensuite un entraînement de dix questions : visez d’abord 6/10, puis 8/10 deux fois. Ce résultat vous donne un point de départ précis pour progresser.
`endif`
`if @planPct1 >= 40 && @planPct1 < 80`
**Vos acquis se construisent : consolidez les points encore hésitants.** Repérez dans le corrigé la règle qui vous a manqué concernant les libertés, l’égalité, la fraternité et la laïcité. Reformulez-la, puis vérifiez-la dans une nouvelle question. Visez 8/10 sur deux entraînements distincts ; espacez les essais pour vérifier que vous retenez la notion.
`endif`
`if @planPct1 >= 80 && @planPct1 < 100`
**Vous disposez de bons repères : confirmez-les.** Revenez uniquement sur les réponses manquées concernant les libertés, l’égalité, la fraternité et la laïcité. Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. En mises en situation, identifiez le principe civique recherché avant de comparer toutes les réponses.
`endif`
`if @planPct1 == 100`
**Félicitations, toutes les réponses de cette thématique sont correctes !** Confirmez ces acquis avec deux entraînements difficiles, puis appliquez les libertés, l’égalité, la fraternité et la laïcité dans trois entraînements de mises en situation. Visez au moins 8/10 deux fois avant de vous tester en conditions chronométrées.
`endif`
`if @planPct1 < 40`
#### Étape 1 — Comprendre et reformuler
Reprenez les notions de les libertés, l’égalité, la fraternité et la laïcité. Utilisez le corrigé pour retrouver la règle et un exemple ; évitez de mémoriser seulement la lettre de la réponse.
#### Étape 2 — Progresser avec les questions
Entraînez-vous sur dix questions. Visez 6/10, puis 8/10 deux fois en corrigeant vos erreurs entre les essais.
#### Étape 3 — Appliquer les principes
Réalisez au moins trois entraînements de mises en situation ; cherchez la règle civique visée et obtenez au moins 8/10 deux fois.
#### Étape 4 — Vérifier et ajuster
Lorsque ces objectifs sont atteints, passez un examen blanc. Analysez les erreurs conservées dans votre dernier résultat, puis refaites une série.
`endif`
`if @planPct1 >= 40 && @planPct1 < 80`
#### Étape 1 — Corriger les notions fragiles
Relisez vos erreurs sur les libertés, l’égalité, la fraternité et la laïcité. Pour chacune, expliquez pourquoi la réponse correcte convient et pourquoi votre choix ne convient pas.
#### Étape 2 — Stabiliser vos connaissances
Réalisez deux entraînements de cette thématique et visez au moins 8/10 sur chacun.
#### Étape 3 — Exercer votre raisonnement
Réalisez au moins trois entraînements de mises en situation, avec au moins 8/10 à deux reprises. Lisez toutes les propositions avant de choisir.
#### Étape 4 — Mesurer les progrès
Passez un examen blanc, analysez les erreurs, travaillez les deux priorités les plus faibles puis recommencez en conditions réelles.
`endif`
`if @planPct1 >= 80 && @planPct1 < 100`
#### Étape 1 — Confirmer les acquis
Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. Commencez par la notion qui a provoqué votre dernière erreur.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement avec au moins trois entraînements ; obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter le cours.
#### Étape 4 — Corriger et ajuster
Analysez votre dernier examen blanc et expliquez chaque erreur. Travaillez les notions concernées puis repassez un examen blanc.
`endif`
`if @planPct1 == 100`
#### Étape 1 — Confirmer votre score
Réalisez deux entraînements de cette thématique en mode difficile et obtenez au moins 8/10 à chaque fois.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement en réalisant au moins trois entraînements de mises en situation. Obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter les ressources.
#### Étape 4 — Corriger et ajuster
Analysez vos réponses et comprenez vos erreurs à l’aide du corrigé de votre dernier examen blanc. Travaillez les notions concernées, puis repassez un examen blanc pour améliorer ou confirmer votre score.
`endif`
`if @parcoursExam == "CSP"`
`if @planPct1 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T1_Q_DIF_LAUNCH)
`endif`
`if @planPct1 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T1_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CSP_T1_MIS_LAUNCH)
`endif`
`if @parcoursExam == "CR"`
`if @planPct1 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T1_Q_DIF_LAUNCH)
`endif`
`if @planPct1 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T1_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CR_T1_MIS_LAUNCH)
`endif`
`if @parcoursExam == "NAT"`
`if @planPct1 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T1_Q_DIF_LAUNCH)
`endif`
`if @planPct1 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T1_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_NAT_T1_MIS_LAUNCH)
`endif`
1. [🎯 Passer un examen blanc](SCR_PREP_MENU)
1. [📊 Voir les résultats de mon dernier examen blanc @lastRetour=SCR_PARCOURS_MENU](SCR_LAST_EXAM_RESULT)
`endif`
1. [↩️ Revenir à mon parcours](SCR_PARCOURS_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_T2
### 🧭 Votre plan — Institutions et système politique

`if !@parcoursDisponible`
Terminez un bilan pour obtenir un plan adapté.
1. [🧭 Faire mon bilan](SCR_BIL_MENU)
`endif`
`if @parcoursDisponible`
`@planPct2 = calc(@parcoursT2*20)`
**Dernier bilan : `@parcoursT2`/5 — `@planPct2` %.**
`if @planPct2 < 40`
**Votre priorité : comprendre les repères essentiels.** Travaillez le rôle du président, du Gouvernement, du Parlement et des collectivités, une notion à la fois. Pour chaque erreur, expliquez la bonne réponse avec vos propres mots et donnez un exemple concret. Faites ensuite un entraînement de dix questions : visez d’abord 6/10, puis 8/10 deux fois. Ce résultat vous donne un point de départ précis pour progresser.
`endif`
`if @planPct2 >= 40 && @planPct2 < 80`
**Vos acquis se construisent : consolidez les points encore hésitants.** Repérez dans le corrigé la règle qui vous a manqué concernant le rôle du président, du Gouvernement, du Parlement et des collectivités. Reformulez-la, puis vérifiez-la dans une nouvelle question. Visez 8/10 sur deux entraînements distincts ; espacez les essais pour vérifier que vous retenez la notion.
`endif`
`if @planPct2 >= 80 && @planPct2 < 100`
**Vous disposez de bons repères : confirmez-les.** Revenez uniquement sur les réponses manquées concernant le rôle du président, du Gouvernement, du Parlement et des collectivités. Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. En mises en situation, identifiez le principe civique recherché avant de comparer toutes les réponses.
`endif`
`if @planPct2 == 100`
**Félicitations, toutes les réponses de cette thématique sont correctes !** Confirmez ces acquis avec deux entraînements difficiles, puis appliquez le rôle du président, du Gouvernement, du Parlement et des collectivités dans trois entraînements de mises en situation. Visez au moins 8/10 deux fois avant de vous tester en conditions chronométrées.
`endif`
`if @planPct2 < 40`
#### Étape 1 — Comprendre et reformuler
Reprenez les notions de le rôle du président, du Gouvernement, du Parlement et des collectivités. Utilisez le corrigé pour retrouver la règle et un exemple ; évitez de mémoriser seulement la lettre de la réponse.
#### Étape 2 — Progresser avec les questions
Entraînez-vous sur dix questions. Visez 6/10, puis 8/10 deux fois en corrigeant vos erreurs entre les essais.
#### Étape 3 — Appliquer les principes
Réalisez au moins trois entraînements de mises en situation ; cherchez la règle civique visée et obtenez au moins 8/10 deux fois.
#### Étape 4 — Vérifier et ajuster
Lorsque ces objectifs sont atteints, passez un examen blanc. Analysez les erreurs conservées dans votre dernier résultat, puis refaites une série.
`endif`
`if @planPct2 >= 40 && @planPct2 < 80`
#### Étape 1 — Corriger les notions fragiles
Relisez vos erreurs sur le rôle du président, du Gouvernement, du Parlement et des collectivités. Pour chacune, expliquez pourquoi la réponse correcte convient et pourquoi votre choix ne convient pas.
#### Étape 2 — Stabiliser vos connaissances
Réalisez deux entraînements de cette thématique et visez au moins 8/10 sur chacun.
#### Étape 3 — Exercer votre raisonnement
Réalisez au moins trois entraînements de mises en situation, avec au moins 8/10 à deux reprises. Lisez toutes les propositions avant de choisir.
#### Étape 4 — Mesurer les progrès
Passez un examen blanc, analysez les erreurs, travaillez les deux priorités les plus faibles puis recommencez en conditions réelles.
`endif`
`if @planPct2 >= 80 && @planPct2 < 100`
#### Étape 1 — Confirmer les acquis
Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. Commencez par la notion qui a provoqué votre dernière erreur.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement avec au moins trois entraînements ; obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter le cours.
#### Étape 4 — Corriger et ajuster
Analysez votre dernier examen blanc et expliquez chaque erreur. Travaillez les notions concernées puis repassez un examen blanc.
`endif`
`if @planPct2 == 100`
#### Étape 1 — Confirmer votre score
Réalisez deux entraînements de cette thématique en mode difficile et obtenez au moins 8/10 à chaque fois.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement en réalisant au moins trois entraînements de mises en situation. Obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter les ressources.
#### Étape 4 — Corriger et ajuster
Analysez vos réponses et comprenez vos erreurs à l’aide du corrigé de votre dernier examen blanc. Travaillez les notions concernées, puis repassez un examen blanc pour améliorer ou confirmer votre score.
`endif`
`if @parcoursExam == "CSP"`
`if @planPct2 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T2_Q_DIF_LAUNCH)
`endif`
`if @planPct2 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T2_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CSP_T2_MIS_LAUNCH)
`endif`
`if @parcoursExam == "CR"`
`if @planPct2 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T2_Q_DIF_LAUNCH)
`endif`
`if @planPct2 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T2_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CR_T2_MIS_LAUNCH)
`endif`
`if @parcoursExam == "NAT"`
`if @planPct2 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T2_Q_DIF_LAUNCH)
`endif`
`if @planPct2 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T2_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_NAT_T2_MIS_LAUNCH)
`endif`
1. [🎯 Passer un examen blanc](SCR_PREP_MENU)
1. [📊 Voir les résultats de mon dernier examen blanc @lastRetour=SCR_PARCOURS_MENU](SCR_LAST_EXAM_RESULT)
`endif`
1. [↩️ Revenir à mon parcours](SCR_PARCOURS_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_T3
### 🧭 Votre plan — Droits et devoirs

`if !@parcoursDisponible`
Terminez un bilan pour obtenir un plan adapté.
1. [🧭 Faire mon bilan](SCR_BIL_MENU)
`endif`
`if @parcoursDisponible`
`@planPct3 = calc(@parcoursT3*20)`
**Dernier bilan : `@parcoursT3`/5 — `@planPct3` %.**
`if @planPct3 < 40`
**Votre priorité : comprendre les repères essentiels.** Travaillez les droits fondamentaux et les obligations de chacun, une notion à la fois. Pour chaque erreur, expliquez la bonne réponse avec vos propres mots et donnez un exemple concret. Faites ensuite un entraînement de dix questions : visez d’abord 6/10, puis 8/10 deux fois. Ce résultat vous donne un point de départ précis pour progresser.
`endif`
`if @planPct3 >= 40 && @planPct3 < 80`
**Vos acquis se construisent : consolidez les points encore hésitants.** Repérez dans le corrigé la règle qui vous a manqué concernant les droits fondamentaux et les obligations de chacun. Reformulez-la, puis vérifiez-la dans une nouvelle question. Visez 8/10 sur deux entraînements distincts ; espacez les essais pour vérifier que vous retenez la notion.
`endif`
`if @planPct3 >= 80 && @planPct3 < 100`
**Vous disposez de bons repères : confirmez-les.** Revenez uniquement sur les réponses manquées concernant les droits fondamentaux et les obligations de chacun. Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. En mises en situation, identifiez le principe civique recherché avant de comparer toutes les réponses.
`endif`
`if @planPct3 == 100`
**Félicitations, toutes les réponses de cette thématique sont correctes !** Confirmez ces acquis avec deux entraînements difficiles, puis appliquez les droits fondamentaux et les obligations de chacun dans trois entraînements de mises en situation. Visez au moins 8/10 deux fois avant de vous tester en conditions chronométrées.
`endif`
`if @planPct3 < 40`
#### Étape 1 — Comprendre et reformuler
Reprenez les notions de les droits fondamentaux et les obligations de chacun. Utilisez le corrigé pour retrouver la règle et un exemple ; évitez de mémoriser seulement la lettre de la réponse.
#### Étape 2 — Progresser avec les questions
Entraînez-vous sur dix questions. Visez 6/10, puis 8/10 deux fois en corrigeant vos erreurs entre les essais.
#### Étape 3 — Appliquer les principes
Réalisez au moins trois entraînements de mises en situation ; cherchez la règle civique visée et obtenez au moins 8/10 deux fois.
#### Étape 4 — Vérifier et ajuster
Lorsque ces objectifs sont atteints, passez un examen blanc. Analysez les erreurs conservées dans votre dernier résultat, puis refaites une série.
`endif`
`if @planPct3 >= 40 && @planPct3 < 80`
#### Étape 1 — Corriger les notions fragiles
Relisez vos erreurs sur les droits fondamentaux et les obligations de chacun. Pour chacune, expliquez pourquoi la réponse correcte convient et pourquoi votre choix ne convient pas.
#### Étape 2 — Stabiliser vos connaissances
Réalisez deux entraînements de cette thématique et visez au moins 8/10 sur chacun.
#### Étape 3 — Exercer votre raisonnement
Réalisez au moins trois entraînements de mises en situation, avec au moins 8/10 à deux reprises. Lisez toutes les propositions avant de choisir.
#### Étape 4 — Mesurer les progrès
Passez un examen blanc, analysez les erreurs, travaillez les deux priorités les plus faibles puis recommencez en conditions réelles.
`endif`
`if @planPct3 >= 80 && @planPct3 < 100`
#### Étape 1 — Confirmer les acquis
Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. Commencez par la notion qui a provoqué votre dernière erreur.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement avec au moins trois entraînements ; obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter le cours.
#### Étape 4 — Corriger et ajuster
Analysez votre dernier examen blanc et expliquez chaque erreur. Travaillez les notions concernées puis repassez un examen blanc.
`endif`
`if @planPct3 == 100`
#### Étape 1 — Confirmer votre score
Réalisez deux entraînements de cette thématique en mode difficile et obtenez au moins 8/10 à chaque fois.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement en réalisant au moins trois entraînements de mises en situation. Obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter les ressources.
#### Étape 4 — Corriger et ajuster
Analysez vos réponses et comprenez vos erreurs à l’aide du corrigé de votre dernier examen blanc. Travaillez les notions concernées, puis repassez un examen blanc pour améliorer ou confirmer votre score.
`endif`
`if @parcoursExam == "CSP"`
`if @planPct3 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T3_Q_DIF_LAUNCH)
`endif`
`if @planPct3 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T3_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CSP_T3_MIS_LAUNCH)
`endif`
`if @parcoursExam == "CR"`
`if @planPct3 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T3_Q_DIF_LAUNCH)
`endif`
`if @planPct3 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T3_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CR_T3_MIS_LAUNCH)
`endif`
`if @parcoursExam == "NAT"`
`if @planPct3 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T3_Q_DIF_LAUNCH)
`endif`
`if @planPct3 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T3_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_NAT_T3_MIS_LAUNCH)
`endif`
1. [🎯 Passer un examen blanc](SCR_PREP_MENU)
1. [📊 Voir les résultats de mon dernier examen blanc @lastRetour=SCR_PARCOURS_MENU](SCR_LAST_EXAM_RESULT)
`endif`
1. [↩️ Revenir à mon parcours](SCR_PARCOURS_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_T4
### 🧭 Votre plan — Histoire, géographie et culture

`if !@parcoursDisponible`
Terminez un bilan pour obtenir un plan adapté.
1. [🧭 Faire mon bilan](SCR_BIL_MENU)
`endif`
`if @parcoursDisponible`
`@planPct4 = calc(@parcoursT4*20)`
**Dernier bilan : `@parcoursT4`/5 — `@planPct4` %.**
`if @planPct4 < 40`
**Votre priorité : comprendre les repères essentiels.** Travaillez les repères historiques, les territoires et le patrimoine, une notion à la fois. Pour chaque erreur, expliquez la bonne réponse avec vos propres mots et donnez un exemple concret. Faites ensuite un entraînement de dix questions : visez d’abord 6/10, puis 8/10 deux fois. Ce résultat vous donne un point de départ précis pour progresser.
`endif`
`if @planPct4 >= 40 && @planPct4 < 80`
**Vos acquis se construisent : consolidez les points encore hésitants.** Repérez dans le corrigé la règle qui vous a manqué concernant les repères historiques, les territoires et le patrimoine. Reformulez-la, puis vérifiez-la dans une nouvelle question. Visez 8/10 sur deux entraînements distincts ; espacez les essais pour vérifier que vous retenez la notion.
`endif`
`if @planPct4 >= 80 && @planPct4 < 100`
**Vous disposez de bons repères : confirmez-les.** Revenez uniquement sur les réponses manquées concernant les repères historiques, les territoires et le patrimoine. Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. En mises en situation, identifiez le principe civique recherché avant de comparer toutes les réponses.
`endif`
`if @planPct4 == 100`
**Félicitations, toutes les réponses de cette thématique sont correctes !** Confirmez ces acquis avec deux entraînements difficiles, puis appliquez les repères historiques, les territoires et le patrimoine dans trois entraînements de mises en situation. Visez au moins 8/10 deux fois avant de vous tester en conditions chronométrées.
`endif`
`if @planPct4 < 40`
#### Étape 1 — Comprendre et reformuler
Reprenez les notions de les repères historiques, les territoires et le patrimoine. Utilisez le corrigé pour retrouver la règle et un exemple ; évitez de mémoriser seulement la lettre de la réponse.
#### Étape 2 — Progresser avec les questions
Entraînez-vous sur dix questions. Visez 6/10, puis 8/10 deux fois en corrigeant vos erreurs entre les essais.
#### Étape 3 — Appliquer les principes
Réalisez au moins trois entraînements de mises en situation ; cherchez la règle civique visée et obtenez au moins 8/10 deux fois.
#### Étape 4 — Vérifier et ajuster
Lorsque ces objectifs sont atteints, passez un examen blanc. Analysez les erreurs conservées dans votre dernier résultat, puis refaites une série.
`endif`
`if @planPct4 >= 40 && @planPct4 < 80`
#### Étape 1 — Corriger les notions fragiles
Relisez vos erreurs sur les repères historiques, les territoires et le patrimoine. Pour chacune, expliquez pourquoi la réponse correcte convient et pourquoi votre choix ne convient pas.
#### Étape 2 — Stabiliser vos connaissances
Réalisez deux entraînements de cette thématique et visez au moins 8/10 sur chacun.
#### Étape 3 — Exercer votre raisonnement
Réalisez au moins trois entraînements de mises en situation, avec au moins 8/10 à deux reprises. Lisez toutes les propositions avant de choisir.
#### Étape 4 — Mesurer les progrès
Passez un examen blanc, analysez les erreurs, travaillez les deux priorités les plus faibles puis recommencez en conditions réelles.
`endif`
`if @planPct4 >= 80 && @planPct4 < 100`
#### Étape 1 — Confirmer les acquis
Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. Commencez par la notion qui a provoqué votre dernière erreur.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement avec au moins trois entraînements ; obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter le cours.
#### Étape 4 — Corriger et ajuster
Analysez votre dernier examen blanc et expliquez chaque erreur. Travaillez les notions concernées puis repassez un examen blanc.
`endif`
`if @planPct4 == 100`
#### Étape 1 — Confirmer votre score
Réalisez deux entraînements de cette thématique en mode difficile et obtenez au moins 8/10 à chaque fois.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement en réalisant au moins trois entraînements de mises en situation. Obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter les ressources.
#### Étape 4 — Corriger et ajuster
Analysez vos réponses et comprenez vos erreurs à l’aide du corrigé de votre dernier examen blanc. Travaillez les notions concernées, puis repassez un examen blanc pour améliorer ou confirmer votre score.
`endif`
`if @parcoursExam == "CSP"`
`if @planPct4 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T4_Q_DIF_LAUNCH)
`endif`
`if @planPct4 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T4_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CSP_T4_MIS_LAUNCH)
`endif`
`if @parcoursExam == "CR"`
`if @planPct4 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T4_Q_DIF_LAUNCH)
`endif`
`if @planPct4 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T4_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CR_T4_MIS_LAUNCH)
`endif`
`if @parcoursExam == "NAT"`
`if @planPct4 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T4_Q_DIF_LAUNCH)
`endif`
`if @planPct4 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T4_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_NAT_T4_MIS_LAUNCH)
`endif`
1. [🎯 Passer un examen blanc](SCR_PREP_MENU)
1. [📊 Voir les résultats de mon dernier examen blanc @lastRetour=SCR_PARCOURS_MENU](SCR_LAST_EXAM_RESULT)
`endif`
1. [↩️ Revenir à mon parcours](SCR_PARCOURS_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_T5
### 🧭 Votre plan — Vivre dans la société française

`if !@parcoursDisponible`
Terminez un bilan pour obtenir un plan adapté.
1. [🧭 Faire mon bilan](SCR_BIL_MENU)
`endif`
`if @parcoursDisponible`
`@planPct5 = calc(@parcoursT5*20)`
**Dernier bilan : `@parcoursT5`/5 — `@planPct5` %.**
`if @planPct5 < 40`
**Votre priorité : comprendre les repères essentiels.** Travaillez les démarches, la santé, le travail et l’éducation, une notion à la fois. Pour chaque erreur, expliquez la bonne réponse avec vos propres mots et donnez un exemple concret. Faites ensuite un entraînement de dix questions : visez d’abord 6/10, puis 8/10 deux fois. Ce résultat vous donne un point de départ précis pour progresser.
`endif`
`if @planPct5 >= 40 && @planPct5 < 80`
**Vos acquis se construisent : consolidez les points encore hésitants.** Repérez dans le corrigé la règle qui vous a manqué concernant les démarches, la santé, le travail et l’éducation. Reformulez-la, puis vérifiez-la dans une nouvelle question. Visez 8/10 sur deux entraînements distincts ; espacez les essais pour vérifier que vous retenez la notion.
`endif`
`if @planPct5 >= 80 && @planPct5 < 100`
**Vous disposez de bons repères : confirmez-les.** Revenez uniquement sur les réponses manquées concernant les démarches, la santé, le travail et l’éducation. Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. En mises en situation, identifiez le principe civique recherché avant de comparer toutes les réponses.
`endif`
`if @planPct5 == 100`
**Félicitations, toutes les réponses de cette thématique sont correctes !** Confirmez ces acquis avec deux entraînements difficiles, puis appliquez les démarches, la santé, le travail et l’éducation dans trois entraînements de mises en situation. Visez au moins 8/10 deux fois avant de vous tester en conditions chronométrées.
`endif`
`if @planPct5 < 40`
#### Étape 1 — Comprendre et reformuler
Reprenez les notions de les démarches, la santé, le travail et l’éducation. Utilisez le corrigé pour retrouver la règle et un exemple ; évitez de mémoriser seulement la lettre de la réponse.
#### Étape 2 — Progresser avec les questions
Entraînez-vous sur dix questions. Visez 6/10, puis 8/10 deux fois en corrigeant vos erreurs entre les essais.
#### Étape 3 — Appliquer les principes
Réalisez au moins trois entraînements de mises en situation ; cherchez la règle civique visée et obtenez au moins 8/10 deux fois.
#### Étape 4 — Vérifier et ajuster
Lorsque ces objectifs sont atteints, passez un examen blanc. Analysez les erreurs conservées dans votre dernier résultat, puis refaites une série.
`endif`
`if @planPct5 >= 40 && @planPct5 < 80`
#### Étape 1 — Corriger les notions fragiles
Relisez vos erreurs sur les démarches, la santé, le travail et l’éducation. Pour chacune, expliquez pourquoi la réponse correcte convient et pourquoi votre choix ne convient pas.
#### Étape 2 — Stabiliser vos connaissances
Réalisez deux entraînements de cette thématique et visez au moins 8/10 sur chacun.
#### Étape 3 — Exercer votre raisonnement
Réalisez au moins trois entraînements de mises en situation, avec au moins 8/10 à deux reprises. Lisez toutes les propositions avant de choisir.
#### Étape 4 — Mesurer les progrès
Passez un examen blanc, analysez les erreurs, travaillez les deux priorités les plus faibles puis recommencez en conditions réelles.
`endif`
`if @planPct5 >= 80 && @planPct5 < 100`
#### Étape 1 — Confirmer les acquis
Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. Commencez par la notion qui a provoqué votre dernière erreur.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement avec au moins trois entraînements ; obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter le cours.
#### Étape 4 — Corriger et ajuster
Analysez votre dernier examen blanc et expliquez chaque erreur. Travaillez les notions concernées puis repassez un examen blanc.
`endif`
`if @planPct5 == 100`
#### Étape 1 — Confirmer votre score
Réalisez deux entraînements de cette thématique en mode difficile et obtenez au moins 8/10 à chaque fois.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement en réalisant au moins trois entraînements de mises en situation. Obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter les ressources.
#### Étape 4 — Corriger et ajuster
Analysez vos réponses et comprenez vos erreurs à l’aide du corrigé de votre dernier examen blanc. Travaillez les notions concernées, puis repassez un examen blanc pour améliorer ou confirmer votre score.
`endif`
`if @parcoursExam == "CSP"`
`if @planPct5 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T5_Q_DIF_LAUNCH)
`endif`
`if @planPct5 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T5_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CSP_T5_MIS_LAUNCH)
`endif`
`if @parcoursExam == "CR"`
`if @planPct5 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T5_Q_DIF_LAUNCH)
`endif`
`if @planPct5 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T5_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CR_T5_MIS_LAUNCH)
`endif`
`if @parcoursExam == "NAT"`
`if @planPct5 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T5_Q_DIF_LAUNCH)
`endif`
`if @planPct5 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T5_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_NAT_T5_MIS_LAUNCH)
`endif`
1. [🎯 Passer un examen blanc](SCR_PREP_MENU)
1. [📊 Voir les résultats de mon dernier examen blanc @lastRetour=SCR_PARCOURS_MENU](SCR_LAST_EXAM_RESULT)
`endif`
1. [↩️ Revenir à mon parcours](SCR_PARCOURS_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_FAIBLES
### 📚 Réviser mes points faibles

`if !@parcoursDisponible`
Réalisez un bilan pour repérer les thématiques à travailler.
1. [🧭 Faire mon bilan](SCR_BIL_MENU)
`endif`
`if @parcoursDisponible`
Voici les thématiques dont le score est inférieur à 4/5 lors de votre dernier bilan.
`if @parcoursT1 < 4`
1. [📚 Principes et valeurs de la République](SCR_PARCOURS_T1)
`endif`
`if @parcoursT2 < 4`
1. [📚 Institutions et système politique](SCR_PARCOURS_T2)
`endif`
`if @parcoursT3 < 4`
1. [📚 Droits et devoirs](SCR_PARCOURS_T3)
`endif`
`if @parcoursT4 < 4`
1. [📚 Histoire, géographie et culture](SCR_PARCOURS_T4)
`endif`
`if @parcoursT5 < 4`
1. [📚 Vivre dans la société française](SCR_PARCOURS_T5)
`endif`
`if @parcoursT1 >= 4 && @parcoursT2 >= 4 && @parcoursT3 >= 4 && @parcoursT4 >= 4 && @parcoursT5 >= 4`
Aucune thématique n’est en dessous de 4/5. Votre parcours vous propose de confirmer et d’approfondir ces acquis.
`endif`
`endif`
1. [🧭 Consulter mon parcours personnalisé](SCR_PARCOURS_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_ENT_PLAN_MENU
### 🧭 Mon parcours après entraînement

`if !@trainDisponible`
Terminez un entraînement pour obtenir votre plan.
1. [🎯 M’entraîner](SCR_ENT_MENU)
`endif`
`if @trainDisponible`
Votre parcours reprend votre dernier entraînement terminé dans cette session. Les thématiques évaluées sont classées par pourcentage croissant. Une ou deux réponses ne suffisent pas à garantir la maîtrise : confirmez vos acquis avec d’autres séries.
`@trainOrder1 = calc(@trainTotal1 > 0 ? @trainPct1 : 101)`
`@trainOrder2 = calc(@trainTotal2 > 0 ? @trainPct2 : 101)`
`@trainOrder3 = calc(@trainTotal3 > 0 ? @trainPct3 : 101)`
`@trainOrder4 = calc(@trainTotal4 > 0 ? @trainPct4 : 101)`
`@trainOrder5 = calc(@trainTotal5 > 0 ? @trainPct5 : 101)`
`if (@trainOrder2 < @trainOrder1 || (@trainOrder2 == @trainOrder1 && 2 < 1) ? 1 : 0) + (@trainOrder3 < @trainOrder1 || (@trainOrder3 == @trainOrder1 && 3 < 1) ? 1 : 0) + (@trainOrder4 < @trainOrder1 || (@trainOrder4 == @trainOrder1 && 4 < 1) ? 1 : 0) + (@trainOrder5 < @trainOrder1 || (@trainOrder5 == @trainOrder1 && 5 < 1) ? 1 : 0) == 0`
`if @trainTotal1 > 0`
1. [🇫🇷 Principes et valeurs de la République — `@trainPct1` %](SCR_ENT_PLAN_T1)
`endif`
`if @trainTotal1 == 0`
1. [🇫🇷 Principes et valeurs de la République — à évaluer](SCR_ENT_PLAN_T1)
`endif`
`endif`
`if (@trainOrder1 < @trainOrder2 || (@trainOrder1 == @trainOrder2 && 1 < 2) ? 1 : 0) + (@trainOrder3 < @trainOrder2 || (@trainOrder3 == @trainOrder2 && 3 < 2) ? 1 : 0) + (@trainOrder4 < @trainOrder2 || (@trainOrder4 == @trainOrder2 && 4 < 2) ? 1 : 0) + (@trainOrder5 < @trainOrder2 || (@trainOrder5 == @trainOrder2 && 5 < 2) ? 1 : 0) == 0`
`if @trainTotal2 > 0`
1. [🏛️ Institutions et système politique — `@trainPct2` %](SCR_ENT_PLAN_T2)
`endif`
`if @trainTotal2 == 0`
1. [🏛️ Institutions et système politique — à évaluer](SCR_ENT_PLAN_T2)
`endif`
`endif`
`if (@trainOrder1 < @trainOrder3 || (@trainOrder1 == @trainOrder3 && 1 < 3) ? 1 : 0) + (@trainOrder2 < @trainOrder3 || (@trainOrder2 == @trainOrder3 && 2 < 3) ? 1 : 0) + (@trainOrder4 < @trainOrder3 || (@trainOrder4 == @trainOrder3 && 4 < 3) ? 1 : 0) + (@trainOrder5 < @trainOrder3 || (@trainOrder5 == @trainOrder3 && 5 < 3) ? 1 : 0) == 0`
`if @trainTotal3 > 0`
1. [⚖️ Droits et devoirs — `@trainPct3` %](SCR_ENT_PLAN_T3)
`endif`
`if @trainTotal3 == 0`
1. [⚖️ Droits et devoirs — à évaluer](SCR_ENT_PLAN_T3)
`endif`
`endif`
`if (@trainOrder1 < @trainOrder4 || (@trainOrder1 == @trainOrder4 && 1 < 4) ? 1 : 0) + (@trainOrder2 < @trainOrder4 || (@trainOrder2 == @trainOrder4 && 2 < 4) ? 1 : 0) + (@trainOrder3 < @trainOrder4 || (@trainOrder3 == @trainOrder4 && 3 < 4) ? 1 : 0) + (@trainOrder5 < @trainOrder4 || (@trainOrder5 == @trainOrder4 && 5 < 4) ? 1 : 0) == 0`
`if @trainTotal4 > 0`
1. [🗺️ Histoire, géographie et culture — `@trainPct4` %](SCR_ENT_PLAN_T4)
`endif`
`if @trainTotal4 == 0`
1. [🗺️ Histoire, géographie et culture — à évaluer](SCR_ENT_PLAN_T4)
`endif`
`endif`
`if (@trainOrder1 < @trainOrder5 || (@trainOrder1 == @trainOrder5 && 1 < 5) ? 1 : 0) + (@trainOrder2 < @trainOrder5 || (@trainOrder2 == @trainOrder5 && 2 < 5) ? 1 : 0) + (@trainOrder3 < @trainOrder5 || (@trainOrder3 == @trainOrder5 && 3 < 5) ? 1 : 0) + (@trainOrder4 < @trainOrder5 || (@trainOrder4 == @trainOrder5 && 4 < 5) ? 1 : 0) == 0`
`if @trainTotal5 > 0`
1. [🤝 Vivre dans la société française — `@trainPct5` %](SCR_ENT_PLAN_T5)
`endif`
`if @trainTotal5 == 0`
1. [🤝 Vivre dans la société française — à évaluer](SCR_ENT_PLAN_T5)
`endif`
`endif`
`if (@trainOrder2 < @trainOrder1 || (@trainOrder2 == @trainOrder1 && 2 < 1) ? 1 : 0) + (@trainOrder3 < @trainOrder1 || (@trainOrder3 == @trainOrder1 && 3 < 1) ? 1 : 0) + (@trainOrder4 < @trainOrder1 || (@trainOrder4 == @trainOrder1 && 4 < 1) ? 1 : 0) + (@trainOrder5 < @trainOrder1 || (@trainOrder5 == @trainOrder1 && 5 < 1) ? 1 : 0) == 1`
`if @trainTotal1 > 0`
1. [🇫🇷 Principes et valeurs de la République — `@trainPct1` %](SCR_ENT_PLAN_T1)
`endif`
`if @trainTotal1 == 0`
1. [🇫🇷 Principes et valeurs de la République — à évaluer](SCR_ENT_PLAN_T1)
`endif`
`endif`
`if (@trainOrder1 < @trainOrder2 || (@trainOrder1 == @trainOrder2 && 1 < 2) ? 1 : 0) + (@trainOrder3 < @trainOrder2 || (@trainOrder3 == @trainOrder2 && 3 < 2) ? 1 : 0) + (@trainOrder4 < @trainOrder2 || (@trainOrder4 == @trainOrder2 && 4 < 2) ? 1 : 0) + (@trainOrder5 < @trainOrder2 || (@trainOrder5 == @trainOrder2 && 5 < 2) ? 1 : 0) == 1`
`if @trainTotal2 > 0`
1. [🏛️ Institutions et système politique — `@trainPct2` %](SCR_ENT_PLAN_T2)
`endif`
`if @trainTotal2 == 0`
1. [🏛️ Institutions et système politique — à évaluer](SCR_ENT_PLAN_T2)
`endif`
`endif`
`if (@trainOrder1 < @trainOrder3 || (@trainOrder1 == @trainOrder3 && 1 < 3) ? 1 : 0) + (@trainOrder2 < @trainOrder3 || (@trainOrder2 == @trainOrder3 && 2 < 3) ? 1 : 0) + (@trainOrder4 < @trainOrder3 || (@trainOrder4 == @trainOrder3 && 4 < 3) ? 1 : 0) + (@trainOrder5 < @trainOrder3 || (@trainOrder5 == @trainOrder3 && 5 < 3) ? 1 : 0) == 1`
`if @trainTotal3 > 0`
1. [⚖️ Droits et devoirs — `@trainPct3` %](SCR_ENT_PLAN_T3)
`endif`
`if @trainTotal3 == 0`
1. [⚖️ Droits et devoirs — à évaluer](SCR_ENT_PLAN_T3)
`endif`
`endif`
`if (@trainOrder1 < @trainOrder4 || (@trainOrder1 == @trainOrder4 && 1 < 4) ? 1 : 0) + (@trainOrder2 < @trainOrder4 || (@trainOrder2 == @trainOrder4 && 2 < 4) ? 1 : 0) + (@trainOrder3 < @trainOrder4 || (@trainOrder3 == @trainOrder4 && 3 < 4) ? 1 : 0) + (@trainOrder5 < @trainOrder4 || (@trainOrder5 == @trainOrder4 && 5 < 4) ? 1 : 0) == 1`
`if @trainTotal4 > 0`
1. [🗺️ Histoire, géographie et culture — `@trainPct4` %](SCR_ENT_PLAN_T4)
`endif`
`if @trainTotal4 == 0`
1. [🗺️ Histoire, géographie et culture — à évaluer](SCR_ENT_PLAN_T4)
`endif`
`endif`
`if (@trainOrder1 < @trainOrder5 || (@trainOrder1 == @trainOrder5 && 1 < 5) ? 1 : 0) + (@trainOrder2 < @trainOrder5 || (@trainOrder2 == @trainOrder5 && 2 < 5) ? 1 : 0) + (@trainOrder3 < @trainOrder5 || (@trainOrder3 == @trainOrder5 && 3 < 5) ? 1 : 0) + (@trainOrder4 < @trainOrder5 || (@trainOrder4 == @trainOrder5 && 4 < 5) ? 1 : 0) == 1`
`if @trainTotal5 > 0`
1. [🤝 Vivre dans la société française — `@trainPct5` %](SCR_ENT_PLAN_T5)
`endif`
`if @trainTotal5 == 0`
1. [🤝 Vivre dans la société française — à évaluer](SCR_ENT_PLAN_T5)
`endif`
`endif`
`if (@trainOrder2 < @trainOrder1 || (@trainOrder2 == @trainOrder1 && 2 < 1) ? 1 : 0) + (@trainOrder3 < @trainOrder1 || (@trainOrder3 == @trainOrder1 && 3 < 1) ? 1 : 0) + (@trainOrder4 < @trainOrder1 || (@trainOrder4 == @trainOrder1 && 4 < 1) ? 1 : 0) + (@trainOrder5 < @trainOrder1 || (@trainOrder5 == @trainOrder1 && 5 < 1) ? 1 : 0) == 2`
`if @trainTotal1 > 0`
1. [🇫🇷 Principes et valeurs de la République — `@trainPct1` %](SCR_ENT_PLAN_T1)
`endif`
`if @trainTotal1 == 0`
1. [🇫🇷 Principes et valeurs de la République — à évaluer](SCR_ENT_PLAN_T1)
`endif`
`endif`
`if (@trainOrder1 < @trainOrder2 || (@trainOrder1 == @trainOrder2 && 1 < 2) ? 1 : 0) + (@trainOrder3 < @trainOrder2 || (@trainOrder3 == @trainOrder2 && 3 < 2) ? 1 : 0) + (@trainOrder4 < @trainOrder2 || (@trainOrder4 == @trainOrder2 && 4 < 2) ? 1 : 0) + (@trainOrder5 < @trainOrder2 || (@trainOrder5 == @trainOrder2 && 5 < 2) ? 1 : 0) == 2`
`if @trainTotal2 > 0`
1. [🏛️ Institutions et système politique — `@trainPct2` %](SCR_ENT_PLAN_T2)
`endif`
`if @trainTotal2 == 0`
1. [🏛️ Institutions et système politique — à évaluer](SCR_ENT_PLAN_T2)
`endif`
`endif`
`if (@trainOrder1 < @trainOrder3 || (@trainOrder1 == @trainOrder3 && 1 < 3) ? 1 : 0) + (@trainOrder2 < @trainOrder3 || (@trainOrder2 == @trainOrder3 && 2 < 3) ? 1 : 0) + (@trainOrder4 < @trainOrder3 || (@trainOrder4 == @trainOrder3 && 4 < 3) ? 1 : 0) + (@trainOrder5 < @trainOrder3 || (@trainOrder5 == @trainOrder3 && 5 < 3) ? 1 : 0) == 2`
`if @trainTotal3 > 0`
1. [⚖️ Droits et devoirs — `@trainPct3` %](SCR_ENT_PLAN_T3)
`endif`
`if @trainTotal3 == 0`
1. [⚖️ Droits et devoirs — à évaluer](SCR_ENT_PLAN_T3)
`endif`
`endif`
`if (@trainOrder1 < @trainOrder4 || (@trainOrder1 == @trainOrder4 && 1 < 4) ? 1 : 0) + (@trainOrder2 < @trainOrder4 || (@trainOrder2 == @trainOrder4 && 2 < 4) ? 1 : 0) + (@trainOrder3 < @trainOrder4 || (@trainOrder3 == @trainOrder4 && 3 < 4) ? 1 : 0) + (@trainOrder5 < @trainOrder4 || (@trainOrder5 == @trainOrder4 && 5 < 4) ? 1 : 0) == 2`
`if @trainTotal4 > 0`
1. [🗺️ Histoire, géographie et culture — `@trainPct4` %](SCR_ENT_PLAN_T4)
`endif`
`if @trainTotal4 == 0`
1. [🗺️ Histoire, géographie et culture — à évaluer](SCR_ENT_PLAN_T4)
`endif`
`endif`
`if (@trainOrder1 < @trainOrder5 || (@trainOrder1 == @trainOrder5 && 1 < 5) ? 1 : 0) + (@trainOrder2 < @trainOrder5 || (@trainOrder2 == @trainOrder5 && 2 < 5) ? 1 : 0) + (@trainOrder3 < @trainOrder5 || (@trainOrder3 == @trainOrder5 && 3 < 5) ? 1 : 0) + (@trainOrder4 < @trainOrder5 || (@trainOrder4 == @trainOrder5 && 4 < 5) ? 1 : 0) == 2`
`if @trainTotal5 > 0`
1. [🤝 Vivre dans la société française — `@trainPct5` %](SCR_ENT_PLAN_T5)
`endif`
`if @trainTotal5 == 0`
1. [🤝 Vivre dans la société française — à évaluer](SCR_ENT_PLAN_T5)
`endif`
`endif`
`if (@trainOrder2 < @trainOrder1 || (@trainOrder2 == @trainOrder1 && 2 < 1) ? 1 : 0) + (@trainOrder3 < @trainOrder1 || (@trainOrder3 == @trainOrder1 && 3 < 1) ? 1 : 0) + (@trainOrder4 < @trainOrder1 || (@trainOrder4 == @trainOrder1 && 4 < 1) ? 1 : 0) + (@trainOrder5 < @trainOrder1 || (@trainOrder5 == @trainOrder1 && 5 < 1) ? 1 : 0) == 3`
`if @trainTotal1 > 0`
1. [🇫🇷 Principes et valeurs de la République — `@trainPct1` %](SCR_ENT_PLAN_T1)
`endif`
`if @trainTotal1 == 0`
1. [🇫🇷 Principes et valeurs de la République — à évaluer](SCR_ENT_PLAN_T1)
`endif`
`endif`
`if (@trainOrder1 < @trainOrder2 || (@trainOrder1 == @trainOrder2 && 1 < 2) ? 1 : 0) + (@trainOrder3 < @trainOrder2 || (@trainOrder3 == @trainOrder2 && 3 < 2) ? 1 : 0) + (@trainOrder4 < @trainOrder2 || (@trainOrder4 == @trainOrder2 && 4 < 2) ? 1 : 0) + (@trainOrder5 < @trainOrder2 || (@trainOrder5 == @trainOrder2 && 5 < 2) ? 1 : 0) == 3`
`if @trainTotal2 > 0`
1. [🏛️ Institutions et système politique — `@trainPct2` %](SCR_ENT_PLAN_T2)
`endif`
`if @trainTotal2 == 0`
1. [🏛️ Institutions et système politique — à évaluer](SCR_ENT_PLAN_T2)
`endif`
`endif`
`if (@trainOrder1 < @trainOrder3 || (@trainOrder1 == @trainOrder3 && 1 < 3) ? 1 : 0) + (@trainOrder2 < @trainOrder3 || (@trainOrder2 == @trainOrder3 && 2 < 3) ? 1 : 0) + (@trainOrder4 < @trainOrder3 || (@trainOrder4 == @trainOrder3 && 4 < 3) ? 1 : 0) + (@trainOrder5 < @trainOrder3 || (@trainOrder5 == @trainOrder3 && 5 < 3) ? 1 : 0) == 3`
`if @trainTotal3 > 0`
1. [⚖️ Droits et devoirs — `@trainPct3` %](SCR_ENT_PLAN_T3)
`endif`
`if @trainTotal3 == 0`
1. [⚖️ Droits et devoirs — à évaluer](SCR_ENT_PLAN_T3)
`endif`
`endif`
`if (@trainOrder1 < @trainOrder4 || (@trainOrder1 == @trainOrder4 && 1 < 4) ? 1 : 0) + (@trainOrder2 < @trainOrder4 || (@trainOrder2 == @trainOrder4 && 2 < 4) ? 1 : 0) + (@trainOrder3 < @trainOrder4 || (@trainOrder3 == @trainOrder4 && 3 < 4) ? 1 : 0) + (@trainOrder5 < @trainOrder4 || (@trainOrder5 == @trainOrder4 && 5 < 4) ? 1 : 0) == 3`
`if @trainTotal4 > 0`
1. [🗺️ Histoire, géographie et culture — `@trainPct4` %](SCR_ENT_PLAN_T4)
`endif`
`if @trainTotal4 == 0`
1. [🗺️ Histoire, géographie et culture — à évaluer](SCR_ENT_PLAN_T4)
`endif`
`endif`
`if (@trainOrder1 < @trainOrder5 || (@trainOrder1 == @trainOrder5 && 1 < 5) ? 1 : 0) + (@trainOrder2 < @trainOrder5 || (@trainOrder2 == @trainOrder5 && 2 < 5) ? 1 : 0) + (@trainOrder3 < @trainOrder5 || (@trainOrder3 == @trainOrder5 && 3 < 5) ? 1 : 0) + (@trainOrder4 < @trainOrder5 || (@trainOrder4 == @trainOrder5 && 4 < 5) ? 1 : 0) == 3`
`if @trainTotal5 > 0`
1. [🤝 Vivre dans la société française — `@trainPct5` %](SCR_ENT_PLAN_T5)
`endif`
`if @trainTotal5 == 0`
1. [🤝 Vivre dans la société française — à évaluer](SCR_ENT_PLAN_T5)
`endif`
`endif`
`if (@trainOrder2 < @trainOrder1 || (@trainOrder2 == @trainOrder1 && 2 < 1) ? 1 : 0) + (@trainOrder3 < @trainOrder1 || (@trainOrder3 == @trainOrder1 && 3 < 1) ? 1 : 0) + (@trainOrder4 < @trainOrder1 || (@trainOrder4 == @trainOrder1 && 4 < 1) ? 1 : 0) + (@trainOrder5 < @trainOrder1 || (@trainOrder5 == @trainOrder1 && 5 < 1) ? 1 : 0) == 4`
`if @trainTotal1 > 0`
1. [🇫🇷 Principes et valeurs de la République — `@trainPct1` %](SCR_ENT_PLAN_T1)
`endif`
`if @trainTotal1 == 0`
1. [🇫🇷 Principes et valeurs de la République — à évaluer](SCR_ENT_PLAN_T1)
`endif`
`endif`
`if (@trainOrder1 < @trainOrder2 || (@trainOrder1 == @trainOrder2 && 1 < 2) ? 1 : 0) + (@trainOrder3 < @trainOrder2 || (@trainOrder3 == @trainOrder2 && 3 < 2) ? 1 : 0) + (@trainOrder4 < @trainOrder2 || (@trainOrder4 == @trainOrder2 && 4 < 2) ? 1 : 0) + (@trainOrder5 < @trainOrder2 || (@trainOrder5 == @trainOrder2 && 5 < 2) ? 1 : 0) == 4`
`if @trainTotal2 > 0`
1. [🏛️ Institutions et système politique — `@trainPct2` %](SCR_ENT_PLAN_T2)
`endif`
`if @trainTotal2 == 0`
1. [🏛️ Institutions et système politique — à évaluer](SCR_ENT_PLAN_T2)
`endif`
`endif`
`if (@trainOrder1 < @trainOrder3 || (@trainOrder1 == @trainOrder3 && 1 < 3) ? 1 : 0) + (@trainOrder2 < @trainOrder3 || (@trainOrder2 == @trainOrder3 && 2 < 3) ? 1 : 0) + (@trainOrder4 < @trainOrder3 || (@trainOrder4 == @trainOrder3 && 4 < 3) ? 1 : 0) + (@trainOrder5 < @trainOrder3 || (@trainOrder5 == @trainOrder3 && 5 < 3) ? 1 : 0) == 4`
`if @trainTotal3 > 0`
1. [⚖️ Droits et devoirs — `@trainPct3` %](SCR_ENT_PLAN_T3)
`endif`
`if @trainTotal3 == 0`
1. [⚖️ Droits et devoirs — à évaluer](SCR_ENT_PLAN_T3)
`endif`
`endif`
`if (@trainOrder1 < @trainOrder4 || (@trainOrder1 == @trainOrder4 && 1 < 4) ? 1 : 0) + (@trainOrder2 < @trainOrder4 || (@trainOrder2 == @trainOrder4 && 2 < 4) ? 1 : 0) + (@trainOrder3 < @trainOrder4 || (@trainOrder3 == @trainOrder4 && 3 < 4) ? 1 : 0) + (@trainOrder5 < @trainOrder4 || (@trainOrder5 == @trainOrder4 && 5 < 4) ? 1 : 0) == 4`
`if @trainTotal4 > 0`
1. [🗺️ Histoire, géographie et culture — `@trainPct4` %](SCR_ENT_PLAN_T4)
`endif`
`if @trainTotal4 == 0`
1. [🗺️ Histoire, géographie et culture — à évaluer](SCR_ENT_PLAN_T4)
`endif`
`endif`
`if (@trainOrder1 < @trainOrder5 || (@trainOrder1 == @trainOrder5 && 1 < 5) ? 1 : 0) + (@trainOrder2 < @trainOrder5 || (@trainOrder2 == @trainOrder5 && 2 < 5) ? 1 : 0) + (@trainOrder3 < @trainOrder5 || (@trainOrder3 == @trainOrder5 && 3 < 5) ? 1 : 0) + (@trainOrder4 < @trainOrder5 || (@trainOrder4 == @trainOrder5 && 4 < 5) ? 1 : 0) == 4`
`if @trainTotal5 > 0`
1. [🤝 Vivre dans la société française — `@trainPct5` %](SCR_ENT_PLAN_T5)
`endif`
`if @trainTotal5 == 0`
1. [🤝 Vivre dans la société française — à évaluer](SCR_ENT_PLAN_T5)
`endif`
`endif`
`endif`
1. [↩️ Retour aux entraînements](SCR_ENT_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)


1. [↩️ Mon parcours personnalisé](SCR_PARCOURS_MENU)

## SCR_ENT_PLAN_T1
### 🧭 Votre plan — Principes et valeurs de la République

`if !@trainDisponible`
Terminez un entraînement pour obtenir un plan adapté.
1. [🎯 M’entraîner](SCR_ENT_MENU)
`endif`
`if @trainDisponible`
`if @trainTotal1 > 0`
**Dernier entraînement : `@trainT1`/`@trainTotal1` — `@trainPct1` %.**
`if @trainPct1 < 40`
**Votre priorité : comprendre les repères essentiels.** Travaillez les libertés, l’égalité, la fraternité et la laïcité, une notion à la fois. Pour chaque erreur, expliquez la bonne réponse avec vos propres mots et donnez un exemple concret. Faites ensuite un entraînement de dix questions : visez d’abord 6/10, puis 8/10 deux fois. Ce résultat vous donne un point de départ précis pour progresser.
`endif`
`if @trainPct1 >= 40 && @trainPct1 < 80`
**Vos acquis se construisent : consolidez les points encore hésitants.** Repérez dans le corrigé la règle qui vous a manqué concernant les libertés, l’égalité, la fraternité et la laïcité. Reformulez-la, puis vérifiez-la dans une nouvelle question. Visez 8/10 sur deux entraînements distincts ; espacez les essais pour vérifier que vous retenez la notion.
`endif`
`if @trainPct1 >= 80 && @trainPct1 < 100`
**Vous disposez de bons repères : confirmez-les.** Revenez uniquement sur les réponses manquées concernant les libertés, l’égalité, la fraternité et la laïcité. Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. En mises en situation, identifiez le principe civique recherché avant de comparer toutes les réponses.
`endif`
`if @trainPct1 == 100`
**Félicitations, toutes les réponses de cette thématique sont correctes !** Confirmez ces acquis avec deux entraînements difficiles, puis appliquez les libertés, l’égalité, la fraternité et la laïcité dans trois entraînements de mises en situation. Visez au moins 8/10 deux fois avant de vous tester en conditions chronométrées.
`endif`
`if @trainPct1 < 40`
#### Étape 1 — Comprendre et reformuler
Reprenez les notions de les libertés, l’égalité, la fraternité et la laïcité. Utilisez le corrigé pour retrouver la règle et un exemple ; évitez de mémoriser seulement la lettre de la réponse.
#### Étape 2 — Progresser avec les questions
Entraînez-vous sur dix questions. Visez 6/10, puis 8/10 deux fois en corrigeant vos erreurs entre les essais.
#### Étape 3 — Appliquer les principes
Réalisez au moins trois entraînements de mises en situation ; cherchez la règle civique visée et obtenez au moins 8/10 deux fois.
#### Étape 4 — Vérifier et ajuster
Lorsque ces objectifs sont atteints, passez un examen blanc. Analysez les erreurs conservées dans votre dernier résultat, puis refaites une série.
`endif`
`if @trainPct1 >= 40 && @trainPct1 < 80`
#### Étape 1 — Corriger les notions fragiles
Relisez vos erreurs sur les libertés, l’égalité, la fraternité et la laïcité. Pour chacune, expliquez pourquoi la réponse correcte convient et pourquoi votre choix ne convient pas.
#### Étape 2 — Stabiliser vos connaissances
Réalisez deux entraînements de cette thématique et visez au moins 8/10 sur chacun.
#### Étape 3 — Exercer votre raisonnement
Réalisez au moins trois entraînements de mises en situation, avec au moins 8/10 à deux reprises. Lisez toutes les propositions avant de choisir.
#### Étape 4 — Mesurer les progrès
Passez un examen blanc, analysez les erreurs, travaillez les deux priorités les plus faibles puis recommencez en conditions réelles.
`endif`
`if @trainPct1 >= 80 && @trainPct1 < 100`
#### Étape 1 — Confirmer les acquis
Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. Commencez par la notion qui a provoqué votre dernière erreur.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement avec au moins trois entraînements ; obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter le cours.
#### Étape 4 — Corriger et ajuster
Analysez votre dernier examen blanc et expliquez chaque erreur. Travaillez les notions concernées puis repassez un examen blanc.
`endif`
`if @trainPct1 == 100`
#### Étape 1 — Confirmer votre score
Réalisez deux entraînements de cette thématique en mode difficile et obtenez au moins 8/10 à chaque fois.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement en réalisant au moins trois entraînements de mises en situation. Obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter les ressources.
#### Étape 4 — Corriger et ajuster
Analysez vos réponses et comprenez vos erreurs à l’aide du corrigé de votre dernier examen blanc. Travaillez les notions concernées, puis repassez un examen blanc pour améliorer ou confirmer votre score.
`endif`
`endif`
`if @trainTotal1 == 0`
Cette thématique ne figurait pas dans votre dernier entraînement. Réalisez un entraînement pour obtenir un plan fondé sur vos réponses.
`endif`
`if @trainExam == "CSP"`
`if @trainPct1 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T1_Q_DIF_LAUNCH)
`endif`
`if @trainPct1 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T1_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CSP_T1_MIS_LAUNCH)
`endif`
`if @trainExam == "CR"`
`if @trainPct1 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T1_Q_DIF_LAUNCH)
`endif`
`if @trainPct1 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T1_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CR_T1_MIS_LAUNCH)
`endif`
`if @trainExam == "NAT"`
`if @trainPct1 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T1_Q_DIF_LAUNCH)
`endif`
`if @trainPct1 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T1_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_NAT_T1_MIS_LAUNCH)
`endif`
1. [🎯 Passer un examen blanc](SCR_PREP_MENU)
1. [📊 Voir les résultats de mon dernier examen blanc @lastRetour=SCR_ENT_PLAN_MENU](SCR_LAST_EXAM_RESULT)
`endif`
1. [↩️ Revenir à mon parcours](SCR_ENT_PLAN_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_ENT_PLAN_T2
### 🧭 Votre plan — Institutions et système politique

`if !@trainDisponible`
Terminez un entraînement pour obtenir un plan adapté.
1. [🎯 M’entraîner](SCR_ENT_MENU)
`endif`
`if @trainDisponible`
`if @trainTotal2 > 0`
**Dernier entraînement : `@trainT2`/`@trainTotal2` — `@trainPct2` %.**
`if @trainPct2 < 40`
**Votre priorité : comprendre les repères essentiels.** Travaillez le rôle du président, du Gouvernement, du Parlement et des collectivités, une notion à la fois. Pour chaque erreur, expliquez la bonne réponse avec vos propres mots et donnez un exemple concret. Faites ensuite un entraînement de dix questions : visez d’abord 6/10, puis 8/10 deux fois. Ce résultat vous donne un point de départ précis pour progresser.
`endif`
`if @trainPct2 >= 40 && @trainPct2 < 80`
**Vos acquis se construisent : consolidez les points encore hésitants.** Repérez dans le corrigé la règle qui vous a manqué concernant le rôle du président, du Gouvernement, du Parlement et des collectivités. Reformulez-la, puis vérifiez-la dans une nouvelle question. Visez 8/10 sur deux entraînements distincts ; espacez les essais pour vérifier que vous retenez la notion.
`endif`
`if @trainPct2 >= 80 && @trainPct2 < 100`
**Vous disposez de bons repères : confirmez-les.** Revenez uniquement sur les réponses manquées concernant le rôle du président, du Gouvernement, du Parlement et des collectivités. Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. En mises en situation, identifiez le principe civique recherché avant de comparer toutes les réponses.
`endif`
`if @trainPct2 == 100`
**Félicitations, toutes les réponses de cette thématique sont correctes !** Confirmez ces acquis avec deux entraînements difficiles, puis appliquez le rôle du président, du Gouvernement, du Parlement et des collectivités dans trois entraînements de mises en situation. Visez au moins 8/10 deux fois avant de vous tester en conditions chronométrées.
`endif`
`if @trainPct2 < 40`
#### Étape 1 — Comprendre et reformuler
Reprenez les notions de le rôle du président, du Gouvernement, du Parlement et des collectivités. Utilisez le corrigé pour retrouver la règle et un exemple ; évitez de mémoriser seulement la lettre de la réponse.
#### Étape 2 — Progresser avec les questions
Entraînez-vous sur dix questions. Visez 6/10, puis 8/10 deux fois en corrigeant vos erreurs entre les essais.
#### Étape 3 — Appliquer les principes
Réalisez au moins trois entraînements de mises en situation ; cherchez la règle civique visée et obtenez au moins 8/10 deux fois.
#### Étape 4 — Vérifier et ajuster
Lorsque ces objectifs sont atteints, passez un examen blanc. Analysez les erreurs conservées dans votre dernier résultat, puis refaites une série.
`endif`
`if @trainPct2 >= 40 && @trainPct2 < 80`
#### Étape 1 — Corriger les notions fragiles
Relisez vos erreurs sur le rôle du président, du Gouvernement, du Parlement et des collectivités. Pour chacune, expliquez pourquoi la réponse correcte convient et pourquoi votre choix ne convient pas.
#### Étape 2 — Stabiliser vos connaissances
Réalisez deux entraînements de cette thématique et visez au moins 8/10 sur chacun.
#### Étape 3 — Exercer votre raisonnement
Réalisez au moins trois entraînements de mises en situation, avec au moins 8/10 à deux reprises. Lisez toutes les propositions avant de choisir.
#### Étape 4 — Mesurer les progrès
Passez un examen blanc, analysez les erreurs, travaillez les deux priorités les plus faibles puis recommencez en conditions réelles.
`endif`
`if @trainPct2 >= 80 && @trainPct2 < 100`
#### Étape 1 — Confirmer les acquis
Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. Commencez par la notion qui a provoqué votre dernière erreur.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement avec au moins trois entraînements ; obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter le cours.
#### Étape 4 — Corriger et ajuster
Analysez votre dernier examen blanc et expliquez chaque erreur. Travaillez les notions concernées puis repassez un examen blanc.
`endif`
`if @trainPct2 == 100`
#### Étape 1 — Confirmer votre score
Réalisez deux entraînements de cette thématique en mode difficile et obtenez au moins 8/10 à chaque fois.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement en réalisant au moins trois entraînements de mises en situation. Obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter les ressources.
#### Étape 4 — Corriger et ajuster
Analysez vos réponses et comprenez vos erreurs à l’aide du corrigé de votre dernier examen blanc. Travaillez les notions concernées, puis repassez un examen blanc pour améliorer ou confirmer votre score.
`endif`
`endif`
`if @trainTotal2 == 0`
Cette thématique ne figurait pas dans votre dernier entraînement. Réalisez un entraînement pour obtenir un plan fondé sur vos réponses.
`endif`
`if @trainExam == "CSP"`
`if @trainPct2 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T2_Q_DIF_LAUNCH)
`endif`
`if @trainPct2 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T2_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CSP_T2_MIS_LAUNCH)
`endif`
`if @trainExam == "CR"`
`if @trainPct2 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T2_Q_DIF_LAUNCH)
`endif`
`if @trainPct2 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T2_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CR_T2_MIS_LAUNCH)
`endif`
`if @trainExam == "NAT"`
`if @trainPct2 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T2_Q_DIF_LAUNCH)
`endif`
`if @trainPct2 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T2_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_NAT_T2_MIS_LAUNCH)
`endif`
1. [🎯 Passer un examen blanc](SCR_PREP_MENU)
1. [📊 Voir les résultats de mon dernier examen blanc @lastRetour=SCR_ENT_PLAN_MENU](SCR_LAST_EXAM_RESULT)
`endif`
1. [↩️ Revenir à mon parcours](SCR_ENT_PLAN_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_ENT_PLAN_T3
### 🧭 Votre plan — Droits et devoirs

`if !@trainDisponible`
Terminez un entraînement pour obtenir un plan adapté.
1. [🎯 M’entraîner](SCR_ENT_MENU)
`endif`
`if @trainDisponible`
`if @trainTotal3 > 0`
**Dernier entraînement : `@trainT3`/`@trainTotal3` — `@trainPct3` %.**
`if @trainPct3 < 40`
**Votre priorité : comprendre les repères essentiels.** Travaillez les droits fondamentaux et les obligations de chacun, une notion à la fois. Pour chaque erreur, expliquez la bonne réponse avec vos propres mots et donnez un exemple concret. Faites ensuite un entraînement de dix questions : visez d’abord 6/10, puis 8/10 deux fois. Ce résultat vous donne un point de départ précis pour progresser.
`endif`
`if @trainPct3 >= 40 && @trainPct3 < 80`
**Vos acquis se construisent : consolidez les points encore hésitants.** Repérez dans le corrigé la règle qui vous a manqué concernant les droits fondamentaux et les obligations de chacun. Reformulez-la, puis vérifiez-la dans une nouvelle question. Visez 8/10 sur deux entraînements distincts ; espacez les essais pour vérifier que vous retenez la notion.
`endif`
`if @trainPct3 >= 80 && @trainPct3 < 100`
**Vous disposez de bons repères : confirmez-les.** Revenez uniquement sur les réponses manquées concernant les droits fondamentaux et les obligations de chacun. Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. En mises en situation, identifiez le principe civique recherché avant de comparer toutes les réponses.
`endif`
`if @trainPct3 == 100`
**Félicitations, toutes les réponses de cette thématique sont correctes !** Confirmez ces acquis avec deux entraînements difficiles, puis appliquez les droits fondamentaux et les obligations de chacun dans trois entraînements de mises en situation. Visez au moins 8/10 deux fois avant de vous tester en conditions chronométrées.
`endif`
`if @trainPct3 < 40`
#### Étape 1 — Comprendre et reformuler
Reprenez les notions de les droits fondamentaux et les obligations de chacun. Utilisez le corrigé pour retrouver la règle et un exemple ; évitez de mémoriser seulement la lettre de la réponse.
#### Étape 2 — Progresser avec les questions
Entraînez-vous sur dix questions. Visez 6/10, puis 8/10 deux fois en corrigeant vos erreurs entre les essais.
#### Étape 3 — Appliquer les principes
Réalisez au moins trois entraînements de mises en situation ; cherchez la règle civique visée et obtenez au moins 8/10 deux fois.
#### Étape 4 — Vérifier et ajuster
Lorsque ces objectifs sont atteints, passez un examen blanc. Analysez les erreurs conservées dans votre dernier résultat, puis refaites une série.
`endif`
`if @trainPct3 >= 40 && @trainPct3 < 80`
#### Étape 1 — Corriger les notions fragiles
Relisez vos erreurs sur les droits fondamentaux et les obligations de chacun. Pour chacune, expliquez pourquoi la réponse correcte convient et pourquoi votre choix ne convient pas.
#### Étape 2 — Stabiliser vos connaissances
Réalisez deux entraînements de cette thématique et visez au moins 8/10 sur chacun.
#### Étape 3 — Exercer votre raisonnement
Réalisez au moins trois entraînements de mises en situation, avec au moins 8/10 à deux reprises. Lisez toutes les propositions avant de choisir.
#### Étape 4 — Mesurer les progrès
Passez un examen blanc, analysez les erreurs, travaillez les deux priorités les plus faibles puis recommencez en conditions réelles.
`endif`
`if @trainPct3 >= 80 && @trainPct3 < 100`
#### Étape 1 — Confirmer les acquis
Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. Commencez par la notion qui a provoqué votre dernière erreur.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement avec au moins trois entraînements ; obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter le cours.
#### Étape 4 — Corriger et ajuster
Analysez votre dernier examen blanc et expliquez chaque erreur. Travaillez les notions concernées puis repassez un examen blanc.
`endif`
`if @trainPct3 == 100`
#### Étape 1 — Confirmer votre score
Réalisez deux entraînements de cette thématique en mode difficile et obtenez au moins 8/10 à chaque fois.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement en réalisant au moins trois entraînements de mises en situation. Obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter les ressources.
#### Étape 4 — Corriger et ajuster
Analysez vos réponses et comprenez vos erreurs à l’aide du corrigé de votre dernier examen blanc. Travaillez les notions concernées, puis repassez un examen blanc pour améliorer ou confirmer votre score.
`endif`
`endif`
`if @trainTotal3 == 0`
Cette thématique ne figurait pas dans votre dernier entraînement. Réalisez un entraînement pour obtenir un plan fondé sur vos réponses.
`endif`
`if @trainExam == "CSP"`
`if @trainPct3 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T3_Q_DIF_LAUNCH)
`endif`
`if @trainPct3 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T3_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CSP_T3_MIS_LAUNCH)
`endif`
`if @trainExam == "CR"`
`if @trainPct3 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T3_Q_DIF_LAUNCH)
`endif`
`if @trainPct3 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T3_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CR_T3_MIS_LAUNCH)
`endif`
`if @trainExam == "NAT"`
`if @trainPct3 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T3_Q_DIF_LAUNCH)
`endif`
`if @trainPct3 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T3_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_NAT_T3_MIS_LAUNCH)
`endif`
1. [🎯 Passer un examen blanc](SCR_PREP_MENU)
1. [📊 Voir les résultats de mon dernier examen blanc @lastRetour=SCR_ENT_PLAN_MENU](SCR_LAST_EXAM_RESULT)
`endif`
1. [↩️ Revenir à mon parcours](SCR_ENT_PLAN_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_ENT_PLAN_T4
### 🧭 Votre plan — Histoire, géographie et culture

`if !@trainDisponible`
Terminez un entraînement pour obtenir un plan adapté.
1. [🎯 M’entraîner](SCR_ENT_MENU)
`endif`
`if @trainDisponible`
`if @trainTotal4 > 0`
**Dernier entraînement : `@trainT4`/`@trainTotal4` — `@trainPct4` %.**
`if @trainPct4 < 40`
**Votre priorité : comprendre les repères essentiels.** Travaillez les repères historiques, les territoires et le patrimoine, une notion à la fois. Pour chaque erreur, expliquez la bonne réponse avec vos propres mots et donnez un exemple concret. Faites ensuite un entraînement de dix questions : visez d’abord 6/10, puis 8/10 deux fois. Ce résultat vous donne un point de départ précis pour progresser.
`endif`
`if @trainPct4 >= 40 && @trainPct4 < 80`
**Vos acquis se construisent : consolidez les points encore hésitants.** Repérez dans le corrigé la règle qui vous a manqué concernant les repères historiques, les territoires et le patrimoine. Reformulez-la, puis vérifiez-la dans une nouvelle question. Visez 8/10 sur deux entraînements distincts ; espacez les essais pour vérifier que vous retenez la notion.
`endif`
`if @trainPct4 >= 80 && @trainPct4 < 100`
**Vous disposez de bons repères : confirmez-les.** Revenez uniquement sur les réponses manquées concernant les repères historiques, les territoires et le patrimoine. Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. En mises en situation, identifiez le principe civique recherché avant de comparer toutes les réponses.
`endif`
`if @trainPct4 == 100`
**Félicitations, toutes les réponses de cette thématique sont correctes !** Confirmez ces acquis avec deux entraînements difficiles, puis appliquez les repères historiques, les territoires et le patrimoine dans trois entraînements de mises en situation. Visez au moins 8/10 deux fois avant de vous tester en conditions chronométrées.
`endif`
`if @trainPct4 < 40`
#### Étape 1 — Comprendre et reformuler
Reprenez les notions de les repères historiques, les territoires et le patrimoine. Utilisez le corrigé pour retrouver la règle et un exemple ; évitez de mémoriser seulement la lettre de la réponse.
#### Étape 2 — Progresser avec les questions
Entraînez-vous sur dix questions. Visez 6/10, puis 8/10 deux fois en corrigeant vos erreurs entre les essais.
#### Étape 3 — Appliquer les principes
Réalisez au moins trois entraînements de mises en situation ; cherchez la règle civique visée et obtenez au moins 8/10 deux fois.
#### Étape 4 — Vérifier et ajuster
Lorsque ces objectifs sont atteints, passez un examen blanc. Analysez les erreurs conservées dans votre dernier résultat, puis refaites une série.
`endif`
`if @trainPct4 >= 40 && @trainPct4 < 80`
#### Étape 1 — Corriger les notions fragiles
Relisez vos erreurs sur les repères historiques, les territoires et le patrimoine. Pour chacune, expliquez pourquoi la réponse correcte convient et pourquoi votre choix ne convient pas.
#### Étape 2 — Stabiliser vos connaissances
Réalisez deux entraînements de cette thématique et visez au moins 8/10 sur chacun.
#### Étape 3 — Exercer votre raisonnement
Réalisez au moins trois entraînements de mises en situation, avec au moins 8/10 à deux reprises. Lisez toutes les propositions avant de choisir.
#### Étape 4 — Mesurer les progrès
Passez un examen blanc, analysez les erreurs, travaillez les deux priorités les plus faibles puis recommencez en conditions réelles.
`endif`
`if @trainPct4 >= 80 && @trainPct4 < 100`
#### Étape 1 — Confirmer les acquis
Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. Commencez par la notion qui a provoqué votre dernière erreur.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement avec au moins trois entraînements ; obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter le cours.
#### Étape 4 — Corriger et ajuster
Analysez votre dernier examen blanc et expliquez chaque erreur. Travaillez les notions concernées puis repassez un examen blanc.
`endif`
`if @trainPct4 == 100`
#### Étape 1 — Confirmer votre score
Réalisez deux entraînements de cette thématique en mode difficile et obtenez au moins 8/10 à chaque fois.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement en réalisant au moins trois entraînements de mises en situation. Obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter les ressources.
#### Étape 4 — Corriger et ajuster
Analysez vos réponses et comprenez vos erreurs à l’aide du corrigé de votre dernier examen blanc. Travaillez les notions concernées, puis repassez un examen blanc pour améliorer ou confirmer votre score.
`endif`
`endif`
`if @trainTotal4 == 0`
Cette thématique ne figurait pas dans votre dernier entraînement. Réalisez un entraînement pour obtenir un plan fondé sur vos réponses.
`endif`
`if @trainExam == "CSP"`
`if @trainPct4 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T4_Q_DIF_LAUNCH)
`endif`
`if @trainPct4 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T4_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CSP_T4_MIS_LAUNCH)
`endif`
`if @trainExam == "CR"`
`if @trainPct4 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T4_Q_DIF_LAUNCH)
`endif`
`if @trainPct4 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T4_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CR_T4_MIS_LAUNCH)
`endif`
`if @trainExam == "NAT"`
`if @trainPct4 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T4_Q_DIF_LAUNCH)
`endif`
`if @trainPct4 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T4_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_NAT_T4_MIS_LAUNCH)
`endif`
1. [🎯 Passer un examen blanc](SCR_PREP_MENU)
1. [📊 Voir les résultats de mon dernier examen blanc @lastRetour=SCR_ENT_PLAN_MENU](SCR_LAST_EXAM_RESULT)
`endif`
1. [↩️ Revenir à mon parcours](SCR_ENT_PLAN_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_ENT_PLAN_T5
### 🧭 Votre plan — Vivre dans la société française

`if !@trainDisponible`
Terminez un entraînement pour obtenir un plan adapté.
1. [🎯 M’entraîner](SCR_ENT_MENU)
`endif`
`if @trainDisponible`
`if @trainTotal5 > 0`
**Dernier entraînement : `@trainT5`/`@trainTotal5` — `@trainPct5` %.**
`if @trainPct5 < 40`
**Votre priorité : comprendre les repères essentiels.** Travaillez les démarches, la santé, le travail et l’éducation, une notion à la fois. Pour chaque erreur, expliquez la bonne réponse avec vos propres mots et donnez un exemple concret. Faites ensuite un entraînement de dix questions : visez d’abord 6/10, puis 8/10 deux fois. Ce résultat vous donne un point de départ précis pour progresser.
`endif`
`if @trainPct5 >= 40 && @trainPct5 < 80`
**Vos acquis se construisent : consolidez les points encore hésitants.** Repérez dans le corrigé la règle qui vous a manqué concernant les démarches, la santé, le travail et l’éducation. Reformulez-la, puis vérifiez-la dans une nouvelle question. Visez 8/10 sur deux entraînements distincts ; espacez les essais pour vérifier que vous retenez la notion.
`endif`
`if @trainPct5 >= 80 && @trainPct5 < 100`
**Vous disposez de bons repères : confirmez-les.** Revenez uniquement sur les réponses manquées concernant les démarches, la santé, le travail et l’éducation. Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. En mises en situation, identifiez le principe civique recherché avant de comparer toutes les réponses.
`endif`
`if @trainPct5 == 100`
**Félicitations, toutes les réponses de cette thématique sont correctes !** Confirmez ces acquis avec deux entraînements difficiles, puis appliquez les démarches, la santé, le travail et l’éducation dans trois entraînements de mises en situation. Visez au moins 8/10 deux fois avant de vous tester en conditions chronométrées.
`endif`
`if @trainPct5 < 40`
#### Étape 1 — Comprendre et reformuler
Reprenez les notions de les démarches, la santé, le travail et l’éducation. Utilisez le corrigé pour retrouver la règle et un exemple ; évitez de mémoriser seulement la lettre de la réponse.
#### Étape 2 — Progresser avec les questions
Entraînez-vous sur dix questions. Visez 6/10, puis 8/10 deux fois en corrigeant vos erreurs entre les essais.
#### Étape 3 — Appliquer les principes
Réalisez au moins trois entraînements de mises en situation ; cherchez la règle civique visée et obtenez au moins 8/10 deux fois.
#### Étape 4 — Vérifier et ajuster
Lorsque ces objectifs sont atteints, passez un examen blanc. Analysez les erreurs conservées dans votre dernier résultat, puis refaites une série.
`endif`
`if @trainPct5 >= 40 && @trainPct5 < 80`
#### Étape 1 — Corriger les notions fragiles
Relisez vos erreurs sur les démarches, la santé, le travail et l’éducation. Pour chacune, expliquez pourquoi la réponse correcte convient et pourquoi votre choix ne convient pas.
#### Étape 2 — Stabiliser vos connaissances
Réalisez deux entraînements de cette thématique et visez au moins 8/10 sur chacun.
#### Étape 3 — Exercer votre raisonnement
Réalisez au moins trois entraînements de mises en situation, avec au moins 8/10 à deux reprises. Lisez toutes les propositions avant de choisir.
#### Étape 4 — Mesurer les progrès
Passez un examen blanc, analysez les erreurs, travaillez les deux priorités les plus faibles puis recommencez en conditions réelles.
`endif`
`if @trainPct5 >= 80 && @trainPct5 < 100`
#### Étape 1 — Confirmer les acquis
Réalisez deux entraînements de cette thématique et obtenez au moins 8/10 à chaque fois. Commencez par la notion qui a provoqué votre dernière erreur.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement avec au moins trois entraînements ; obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter le cours.
#### Étape 4 — Corriger et ajuster
Analysez votre dernier examen blanc et expliquez chaque erreur. Travaillez les notions concernées puis repassez un examen blanc.
`endif`
`if @trainPct5 == 100`
#### Étape 1 — Confirmer votre score
Réalisez deux entraînements de cette thématique en mode difficile et obtenez au moins 8/10 à chaque fois.
#### Étape 2 — S’exercer aux mises en situation
Développez votre raisonnement en réalisant au moins trois entraînements de mises en situation. Obtenez au moins 8/10 deux fois.
#### Étape 3 — Passer un examen blanc
Testez-vous sur 40 questions en 45 minutes, sans consulter les ressources.
#### Étape 4 — Corriger et ajuster
Analysez vos réponses et comprenez vos erreurs à l’aide du corrigé de votre dernier examen blanc. Travaillez les notions concernées, puis repassez un examen blanc pour améliorer ou confirmer votre score.
`endif`
`endif`
`if @trainTotal5 == 0`
Cette thématique ne figurait pas dans votre dernier entraînement. Réalisez un entraînement pour obtenir un plan fondé sur vos réponses.
`endif`
`if @trainExam == "CSP"`
`if @trainPct5 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T5_Q_DIF_LAUNCH)
`endif`
`if @trainPct5 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T5_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CSP_T5_MIS_LAUNCH)
`endif`
`if @trainExam == "CR"`
`if @trainPct5 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T5_Q_DIF_LAUNCH)
`endif`
`if @trainPct5 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T5_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CR_T5_MIS_LAUNCH)
`endif`
`if @trainExam == "NAT"`
`if @trainPct5 == 100`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T5_Q_DIF_LAUNCH)
`endif`
`if @trainPct5 != 100`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T5_Q_LAUNCH)
`endif`
1. [🎭 Mises en situation de cette thématique](SCR_ENT_NAT_T5_MIS_LAUNCH)
`endif`
1. [🎯 Passer un examen blanc](SCR_PREP_MENU)
1. [📊 Voir les résultats de mon dernier examen blanc @lastRetour=SCR_ENT_PLAN_MENU](SCR_LAST_EXAM_RESULT)
`endif`
1. [↩️ Revenir à mon parcours](SCR_ENT_PLAN_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_BILAN
### 📊 Mon bilan

`if !@parcoursDisponible`
Terminez un bilan pour obtenir votre parcours.
1. [🧭 Faire mon bilan](SCR_BIL_MENU)
`endif`
`if @parcoursDisponible`
**Votre dernier bilan : `@parcoursScore`/25.** Les thématiques sont classées de la plus faible à la plus forte.
`if (@parcoursT2 < @parcoursT1 || (@parcoursT2 == @parcoursT1 && 2 < 1) ? 1 : 0) + (@parcoursT3 < @parcoursT1 || (@parcoursT3 == @parcoursT1 && 3 < 1) ? 1 : 0) + (@parcoursT4 < @parcoursT1 || (@parcoursT4 == @parcoursT1 && 4 < 1) ? 1 : 0) + (@parcoursT5 < @parcoursT1 || (@parcoursT5 == @parcoursT1 && 5 < 1) ? 1 : 0) == 0`
1. [🇫🇷 Principes et valeurs de la République — `@parcoursT1`/5](SCR_PARCOURS_T1)
`endif`
`if (@parcoursT1 < @parcoursT2 || (@parcoursT1 == @parcoursT2 && 1 < 2) ? 1 : 0) + (@parcoursT3 < @parcoursT2 || (@parcoursT3 == @parcoursT2 && 3 < 2) ? 1 : 0) + (@parcoursT4 < @parcoursT2 || (@parcoursT4 == @parcoursT2 && 4 < 2) ? 1 : 0) + (@parcoursT5 < @parcoursT2 || (@parcoursT5 == @parcoursT2 && 5 < 2) ? 1 : 0) == 0`
1. [🏛️ Institutions et système politique — `@parcoursT2`/5](SCR_PARCOURS_T2)
`endif`
`if (@parcoursT1 < @parcoursT3 || (@parcoursT1 == @parcoursT3 && 1 < 3) ? 1 : 0) + (@parcoursT2 < @parcoursT3 || (@parcoursT2 == @parcoursT3 && 2 < 3) ? 1 : 0) + (@parcoursT4 < @parcoursT3 || (@parcoursT4 == @parcoursT3 && 4 < 3) ? 1 : 0) + (@parcoursT5 < @parcoursT3 || (@parcoursT5 == @parcoursT3 && 5 < 3) ? 1 : 0) == 0`
1. [⚖️ Droits et devoirs — `@parcoursT3`/5](SCR_PARCOURS_T3)
`endif`
`if (@parcoursT1 < @parcoursT4 || (@parcoursT1 == @parcoursT4 && 1 < 4) ? 1 : 0) + (@parcoursT2 < @parcoursT4 || (@parcoursT2 == @parcoursT4 && 2 < 4) ? 1 : 0) + (@parcoursT3 < @parcoursT4 || (@parcoursT3 == @parcoursT4 && 3 < 4) ? 1 : 0) + (@parcoursT5 < @parcoursT4 || (@parcoursT5 == @parcoursT4 && 5 < 4) ? 1 : 0) == 0`
1. [🗺️ Histoire, géographie et culture — `@parcoursT4`/5](SCR_PARCOURS_T4)
`endif`
`if (@parcoursT1 < @parcoursT5 || (@parcoursT1 == @parcoursT5 && 1 < 5) ? 1 : 0) + (@parcoursT2 < @parcoursT5 || (@parcoursT2 == @parcoursT5 && 2 < 5) ? 1 : 0) + (@parcoursT3 < @parcoursT5 || (@parcoursT3 == @parcoursT5 && 3 < 5) ? 1 : 0) + (@parcoursT4 < @parcoursT5 || (@parcoursT4 == @parcoursT5 && 4 < 5) ? 1 : 0) == 0`
1. [🤝 Vivre dans la société française — `@parcoursT5`/5](SCR_PARCOURS_T5)
`endif`
`if (@parcoursT2 < @parcoursT1 || (@parcoursT2 == @parcoursT1 && 2 < 1) ? 1 : 0) + (@parcoursT3 < @parcoursT1 || (@parcoursT3 == @parcoursT1 && 3 < 1) ? 1 : 0) + (@parcoursT4 < @parcoursT1 || (@parcoursT4 == @parcoursT1 && 4 < 1) ? 1 : 0) + (@parcoursT5 < @parcoursT1 || (@parcoursT5 == @parcoursT1 && 5 < 1) ? 1 : 0) == 1`
1. [🇫🇷 Principes et valeurs de la République — `@parcoursT1`/5](SCR_PARCOURS_T1)
`endif`
`if (@parcoursT1 < @parcoursT2 || (@parcoursT1 == @parcoursT2 && 1 < 2) ? 1 : 0) + (@parcoursT3 < @parcoursT2 || (@parcoursT3 == @parcoursT2 && 3 < 2) ? 1 : 0) + (@parcoursT4 < @parcoursT2 || (@parcoursT4 == @parcoursT2 && 4 < 2) ? 1 : 0) + (@parcoursT5 < @parcoursT2 || (@parcoursT5 == @parcoursT2 && 5 < 2) ? 1 : 0) == 1`
1. [🏛️ Institutions et système politique — `@parcoursT2`/5](SCR_PARCOURS_T2)
`endif`
`if (@parcoursT1 < @parcoursT3 || (@parcoursT1 == @parcoursT3 && 1 < 3) ? 1 : 0) + (@parcoursT2 < @parcoursT3 || (@parcoursT2 == @parcoursT3 && 2 < 3) ? 1 : 0) + (@parcoursT4 < @parcoursT3 || (@parcoursT4 == @parcoursT3 && 4 < 3) ? 1 : 0) + (@parcoursT5 < @parcoursT3 || (@parcoursT5 == @parcoursT3 && 5 < 3) ? 1 : 0) == 1`
1. [⚖️ Droits et devoirs — `@parcoursT3`/5](SCR_PARCOURS_T3)
`endif`
`if (@parcoursT1 < @parcoursT4 || (@parcoursT1 == @parcoursT4 && 1 < 4) ? 1 : 0) + (@parcoursT2 < @parcoursT4 || (@parcoursT2 == @parcoursT4 && 2 < 4) ? 1 : 0) + (@parcoursT3 < @parcoursT4 || (@parcoursT3 == @parcoursT4 && 3 < 4) ? 1 : 0) + (@parcoursT5 < @parcoursT4 || (@parcoursT5 == @parcoursT4 && 5 < 4) ? 1 : 0) == 1`
1. [🗺️ Histoire, géographie et culture — `@parcoursT4`/5](SCR_PARCOURS_T4)
`endif`
`if (@parcoursT1 < @parcoursT5 || (@parcoursT1 == @parcoursT5 && 1 < 5) ? 1 : 0) + (@parcoursT2 < @parcoursT5 || (@parcoursT2 == @parcoursT5 && 2 < 5) ? 1 : 0) + (@parcoursT3 < @parcoursT5 || (@parcoursT3 == @parcoursT5 && 3 < 5) ? 1 : 0) + (@parcoursT4 < @parcoursT5 || (@parcoursT4 == @parcoursT5 && 4 < 5) ? 1 : 0) == 1`
1. [🤝 Vivre dans la société française — `@parcoursT5`/5](SCR_PARCOURS_T5)
`endif`
`if (@parcoursT2 < @parcoursT1 || (@parcoursT2 == @parcoursT1 && 2 < 1) ? 1 : 0) + (@parcoursT3 < @parcoursT1 || (@parcoursT3 == @parcoursT1 && 3 < 1) ? 1 : 0) + (@parcoursT4 < @parcoursT1 || (@parcoursT4 == @parcoursT1 && 4 < 1) ? 1 : 0) + (@parcoursT5 < @parcoursT1 || (@parcoursT5 == @parcoursT1 && 5 < 1) ? 1 : 0) == 2`
1. [🇫🇷 Principes et valeurs de la République — `@parcoursT1`/5](SCR_PARCOURS_T1)
`endif`
`if (@parcoursT1 < @parcoursT2 || (@parcoursT1 == @parcoursT2 && 1 < 2) ? 1 : 0) + (@parcoursT3 < @parcoursT2 || (@parcoursT3 == @parcoursT2 && 3 < 2) ? 1 : 0) + (@parcoursT4 < @parcoursT2 || (@parcoursT4 == @parcoursT2 && 4 < 2) ? 1 : 0) + (@parcoursT5 < @parcoursT2 || (@parcoursT5 == @parcoursT2 && 5 < 2) ? 1 : 0) == 2`
1. [🏛️ Institutions et système politique — `@parcoursT2`/5](SCR_PARCOURS_T2)
`endif`
`if (@parcoursT1 < @parcoursT3 || (@parcoursT1 == @parcoursT3 && 1 < 3) ? 1 : 0) + (@parcoursT2 < @parcoursT3 || (@parcoursT2 == @parcoursT3 && 2 < 3) ? 1 : 0) + (@parcoursT4 < @parcoursT3 || (@parcoursT4 == @parcoursT3 && 4 < 3) ? 1 : 0) + (@parcoursT5 < @parcoursT3 || (@parcoursT5 == @parcoursT3 && 5 < 3) ? 1 : 0) == 2`
1. [⚖️ Droits et devoirs — `@parcoursT3`/5](SCR_PARCOURS_T3)
`endif`
`if (@parcoursT1 < @parcoursT4 || (@parcoursT1 == @parcoursT4 && 1 < 4) ? 1 : 0) + (@parcoursT2 < @parcoursT4 || (@parcoursT2 == @parcoursT4 && 2 < 4) ? 1 : 0) + (@parcoursT3 < @parcoursT4 || (@parcoursT3 == @parcoursT4 && 3 < 4) ? 1 : 0) + (@parcoursT5 < @parcoursT4 || (@parcoursT5 == @parcoursT4 && 5 < 4) ? 1 : 0) == 2`
1. [🗺️ Histoire, géographie et culture — `@parcoursT4`/5](SCR_PARCOURS_T4)
`endif`
`if (@parcoursT1 < @parcoursT5 || (@parcoursT1 == @parcoursT5 && 1 < 5) ? 1 : 0) + (@parcoursT2 < @parcoursT5 || (@parcoursT2 == @parcoursT5 && 2 < 5) ? 1 : 0) + (@parcoursT3 < @parcoursT5 || (@parcoursT3 == @parcoursT5 && 3 < 5) ? 1 : 0) + (@parcoursT4 < @parcoursT5 || (@parcoursT4 == @parcoursT5 && 4 < 5) ? 1 : 0) == 2`
1. [🤝 Vivre dans la société française — `@parcoursT5`/5](SCR_PARCOURS_T5)
`endif`
`if (@parcoursT2 < @parcoursT1 || (@parcoursT2 == @parcoursT1 && 2 < 1) ? 1 : 0) + (@parcoursT3 < @parcoursT1 || (@parcoursT3 == @parcoursT1 && 3 < 1) ? 1 : 0) + (@parcoursT4 < @parcoursT1 || (@parcoursT4 == @parcoursT1 && 4 < 1) ? 1 : 0) + (@parcoursT5 < @parcoursT1 || (@parcoursT5 == @parcoursT1 && 5 < 1) ? 1 : 0) == 3`
1. [🇫🇷 Principes et valeurs de la République — `@parcoursT1`/5](SCR_PARCOURS_T1)
`endif`
`if (@parcoursT1 < @parcoursT2 || (@parcoursT1 == @parcoursT2 && 1 < 2) ? 1 : 0) + (@parcoursT3 < @parcoursT2 || (@parcoursT3 == @parcoursT2 && 3 < 2) ? 1 : 0) + (@parcoursT4 < @parcoursT2 || (@parcoursT4 == @parcoursT2 && 4 < 2) ? 1 : 0) + (@parcoursT5 < @parcoursT2 || (@parcoursT5 == @parcoursT2 && 5 < 2) ? 1 : 0) == 3`
1. [🏛️ Institutions et système politique — `@parcoursT2`/5](SCR_PARCOURS_T2)
`endif`
`if (@parcoursT1 < @parcoursT3 || (@parcoursT1 == @parcoursT3 && 1 < 3) ? 1 : 0) + (@parcoursT2 < @parcoursT3 || (@parcoursT2 == @parcoursT3 && 2 < 3) ? 1 : 0) + (@parcoursT4 < @parcoursT3 || (@parcoursT4 == @parcoursT3 && 4 < 3) ? 1 : 0) + (@parcoursT5 < @parcoursT3 || (@parcoursT5 == @parcoursT3 && 5 < 3) ? 1 : 0) == 3`
1. [⚖️ Droits et devoirs — `@parcoursT3`/5](SCR_PARCOURS_T3)
`endif`
`if (@parcoursT1 < @parcoursT4 || (@parcoursT1 == @parcoursT4 && 1 < 4) ? 1 : 0) + (@parcoursT2 < @parcoursT4 || (@parcoursT2 == @parcoursT4 && 2 < 4) ? 1 : 0) + (@parcoursT3 < @parcoursT4 || (@parcoursT3 == @parcoursT4 && 3 < 4) ? 1 : 0) + (@parcoursT5 < @parcoursT4 || (@parcoursT5 == @parcoursT4 && 5 < 4) ? 1 : 0) == 3`
1. [🗺️ Histoire, géographie et culture — `@parcoursT4`/5](SCR_PARCOURS_T4)
`endif`
`if (@parcoursT1 < @parcoursT5 || (@parcoursT1 == @parcoursT5 && 1 < 5) ? 1 : 0) + (@parcoursT2 < @parcoursT5 || (@parcoursT2 == @parcoursT5 && 2 < 5) ? 1 : 0) + (@parcoursT3 < @parcoursT5 || (@parcoursT3 == @parcoursT5 && 3 < 5) ? 1 : 0) + (@parcoursT4 < @parcoursT5 || (@parcoursT4 == @parcoursT5 && 4 < 5) ? 1 : 0) == 3`
1. [🤝 Vivre dans la société française — `@parcoursT5`/5](SCR_PARCOURS_T5)
`endif`
`if (@parcoursT2 < @parcoursT1 || (@parcoursT2 == @parcoursT1 && 2 < 1) ? 1 : 0) + (@parcoursT3 < @parcoursT1 || (@parcoursT3 == @parcoursT1 && 3 < 1) ? 1 : 0) + (@parcoursT4 < @parcoursT1 || (@parcoursT4 == @parcoursT1 && 4 < 1) ? 1 : 0) + (@parcoursT5 < @parcoursT1 || (@parcoursT5 == @parcoursT1 && 5 < 1) ? 1 : 0) == 4`
1. [🇫🇷 Principes et valeurs de la République — `@parcoursT1`/5](SCR_PARCOURS_T1)
`endif`
`if (@parcoursT1 < @parcoursT2 || (@parcoursT1 == @parcoursT2 && 1 < 2) ? 1 : 0) + (@parcoursT3 < @parcoursT2 || (@parcoursT3 == @parcoursT2 && 3 < 2) ? 1 : 0) + (@parcoursT4 < @parcoursT2 || (@parcoursT4 == @parcoursT2 && 4 < 2) ? 1 : 0) + (@parcoursT5 < @parcoursT2 || (@parcoursT5 == @parcoursT2 && 5 < 2) ? 1 : 0) == 4`
1. [🏛️ Institutions et système politique — `@parcoursT2`/5](SCR_PARCOURS_T2)
`endif`
`if (@parcoursT1 < @parcoursT3 || (@parcoursT1 == @parcoursT3 && 1 < 3) ? 1 : 0) + (@parcoursT2 < @parcoursT3 || (@parcoursT2 == @parcoursT3 && 2 < 3) ? 1 : 0) + (@parcoursT4 < @parcoursT3 || (@parcoursT4 == @parcoursT3 && 4 < 3) ? 1 : 0) + (@parcoursT5 < @parcoursT3 || (@parcoursT5 == @parcoursT3 && 5 < 3) ? 1 : 0) == 4`
1. [⚖️ Droits et devoirs — `@parcoursT3`/5](SCR_PARCOURS_T3)
`endif`
`if (@parcoursT1 < @parcoursT4 || (@parcoursT1 == @parcoursT4 && 1 < 4) ? 1 : 0) + (@parcoursT2 < @parcoursT4 || (@parcoursT2 == @parcoursT4 && 2 < 4) ? 1 : 0) + (@parcoursT3 < @parcoursT4 || (@parcoursT3 == @parcoursT4 && 3 < 4) ? 1 : 0) + (@parcoursT5 < @parcoursT4 || (@parcoursT5 == @parcoursT4 && 5 < 4) ? 1 : 0) == 4`
1. [🗺️ Histoire, géographie et culture — `@parcoursT4`/5](SCR_PARCOURS_T4)
`endif`
`if (@parcoursT1 < @parcoursT5 || (@parcoursT1 == @parcoursT5 && 1 < 5) ? 1 : 0) + (@parcoursT2 < @parcoursT5 || (@parcoursT2 == @parcoursT5 && 2 < 5) ? 1 : 0) + (@parcoursT3 < @parcoursT5 || (@parcoursT3 == @parcoursT5 && 3 < 5) ? 1 : 0) + (@parcoursT4 < @parcoursT5 || (@parcoursT4 == @parcoursT5 && 4 < 5) ? 1 : 0) == 4`
1. [🤝 Vivre dans la société française — `@parcoursT5`/5](SCR_PARCOURS_T5)
`endif`
`endif`
1. [🏠 Menu principal](MENU_PRINCIPAL)


1. [↩️ Mon parcours personnalisé](SCR_PARCOURS_MENU)

## SCR_SAVE_MENU
### 💾 Mes résultats sauvegardés

Retrouvez vos bilans, entraînements et examens blancs, ou exportez votre parcours pour le conserver.

<a class="nova-open-saved" href="https://codeurfou-sys.github.io/chatbot_civique2/chatbot/?vue=resultats" target="_blank" rel="noopener noreferrer">💾 Ouvrir mes résultats sauvegardés</a>

1. [🧭 Retour à mon parcours](SCR_PARCOURS_MENU)
2. [🏠 Retour au menu principal](MENU_PRINCIPAL)
