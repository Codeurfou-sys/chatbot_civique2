## SCR_PARCOURS_MENU
### 🧭 Mon parcours personnalisé

`if !@parcoursDisponible`
Vous n’avez pas encore terminé de bilan dans cette session. Réalisez un premier bilan pour obtenir un parcours adapté à vos résultats.
1. [🧭 Faire mon bilan](SCR_BIL_MENU)
`endif`
`if @parcoursDisponible`
Votre parcours reprend votre dernier bilan terminé dans cette session. Vous pouvez le retrouver après chaque révision ou entraînement. Il sera remplacé lorsque vous terminerez un nouveau bilan.

**Score du bilan : `@parcoursScore`/25.**

`if @parcoursExam == "CSP"`
**Examen : Carte de séjour pluriannuelle.**
`endif`
`if @parcoursExam == "CR"`
**Examen : Carte de résident.**
`endif`
`if @parcoursExam == "NAT"`
**Examen : Naturalisation.**
`endif`
`if @parcoursT1 >= 0 && @parcoursT1 <= 1`
1. [📚 Principes et valeurs de la République — `@parcoursT1`/5](SCR_PARCOURS_T1)
`endif`
`if @parcoursT2 >= 0 && @parcoursT2 <= 1`
1. [📚 Institutions et système politique — `@parcoursT2`/5](SCR_PARCOURS_T2)
`endif`
`if @parcoursT3 >= 0 && @parcoursT3 <= 1`
1. [📚 Droits et devoirs — `@parcoursT3`/5](SCR_PARCOURS_T3)
`endif`
`if @parcoursT4 >= 0 && @parcoursT4 <= 1`
1. [📚 Histoire, géographie et culture — `@parcoursT4`/5](SCR_PARCOURS_T4)
`endif`
`if @parcoursT5 >= 0 && @parcoursT5 <= 1`
1. [📚 Vivre dans la société française — `@parcoursT5`/5](SCR_PARCOURS_T5)
`endif`
`if @parcoursT1 >= 2 && @parcoursT1 <= 2`
1. [📚 Principes et valeurs de la République — `@parcoursT1`/5](SCR_PARCOURS_T1)
`endif`
`if @parcoursT2 >= 2 && @parcoursT2 <= 2`
1. [📚 Institutions et système politique — `@parcoursT2`/5](SCR_PARCOURS_T2)
`endif`
`if @parcoursT3 >= 2 && @parcoursT3 <= 2`
1. [📚 Droits et devoirs — `@parcoursT3`/5](SCR_PARCOURS_T3)
`endif`
`if @parcoursT4 >= 2 && @parcoursT4 <= 2`
1. [📚 Histoire, géographie et culture — `@parcoursT4`/5](SCR_PARCOURS_T4)
`endif`
`if @parcoursT5 >= 2 && @parcoursT5 <= 2`
1. [📚 Vivre dans la société française — `@parcoursT5`/5](SCR_PARCOURS_T5)
`endif`
`if @parcoursT1 >= 3 && @parcoursT1 <= 3`
1. [📚 Principes et valeurs de la République — `@parcoursT1`/5](SCR_PARCOURS_T1)
`endif`
`if @parcoursT2 >= 3 && @parcoursT2 <= 3`
1. [📚 Institutions et système politique — `@parcoursT2`/5](SCR_PARCOURS_T2)
`endif`
`if @parcoursT3 >= 3 && @parcoursT3 <= 3`
1. [📚 Droits et devoirs — `@parcoursT3`/5](SCR_PARCOURS_T3)
`endif`
`if @parcoursT4 >= 3 && @parcoursT4 <= 3`
1. [📚 Histoire, géographie et culture — `@parcoursT4`/5](SCR_PARCOURS_T4)
`endif`
`if @parcoursT5 >= 3 && @parcoursT5 <= 3`
1. [📚 Vivre dans la société française — `@parcoursT5`/5](SCR_PARCOURS_T5)
`endif`
`if @parcoursT1 >= 4 && @parcoursT1 <= 5`
1. [📚 Principes et valeurs de la République — `@parcoursT1`/5](SCR_PARCOURS_T1)
`endif`
`if @parcoursT2 >= 4 && @parcoursT2 <= 5`
1. [📚 Institutions et système politique — `@parcoursT2`/5](SCR_PARCOURS_T2)
`endif`
`if @parcoursT3 >= 4 && @parcoursT3 <= 5`
1. [📚 Droits et devoirs — `@parcoursT3`/5](SCR_PARCOURS_T3)
`endif`
`if @parcoursT4 >= 4 && @parcoursT4 <= 5`
1. [📚 Histoire, géographie et culture — `@parcoursT4`/5](SCR_PARCOURS_T4)
`endif`
`if @parcoursT5 >= 4 && @parcoursT5 <= 5`
1. [📚 Vivre dans la société française — `@parcoursT5`/5](SCR_PARCOURS_T5)
`endif`
`endif`

