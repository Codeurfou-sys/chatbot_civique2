## SCR_PARCOURS_MENU
### 🧭 Mon parcours personnalisé

Retrouvez vos résultats et les conseils pour progresser.

1. [📊 Mon bilan](SCR_PARCOURS_BILAN)
2. [📝 Mes entraînements](SCR_ENT_PLAN_MENU)
3. [🎯 Mes examens blancs @lastRetour=SCR_PARCOURS_MENU](SCR_LAST_EXAM_RESULT)
4. [📚 Mes révisions](SCR_PARCOURS_REVISIONS)
5. [🏠 Menu principal](MENU_PRINCIPAL)

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
<div class="civi-feedback" data-kind="bilan" data-theme="1"></div>
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
<div class="civi-feedback" data-kind="bilan" data-theme="2"></div>
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
<div class="civi-feedback" data-kind="bilan" data-theme="3"></div>
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
<div class="civi-feedback" data-kind="bilan" data-theme="4"></div>
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
<div class="civi-feedback" data-kind="bilan" data-theme="5"></div>
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
1. [📝 M’entraîner](SCR_ENT_MENU)
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
1. [📝 M’entraîner](SCR_ENT_MENU)
`endif`
`if @trainDisponible`
`if @trainTotal1 > 0`
**Dernier entraînement : `@trainT1`/`@trainTotal1` — `@trainPct1` %.**
<div class="civi-feedback" data-kind="entrainement" data-theme="1"></div>
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
1. [📝 M’entraîner](SCR_ENT_MENU)
`endif`
`if @trainDisponible`
`if @trainTotal2 > 0`
**Dernier entraînement : `@trainT2`/`@trainTotal2` — `@trainPct2` %.**
<div class="civi-feedback" data-kind="entrainement" data-theme="2"></div>
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
1. [📝 M’entraîner](SCR_ENT_MENU)
`endif`
`if @trainDisponible`
`if @trainTotal3 > 0`
**Dernier entraînement : `@trainT3`/`@trainTotal3` — `@trainPct3` %.**
<div class="civi-feedback" data-kind="entrainement" data-theme="3"></div>
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
1. [📝 M’entraîner](SCR_ENT_MENU)
`endif`
`if @trainDisponible`
`if @trainTotal4 > 0`
**Dernier entraînement : `@trainT4`/`@trainTotal4` — `@trainPct4` %.**
<div class="civi-feedback" data-kind="entrainement" data-theme="4"></div>
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
1. [📝 M’entraîner](SCR_ENT_MENU)
`endif`
`if @trainDisponible`
`if @trainTotal5 > 0`
**Dernier entraînement : `@trainT5`/`@trainTotal5` — `@trainPct5` %.**
<div class="civi-feedback" data-kind="entrainement" data-theme="5"></div>
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

## SCR_PARCOURS_REVISIONS
### 📚 Mes révisions

Retrouvez vos activités et vos questions de connaissances, par thématique et par chapitre.

1. [🧩 Activités de révisions](SCR_PARCOURS_REV_ACT)
2. [✍️ Questions de connaissances](SCR_PARCOURS_REV_Q)
3. [↩️ Mon parcours personnalisé](SCR_PARCOURS_MENU)
4. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_REV_ACT
### 🧩 Activités de révisions

Choisissez une thématique pour consulter vos chapitres.

1. [📚 Principes et valeurs de la République](SCR_PARCOURS_REV_ACT_T1)
2. [📚 Institutions et système politique](SCR_PARCOURS_REV_ACT_T2)
3. [📚 Droits et devoirs](SCR_PARCOURS_REV_ACT_T3)
4. [📚 Histoire, géographie et culture](SCR_PARCOURS_REV_ACT_T4)
5. [📚 Vivre dans la société française](SCR_PARCOURS_REV_ACT_T5)
6. [↩️ Mes révisions](SCR_PARCOURS_REVISIONS)
7. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_REV_ACT_T1
### 🧩 Activités de révisions — Principes et valeurs de la République

<div class="civi-revision-history" data-mode="act" data-theme="1"></div>