Votre parcours reste disponible pendant la session en cours. Fermer ou actualiser la page peut le réinitialiser.

1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_T1
### 🧭 Principes et valeurs de la République

`if !@parcoursDisponible`
Terminez un bilan pour obtenir vos étapes personnalisées.
1. [🧭 Faire mon bilan](SCR_BIL_MENU)
`endif`
`if @parcoursDisponible`
**Votre résultat au dernier bilan : `@parcoursT1`/5.**

`if @parcoursT1 < 4`
#### Étape 1 — Réviser le cours
Relisez les libertés, l’égalité, la fraternité et la laïcité. Notez les notions difficiles et reformulez-les avec vos propres mots.
1. [📖 Réviser Principes et valeurs de la République](SCR_REV_T1_MENU)
`endif`
#### Étape 2 — Réaliser deux entraînements ciblés
Commencez par les questions, puis entraînez votre raisonnement avec les mises en situation.
`if @parcoursExam == "CSP"`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T1_Q_LAUNCH)
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CSP_T1_MIS_LAUNCH)
`endif`
`if @parcoursExam == "CR"`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T1_Q_LAUNCH)
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CR_T1_MIS_LAUNCH)
`endif`
`if @parcoursExam == "NAT"`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T1_Q_LAUNCH)
1. [🎭 Mises en situation de cette thématique](SCR_ENT_NAT_T1_MIS_LAUNCH)
`endif`
`if @parcoursT1 <= 2`
#### Étape 3 — Atteindre votre objectif
Visez d’abord 6/10, puis 8/10 à deux reprises. Entre les essais, revoyez les erreurs.
`endif`
`if @parcoursT1 == 3`
#### Étape 3 — Confirmer les progrès
Visez 8/10 à deux reprises. Comparez les corrections et reprenez les notions encore fragiles.
`endif`
`if @parcoursT1 >= 4`
#### Étape 3 — Approfondir
Essayez un entraînement complet difficile et vérifiez que vos acquis restent solides.
`if @parcoursExam == "CSP"`
1. [🔴 Entraînement complet difficile](SCR_ENT_CSP_LVL_DIF_LAUNCH)
`endif`
`if @parcoursExam == "CR"`
1. [🔴 Entraînement complet difficile](SCR_ENT_CR_LVL_DIF_LAUNCH)
`endif`
`if @parcoursExam == "NAT"`
1. [🔴 Entraînement complet difficile](SCR_ENT_NAT_LVL_DIF_LAUNCH)
`endif`
`endif`

#### Étape 4 — Mesurer votre évolution
Après avoir travaillé vos priorités, réalisez un bilan de progression.
1. [📈 Faire mon bilan de progression @mode_bilan=PROG](SCR_BIL_PROG_EXAMEN)
`endif`
1. [↩️ Revenir à mon parcours](SCR_PARCOURS_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_T2
### 🧭 Institutions et système politique

`if !@parcoursDisponible`
Terminez un bilan pour obtenir vos étapes personnalisées.
1. [🧭 Faire mon bilan](SCR_BIL_MENU)
`endif`
`if @parcoursDisponible`
**Votre résultat au dernier bilan : `@parcoursT2`/5.**

`if @parcoursT2 < 4`
#### Étape 1 — Réviser le cours
Relisez le rôle du président, du Gouvernement, du Parlement et des collectivités. Notez les notions difficiles et reformulez-les avec vos propres mots.
1. [📖 Réviser Institutions et système politique](SCR_REV_T2_MENU)
`endif`
#### Étape 2 — Réaliser deux entraînements ciblés
Commencez par les questions, puis entraînez votre raisonnement avec les mises en situation.
`if @parcoursExam == "CSP"`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T2_Q_LAUNCH)
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CSP_T2_MIS_LAUNCH)
`endif`
`if @parcoursExam == "CR"`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T2_Q_LAUNCH)
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CR_T2_MIS_LAUNCH)
`endif`
`if @parcoursExam == "NAT"`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T2_Q_LAUNCH)
1. [🎭 Mises en situation de cette thématique](SCR_ENT_NAT_T2_MIS_LAUNCH)
`endif`
`if @parcoursT2 <= 2`
#### Étape 3 — Atteindre votre objectif
Visez d’abord 6/10, puis 8/10 à deux reprises. Entre les essais, revoyez les erreurs.
`endif`
`if @parcoursT2 == 3`
#### Étape 3 — Confirmer les progrès
Visez 8/10 à deux reprises. Comparez les corrections et reprenez les notions encore fragiles.
`endif`
`if @parcoursT2 >= 4`
#### Étape 3 — Approfondir
Essayez un entraînement complet difficile et vérifiez que vos acquis restent solides.
`if @parcoursExam == "CSP"`
1. [🔴 Entraînement complet difficile](SCR_ENT_CSP_LVL_DIF_LAUNCH)
`endif`
`if @parcoursExam == "CR"`
1. [🔴 Entraînement complet difficile](SCR_ENT_CR_LVL_DIF_LAUNCH)
`endif`
`if @parcoursExam == "NAT"`
1. [🔴 Entraînement complet difficile](SCR_ENT_NAT_LVL_DIF_LAUNCH)
`endif`
`endif`

#### Étape 4 — Mesurer votre évolution
Après avoir travaillé vos priorités, réalisez un bilan de progression.
1. [📈 Faire mon bilan de progression @mode_bilan=PROG](SCR_BIL_PROG_EXAMEN)
`endif`
1. [↩️ Revenir à mon parcours](SCR_PARCOURS_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_T3
### 🧭 Droits et devoirs

`if !@parcoursDisponible`
Terminez un bilan pour obtenir vos étapes personnalisées.
1. [🧭 Faire mon bilan](SCR_BIL_MENU)
`endif`
`if @parcoursDisponible`
**Votre résultat au dernier bilan : `@parcoursT3`/5.**

`if @parcoursT3 < 4`
#### Étape 1 — Réviser le cours
Relisez les droits fondamentaux et les obligations de chacun. Notez les notions difficiles et reformulez-les avec vos propres mots.
1. [📖 Réviser Droits et devoirs](SCR_REV_T3_MENU)
`endif`
#### Étape 2 — Réaliser deux entraînements ciblés
Commencez par les questions, puis entraînez votre raisonnement avec les mises en situation.
`if @parcoursExam == "CSP"`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T3_Q_LAUNCH)
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CSP_T3_MIS_LAUNCH)
`endif`
`if @parcoursExam == "CR"`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T3_Q_LAUNCH)
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CR_T3_MIS_LAUNCH)
`endif`
`if @parcoursExam == "NAT"`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T3_Q_LAUNCH)
1. [🎭 Mises en situation de cette thématique](SCR_ENT_NAT_T3_MIS_LAUNCH)
`endif`
`if @parcoursT3 <= 2`
#### Étape 3 — Atteindre votre objectif
Visez d’abord 6/10, puis 8/10 à deux reprises. Entre les essais, revoyez les erreurs.
`endif`
`if @parcoursT3 == 3`
#### Étape 3 — Confirmer les progrès
Visez 8/10 à deux reprises. Comparez les corrections et reprenez les notions encore fragiles.
`endif`
`if @parcoursT3 >= 4`
#### Étape 3 — Approfondir
Essayez un entraînement complet difficile et vérifiez que vos acquis restent solides.
`if @parcoursExam == "CSP"`
1. [🔴 Entraînement complet difficile](SCR_ENT_CSP_LVL_DIF_LAUNCH)
`endif`
`if @parcoursExam == "CR"`
1. [🔴 Entraînement complet difficile](SCR_ENT_CR_LVL_DIF_LAUNCH)
`endif`
`if @parcoursExam == "NAT"`
1. [🔴 Entraînement complet difficile](SCR_ENT_NAT_LVL_DIF_LAUNCH)
`endif`
`endif`