1. [↩️ Choisir une thématique](SCR_PARCOURS_REV_ACT)
2. [↩️ Mes révisions](SCR_PARCOURS_REVISIONS)
3. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_REV_ACT_T2
### 🧩 Activités de révisions — Institutions et système politique

<div class="civi-revision-history" data-mode="act" data-theme="2"></div>

1. [↩️ Choisir une thématique](SCR_PARCOURS_REV_ACT)
2. [↩️ Mes révisions](SCR_PARCOURS_REVISIONS)
3. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_REV_ACT_T3
### 🧩 Activités de révisions — Droits et devoirs

<div class="civi-revision-history" data-mode="act" data-theme="3"></div>

1. [↩️ Choisir une thématique](SCR_PARCOURS_REV_ACT)
2. [↩️ Mes révisions](SCR_PARCOURS_REVISIONS)
3. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_REV_ACT_T4
### 🧩 Activités de révisions — Histoire, géographie et culture

<div class="civi-revision-history" data-mode="act" data-theme="4"></div>

1. [↩️ Choisir une thématique](SCR_PARCOURS_REV_ACT)
2. [↩️ Mes révisions](SCR_PARCOURS_REVISIONS)
3. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_REV_ACT_T5
### 🧩 Activités de révisions — Vivre dans la société française

<div class="civi-revision-history" data-mode="act" data-theme="5"></div>

1. [↩️ Choisir une thématique](SCR_PARCOURS_REV_ACT)
2. [↩️ Mes révisions](SCR_PARCOURS_REVISIONS)
3. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_REV_Q
### ✍️ Questions de connaissances

Choisissez une thématique pour consulter vos chapitres.

1. [📚 Principes et valeurs de la République](SCR_PARCOURS_REV_Q_T1)
2. [📚 Institutions et système politique](SCR_PARCOURS_REV_Q_T2)
3. [📚 Droits et devoirs](SCR_PARCOURS_REV_Q_T3)
4. [📚 Histoire, géographie et culture](SCR_PARCOURS_REV_Q_T4)
5. [📚 Vivre dans la société française](SCR_PARCOURS_REV_Q_T5)
6. [↩️ Mes révisions](SCR_PARCOURS_REVISIONS)
7. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_REV_Q_T1
### ✍️ Questions de connaissances — Principes et valeurs de la République

<div class="civi-revision-history" data-mode="q" data-theme="1"></div>

1. [↩️ Choisir une thématique](SCR_PARCOURS_REV_Q)
2. [↩️ Mes révisions](SCR_PARCOURS_REVISIONS)
3. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_REV_Q_T2
### ✍️ Questions de connaissances — Institutions et système politique

<div class="civi-revision-history" data-mode="q" data-theme="2"></div>

1. [↩️ Choisir une thématique](SCR_PARCOURS_REV_Q)
2. [↩️ Mes révisions](SCR_PARCOURS_REVISIONS)
3. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_REV_Q_T3
### ✍️ Questions de connaissances — Droits et devoirs

<div class="civi-revision-history" data-mode="q" data-theme="3"></div>

1. [↩️ Choisir une thématique](SCR_PARCOURS_REV_Q)
2. [↩️ Mes révisions](SCR_PARCOURS_REVISIONS)
3. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_REV_Q_T4
### ✍️ Questions de connaissances — Histoire, géographie et culture

<div class="civi-revision-history" data-mode="q" data-theme="4"></div>

1. [↩️ Choisir une thématique](SCR_PARCOURS_REV_Q)
2. [↩️ Mes révisions](SCR_PARCOURS_REVISIONS)
3. [🏠 Menu principal](MENU_PRINCIPAL)

## SCR_PARCOURS_REV_Q_T5
### ✍️ Questions de connaissances — Vivre dans la société française

<div class="civi-revision-history" data-mode="q" data-theme="5"></div>

1. [↩️ Choisir une thématique](SCR_PARCOURS_REV_Q)
2. [↩️ Mes révisions](SCR_PARCOURS_REVISIONS)
3. [🏠 Menu principal](MENU_PRINCIPAL)