#### Étape 4 — Mesurer votre évolution
Après avoir travaillé vos priorités, réalisez un bilan de progression.
1. [📈 Faire mon bilan de progression @mode_bilan=PROG](SCR_BIL_PROG_EXAMEN)
`endif`
1. [↩️ Revenir à mon parcours](SCR_PARCOURS_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_T4
### 🧭 Histoire, géographie et culture

`if !@parcoursDisponible`
Terminez un bilan pour obtenir vos étapes personnalisées.
1. [🧭 Faire mon bilan](SCR_BIL_MENU)
`endif`
`if @parcoursDisponible`
**Votre résultat au dernier bilan : `@parcoursT4`/5.**

`if @parcoursT4 < 4`
#### Étape 1 — Réviser le cours
Relisez les repères historiques, les territoires et le patrimoine. Notez les notions difficiles et reformulez-les avec vos propres mots.
1. [📖 Réviser Histoire, géographie et culture](SCR_REV_T4_MENU)
`endif`
#### Étape 2 — Réaliser deux entraînements ciblés
Commencez par les questions, puis entraînez votre raisonnement avec les mises en situation.
`if @parcoursExam == "CSP"`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T4_Q_LAUNCH)
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CSP_T4_MIS_LAUNCH)
`endif`
`if @parcoursExam == "CR"`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T4_Q_LAUNCH)
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CR_T4_MIS_LAUNCH)
`endif`
`if @parcoursExam == "NAT"`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T4_Q_LAUNCH)
1. [🎭 Mises en situation de cette thématique](SCR_ENT_NAT_T4_MIS_LAUNCH)
`endif`
`if @parcoursT4 <= 2`
#### Étape 3 — Atteindre votre objectif
Visez d’abord 6/10, puis 8/10 à deux reprises. Entre les essais, revoyez les erreurs.
`endif`
`if @parcoursT4 == 3`
#### Étape 3 — Confirmer les progrès
Visez 8/10 à deux reprises. Comparez les corrections et reprenez les notions encore fragiles.
`endif`
`if @parcoursT4 >= 4`
#### Étape 3 — Approfondir
Essayez un entraînement complet difficile et vérifiez que vos acquis restent solides.
`if @parcoursExam == "CSP"`
1. [🔴 Entraînement complet difficile](SCR_ENT_CSP_LVL_DIF_LAUNCH)
`endif`
`if @parcoursExam == "CR"`
1. [🔴 Entraînement complet difficile](SCR_ENT_CR_LVL_DIF_LAUNCH)
`endif`
`if @parcoursExam == "NAT"`
1. [🔴 Entraînement complet difficile](SCR_ENT_NAT_LVL_DIF_LAUNCH)
`endif`
`endif`

#### Étape 4 — Mesurer votre évolution
Après avoir travaillé vos priorités, réalisez un bilan de progression.
1. [📈 Faire mon bilan de progression @mode_bilan=PROG](SCR_BIL_PROG_EXAMEN)
`endif`
1. [↩️ Revenir à mon parcours](SCR_PARCOURS_MENU)
1. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_T5
### 🧭 Vivre dans la société française

`if !@parcoursDisponible`
Terminez un bilan pour obtenir vos étapes personnalisées.
1. [🧭 Faire mon bilan](SCR_BIL_MENU)
`endif`
`if @parcoursDisponible`
**Votre résultat au dernier bilan : `@parcoursT5`/5.**

`if @parcoursT5 < 4`
#### Étape 1 — Réviser le cours
Relisez les démarches, la santé, le travail et l’éducation. Notez les notions difficiles et reformulez-les avec vos propres mots.
1. [📖 Réviser Vivre dans la société française](SCR_REV_T5_MENU)
`endif`
#### Étape 2 — Réaliser deux entraînements ciblés
Commencez par les questions, puis entraînez votre raisonnement avec les mises en situation.
`if @parcoursExam == "CSP"`
1. [📘 Questions de cette thématique](SCR_ENT_CSP_T5_Q_LAUNCH)
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CSP_T5_MIS_LAUNCH)
`endif`
`if @parcoursExam == "CR"`
1. [📘 Questions de cette thématique](SCR_ENT_CR_T5_Q_LAUNCH)
1. [🎭 Mises en situation de cette thématique](SCR_ENT_CR_T5_MIS_LAUNCH)
`endif`
`if @parcoursExam == "NAT"`
1. [📘 Questions de cette thématique](SCR_ENT_NAT_T5_Q_LAUNCH)
1. [🎭 Mises en situation de cette thématique](SCR_ENT_NAT_T5_MIS_LAUNCH)
`endif`
`if @parcoursT5 <= 2`
#### Étape 3 — Atteindre votre objectif
Visez d’abord 6/10, puis 8/10 à deux reprises. Entre les essais, revoyez les erreurs.
`endif`
`if @parcoursT5 == 3`
#### Étape 3 — Confirmer les progrès
Visez 8/10 à deux reprises. Comparez les corrections et reprenez les notions encore fragiles.
`endif`
`if @parcoursT5 >= 4`
#### Étape 3 — Approfondir
Essayez un entraînement complet difficile et vérifiez que vos acquis restent solides.
`if @parcoursExam == "CSP"`
1. [🔴 Entraînement complet difficile](SCR_ENT_CSP_LVL_DIF_LAUNCH)
`endif`
`if @parcoursExam == "CR"`
1. [🔴 Entraînement complet difficile](SCR_ENT_CR_LVL_DIF_LAUNCH)
`endif`
`if @parcoursExam == "NAT"`
1. [🔴 Entraînement complet difficile](SCR_ENT_NAT_LVL_DIF_LAUNCH)
`endif`
`endif`

#### Étape 4 — Mesurer votre évolution
Après avoir travaillé vos priorités, réalisez un bilan de progression.
1. [📈 Faire mon bilan de progression @mode_bilan=PROG](SCR_BIL_PROG_EXAMEN)
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
