<!-- Module Question libre — version autonome et déterministe -->
<!-- Les réponses proviennent exclusivement du glossaire et des modules validés. -->

## SCR_QL_MENU

### Posez votre question

:::info ⌨️ Conseil de navigation
Pour faire défiler plus rapidement la réponse du chatbot, appuyez sur la touche **⏎ Entrée** de votre clavier.
:::

Je peux vous donner une explication simple et rapide sur une notion du programme, répondre aux questions fréquentes ou vous orienter vers le bon cours. Mes réponses s’appuient uniquement sur les contenus validés du chatbot.

1. [Écrire ma question](SCR_QL_RESET)
2. [Chercher une notion par thème](SCR_QL_THEMES)
3. [Voir des exemples](SCR_QL_EXAMPLES)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_RESET

`@qlQuestion = undefined`
`@qlNormalisee = undefined`
`@qlTrouvee = undefined`

1. [Saisir ma question](SCR_QL_INPUT)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_INPUT

### Que souhaitez-vous savoir ?

Écrivez une question courte, par exemple : « Peux-tu expliquer la laïcité ? », « Combien faut-il de bonnes réponses ? » ou « Comment mieux mémoriser ? ».

`@qlQuestion = @INPUT : Écrivez votre question`

`if @qlQuestion`
`@qlNormalisee = calc(@qlQuestion.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim())`
`@qlTrouvee = false`

`if !@qlTrouvee && (@qlNormalisee.includes("contrat d engagement a respecter les principes de la republique"))`
J’ai trouvé une notion correspondant à votre question : **Contrat d'engagement à respecter les principes de la République**.

1. [Afficher l’explication](SCR_QL_GLO0033)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("declaration des droits de l homme et du citoyen"))`
J’ai trouvé une notion correspondant à votre question : **Déclaration des droits de l'homme et du citoyen**.

1. [Afficher l’explication](SCR_QL_GLO0038)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("journees europeennes du patrimoine"))`
J’ai trouvé une notion correspondant à votre question : **Journées européennes du patrimoine**.

1. [Afficher l’explication](SCR_QL_GLO0076)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("assistance a personne en danger"))`
J’ai trouvé une notion correspondant à votre question : **Assistance à personne en danger**.

1. [Afficher l’explication](SCR_QL_GLO0005)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("mutilations sexuelles feminines"))`
J’ai trouvé une notion correspondant à votre question : **Mutilations sexuelles féminines**.

1. [Afficher l’explication](SCR_QL_GLO0096)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("conseil de l union europeenne"))`
J’ai trouvé une notion correspondant à votre question : **Conseil de l'Union européenne**.

1. [Afficher l’explication](SCR_QL_GLO0026)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("president de la republique"))`
J’ai trouvé une notion correspondant à votre question : **Président de la République**.

1. [Afficher l’explication](SCR_QL_GLO0109)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("provence alpes cote d azur"))`
J’ai trouvé une notion correspondant à votre question : **Provence-Alpes-Côte d'Azur**.

1. [Afficher l’explication](SCR_QL_GLO0114)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("charte de l environnement"))`
J’ai trouvé une notion correspondant à votre question : **Charte de l'environnement**.

1. [Afficher l’explication](SCR_QL_GLO0016)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("integrite de la personne"))`
J’ai trouvé une notion correspondant à votre question : **Intégrité de la personne**.

1. [Afficher l’explication](SCR_QL_GLO0075)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("premiere guerre mondiale"))`
J’ai trouvé une notion correspondant à votre question : **Première Guerre mondiale**.

1. [Afficher l’explication](SCR_QL_GLO0108)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("traite des etres humains"))`
J’ai trouvé une notion correspondant à votre question : **Traite des êtres humains**.

1. [Afficher l’explication](SCR_QL_GLO0131)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("conseil constitutionnel"))`
J’ai trouvé une notion correspondant à votre question : **Conseil constitutionnel**.

1. [Afficher l’explication](SCR_QL_GLO0025)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("devise de la republique"))`
J’ai trouvé une notion correspondant à votre question : **Devise de la République**.

1. [Afficher l’explication](SCR_QL_GLO0044)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("langue de la republique"))`
J’ai trouvé une notion correspondant à votre question : **Langue de la République**.

1. [Afficher l’explication](SCR_QL_GLO0081)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("presomption d innocence"))`
J’ai trouvé une notion correspondant à votre question : **Présomption d'innocence**.

1. [Afficher l’explication](SCR_QL_GLO0110)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("seconde guerre mondiale"))`
J’ai trouvé une notion correspondant à votre question : **Seconde Guerre mondiale**.

1. [Afficher l’explication](SCR_QL_GLO0121)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("souverainete nationale"))`
J’ai trouvé une notion correspondant à votre question : **Souveraineté nationale**.

1. [Afficher l’explication](SCR_QL_GLO0126)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("chateau de versailles"))`
J’ai trouvé une notion correspondant à votre question : **Château de Versailles**.

1. [Afficher l’explication](SCR_QL_GLO0017)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("commission europeenne"))`
J’ai trouvé une notion correspondant à votre question : **Commission européenne**.

1. [Afficher l’explication](SCR_QL_GLO0023)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("conseil departemental"))`
J’ai trouvé une notion correspondant à votre question : **Conseil départemental**.

1. [Afficher l’explication](SCR_QL_GLO0027)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("france metropolitaine"))`
J’ai trouvé une notion correspondant à votre question : **France métropolitaine**.

1. [Afficher l’explication](SCR_QL_GLO0058)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("gastronomie francaise"))`
J’ai trouvé une notion correspondant à votre question : **Gastronomie française**.

1. [Afficher l’explication](SCR_QL_GLO0063)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("liberte de conscience"))`
J’ai trouvé une notion correspondant à votre question : **Liberté de conscience**.

1. [Afficher l’explication](SCR_QL_GLO0083)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("cinquieme republique"))`
J’ai trouvé une notion correspondant à votre question : **Cinquième République**.

1. [Afficher l’explication](SCR_QL_GLO0018)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("harcelement scolaire"))`
J’ai trouvé une notion correspondant à votre question : **Harcèlement scolaire**.

1. [Afficher l’explication](SCR_QL_GLO0070)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("revolution francaise"))`
J’ai trouvé une notion correspondant à votre question : **Révolution française**.

1. [Afficher l’explication](SCR_QL_GLO0119)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("assemblee nationale"))`
J’ai trouvé une notion correspondant à votre question : **Assemblée nationale**.

1. [Afficher l’explication](SCR_QL_GLO0004)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("droits fondamentaux"))`
J’ai trouvé une notion correspondant à votre question : **Droits fondamentaux**.

1. [Afficher l’explication](SCR_QL_GLO0047)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("contrat de travail"))`
J’ai trouvé une notion correspondant à votre question : **Contrat de travail**.

1. [Afficher l’explication](SCR_QL_GLO0034)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("fete de la musique"))`
J’ai trouvé une notion correspondant à votre question : **Fête de la Musique**.

1. [Afficher l’explication](SCR_QL_GLO0056)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("parlement europeen"))`
J’ai trouvé une notion correspondant à votre question : **Parlement européen**.

1. [Afficher l’explication](SCR_QL_GLO0102)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("suffrage universel"))`
J’ai trouvé une notion correspondant à votre question : **Suffrage universel**.

1. [Afficher l’explication](SCR_QL_GLO0127)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("assurance maladie"))`
J’ai trouvé une notion correspondant à votre question : **Assurance maladie**.

1. [Afficher l’explication](SCR_QL_GLO0006)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("carte de resident"))`
J’ai trouvé une notion correspondant à votre question : **Carte de résident**.

1. [Afficher l’explication](SCR_QL_GLO0010)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("conseil municipal"))`
J’ai trouvé une notion correspondant à votre question : **Conseil municipal**.

1. [Afficher l’explication](SCR_QL_GLO0029)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("mont saint michel"))`
J’ai trouvé une notion correspondant à votre question : **Mont-Saint-Michel**.

1. [Afficher l’explication](SCR_QL_GLO0094)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("conseil europeen"))`
J’ai trouvé une notion correspondant à votre question : **Conseil européen**.

1. [Afficher l’explication](SCR_QL_GLO0028)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("conseil regional"))`
J’ai trouvé une notion correspondant à votre question : **Conseil régional**.

1. [Afficher l’explication](SCR_QL_GLO0030)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("drapeau francais"))`
J’ai trouvé une notion correspondant à votre question : **Drapeau français**.

1. [Afficher l’explication](SCR_QL_GLO0046)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("medecin traitant"))`
J’ai trouvé une notion correspondant à votre question : **Médecin traitant**.

1. [Afficher l’explication](SCR_QL_GLO0092)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("premier ministre"))`
J’ai trouvé une notion correspondant à votre question : **Premier ministre**.

1. [Afficher l’explication](SCR_QL_GLO0107)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("union europeenne"))`
J’ai trouvé une notion correspondant à votre question : **Union européenne**.

1. [Afficher l’explication](SCR_QL_GLO0133)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("depute europeen"))`
J’ai trouvé une notion correspondant à votre question : **Député européen**.

1. [Afficher l’explication](SCR_QL_GLO0043)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("dignite humaine"))`
J’ai trouvé une notion correspondant à votre question : **Dignité humaine**.

1. [Afficher l’explication](SCR_QL_GLO0045)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("espace schengen"))`
J’ai trouvé une notion correspondant à votre question : **Espace Schengen**.

1. [Afficher l’explication](SCR_QL_GLO0053)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("france services"))`
J’ai trouvé une notion correspondant à votre question : **France Services**.

1. [Afficher l’explication](SCR_QL_GLO0059)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("la marseillaise"))`
J’ai trouvé une notion correspondant à votre question : **La Marseillaise**.

1. [Afficher l’explication](SCR_QL_GLO0078)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("musee du louvre"))`
J’ai trouvé une notion correspondant à votre question : **Musée du Louvre**.

1. [Afficher l’explication](SCR_QL_GLO0095)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("titre de sejour"))`
J’ai trouvé une notion correspondant à votre question : **Titre de séjour**.

1. [Afficher l’explication](SCR_QL_GLO0129)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("fete nationale"))`
J’ai trouvé une notion correspondant à votre question : **Fête nationale**.

1. [Afficher l’explication](SCR_QL_GLO0057)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("france travail"))`
J’ai trouvé une notion correspondant à votre question : **France Travail**.

1. [Afficher l’explication](SCR_QL_GLO0060)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("naturalisation"))`
J’ai trouvé une notion correspondant à votre question : **Naturalisation**.

1. [Afficher l’explication](SCR_QL_GLO0097)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("service public"))`
J’ai trouvé une notion correspondant à votre question : **Service public**.

1. [Afficher l’explication](SCR_QL_GLO0125)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("contravention"))`
J’ai trouvé une notion correspondant à votre question : **Contravention**.

1. [Afficher l’explication](SCR_QL_GLO0035)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("environnement"))`
J’ai trouvé une notion correspondant à votre question : **Environnement**.

1. [Afficher l’explication](SCR_QL_GLO0052)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("ile de france"))`
J’ai trouvé une notion correspondant à votre question : **Île-de-France**.

1. [Afficher l’explication](SCR_QL_GLO0072)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("vercingetorix"))`
J’ai trouvé une notion correspondant à votre question : **Vercingétorix**.

1. [Afficher l’explication](SCR_QL_GLO0135)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("carte vitale"))`
J’ai trouvé une notion correspondant à votre question : **Carte Vitale**.

1. [Afficher l’explication](SCR_QL_GLO0011)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("consentement"))`
J’ai trouvé une notion correspondant à votre question : **Consentement**.

1. [Afficher l’explication](SCR_QL_GLO0031)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("constitution"))`
J’ai trouvé une notion correspondant à votre question : **Constitution**.

1. [Afficher l’explication](SCR_QL_GLO0032)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("francophonie"))`
J’ai trouvé une notion correspondant à votre question : **Francophonie**.

1. [Afficher l’explication](SCR_QL_GLO0061)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("gouvernement"))`
J’ai trouvé une notion correspondant à votre question : **Gouvernement**.

1. [Afficher l’explication](SCR_QL_GLO0066)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("ordre public"))`
J’ai trouvé une notion correspondant à votre question : **Ordre public**.

1. [Afficher l’explication](SCR_QL_GLO0099)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("proprietaire"))`
J’ai trouvé une notion correspondant à votre question : **Propriétaire**.

1. [Afficher l’explication](SCR_QL_GLO0112)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("prostitution"))`
J’ai trouvé une notion correspondant à votre question : **Prostitution**.

1. [Afficher l’explication](SCR_QL_GLO0113)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("charlemagne"))`
J’ai trouvé une notion correspondant à votre question : **Charlemagne**.

1. [Afficher l’explication](SCR_QL_GLO0015)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("citoyennete"))`
J’ai trouvé une notion correspondant à votre question : **Citoyenneté**.

1. [Afficher l’explication](SCR_QL_GLO0020)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("departement"))`
J’ai trouvé une notion correspondant à votre question : **Département**.

1. [Afficher l’explication](SCR_QL_GLO0041)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("gendarmerie"))`
J’ai trouvé une notion correspondant à votre question : **Gendarmerie**.

1. [Afficher l’explication](SCR_QL_GLO0065)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("harcelement"))`
J’ai trouvé une notion correspondant à votre question : **Harcèlement**.

1. [Afficher l’explication](SCR_QL_GLO0069)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("procuration"))`
J’ai trouvé une notion correspondant à votre question : **Procuration**.

1. [Afficher l’explication](SCR_QL_GLO0111)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("tour eiffel"))`
J’ai trouvé une notion correspondant à votre question : **Tour Eiffel**.

1. [Afficher l’explication](SCR_QL_GLO0130)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("abstention"))`
J’ai trouvé une notion correspondant à votre question : **Abstention**.

1. [Afficher l’explication](SCR_QL_GLO0001)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("democratie"))`
J’ai trouvé une notion correspondant à votre question : **Démocratie**.

1. [Afficher l’explication](SCR_QL_GLO0040)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("fraternite"))`
J’ai trouvé une notion correspondant à votre question : **Fraternité**.

1. [Afficher l’explication](SCR_QL_GLO0062)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("guadeloupe"))`
J’ai trouvé une notion correspondant à votre question : **Guadeloupe**.

1. [Afficher l’explication](SCR_QL_GLO0067)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("infraction"))`
J’ai trouvé une notion correspondant à votre question : **Infraction**.

1. [Afficher l’explication](SCR_QL_GLO0074)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("la reunion"))`
J’ai trouvé une notion correspondant à votre question : **La Réunion**.

1. [Afficher l’explication](SCR_QL_GLO0079)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("martinique"))`
J’ai trouvé une notion correspondant à votre question : **Martinique**.

1. [Afficher l’explication](SCR_QL_GLO0090)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("neutralite"))`
J’ai trouvé une notion correspondant à votre question : **Neutralité**.

1. [Afficher l’explication](SCR_QL_GLO0098)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("patrimoine"))`
J’ai trouvé une notion correspondant à votre question : **Patrimoine**.

1. [Afficher l’explication](SCR_QL_GLO0103)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("prefecture"))`
J’ai trouvé une notion correspondant à votre question : **Préfecture**.

1. [Afficher l’explication](SCR_QL_GLO0105)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("referendum"))`
J’ai trouvé une notion correspondant à votre question : **Référendum**.

1. [Afficher l’explication](SCR_QL_GLO0116)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("republique"))`
J’ai trouvé une notion correspondant à votre question : **République**.

1. [Afficher l’explication](SCR_QL_GLO0118)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("employeur"))`
J’ai trouvé une notion correspondant à votre question : **Employeur**.

1. [Afficher l’explication](SCR_QL_GLO0051)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("locataire"))`
J’ai trouvé une notion correspondant à votre question : **Locataire**.

1. [Afficher l’explication](SCR_QL_GLO0084)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("outre mer"))`
J’ai trouvé une notion correspondant à votre question : **Outre-mer**.

1. [Afficher l’explication](SCR_QL_GLO0100)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("parlement"))`
J’ai trouvé une notion correspondant à votre question : **Parlement**.

1. [Afficher l’explication](SCR_QL_GLO0101)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("bretagne"))`
J’ai trouvé une notion correspondant à votre question : **Bretagne**.

1. [Afficher l’explication](SCR_QL_GLO0008)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("election"))`
J’ai trouvé une notion correspondant à votre question : **Élection**.

1. [Afficher l’explication](SCR_QL_GLO0050)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("marianne"))`
J’ai trouvé une notion correspondant à votre question : **Marianne**.

1. [Afficher l’explication](SCR_QL_GLO0089)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("ministre"))`
J’ai trouvé une notion correspondant à votre question : **Ministre**.

1. [Afficher l’explication](SCR_QL_GLO0093)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("pyrenees"))`
J’ai trouvé une notion correspondant à votre question : **Pyrénées**.

1. [Afficher l’explication](SCR_QL_GLO0115)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("senateur"))`
J’ai trouvé une notion correspondant à votre question : **Sénateur**.

1. [Afficher l’explication](SCR_QL_GLO0124)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("urgences"))`
J’ai trouvé une notion correspondant à votre question : **Urgences**.

1. [Afficher l’explication](SCR_QL_GLO0134)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("violence"))`
J’ai trouvé une notion correspondant à votre question : **Violence**.

1. [Afficher l’explication](SCR_QL_GLO0136)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("citoyen"))`
J’ai trouvé une notion correspondant à votre question : **Citoyen**.

1. [Afficher l’explication](SCR_QL_GLO0019)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("college"))`
J’ai trouvé une notion correspondant à votre question : **Collège**.

1. [Afficher l’explication](SCR_QL_GLO0022)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("commune"))`
J’ai trouvé une notion correspondant à votre question : **Commune**.

1. [Afficher l’explication](SCR_QL_GLO0024)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("egalite"))`
J’ai trouvé une notion correspondant à votre question : **Égalité**.

1. [Afficher l’explication](SCR_QL_GLO0049)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("hopital"))`
J’ai trouvé une notion correspondant à votre question : **Hôpital**.

1. [Afficher l’explication](SCR_QL_GLO0071)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("justice"))`
J’ai trouvé une notion correspondant à votre question : **Justice**.

1. [Afficher l’explication](SCR_QL_GLO0077)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("laicite"))`
La **laïcité** signifie que l’État reste neutre envers les religions. Chacun est libre de croire, de ne pas croire ou de changer de religion, dans le respect de la loi. La laïcité n’interdit donc pas les religions : elle protège la liberté de conscience.

1. [Voir la fiche mémo sur la laïcité](SCR_QL_GLO0080)
2. [Approfondir dans le cours](SCR_REV_T1_MENU)
3. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("liberte"))`
J’ai trouvé une notion correspondant à votre question : **Liberté**.

1. [Afficher l’explication](SCR_QL_GLO0082)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("mayotte"))`
J’ai trouvé une notion correspondant à votre question : **Mayotte**.

1. [Afficher l’explication](SCR_QL_GLO0091)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("salaire"))`
J’ai trouvé une notion correspondant à votre question : **Salaire**.

1. [Afficher l’explication](SCR_QL_GLO0120)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("celtes"))`
J’ai trouvé une notion correspondant à votre question : **Celtes**.

1. [Afficher l’explication](SCR_QL_GLO0014)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("clovis"))`
J’ai trouvé une notion correspondant à votre question : **Clovis**.

1. [Afficher l’explication](SCR_QL_GLO0021)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("depute"))`
J’ai trouvé une notion correspondant à votre question : **Député**.

1. [Afficher l’explication](SCR_QL_GLO0042)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("guyane"))`
J’ai trouvé une notion correspondant à votre question : **Guyane**.

1. [Afficher l’explication](SCR_QL_GLO0068)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("mairie"))`
J’ai trouvé une notion correspondant à votre question : **Mairie**.

1. [Afficher l’explication](SCR_QL_GLO0088)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("police"))`
J’ai trouvé une notion correspondant à votre question : **Police**.

1. [Afficher l’explication](SCR_QL_GLO0104)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("prefet"))`
J’ai trouvé une notion correspondant à votre question : **Préfet**.

1. [Afficher l’explication](SCR_QL_GLO0106)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("region"))`
J’ai trouvé une notion correspondant à votre question : **Région**.

1. [Afficher l’explication](SCR_QL_GLO0117)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("surete"))`
J’ai trouvé une notion correspondant à votre question : **Sûreté**.

1. [Afficher l’explication](SCR_QL_GLO0128)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("unesco"))`
J’ai trouvé une notion correspondant à votre question : **UNESCO**.

1. [Afficher l’explication](SCR_QL_GLO0132)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("alpes"))`
J’ai trouvé une notion correspondant à votre question : **Alpes**.

1. [Afficher l’explication](SCR_QL_GLO0002)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("crime"))`
J’ai trouvé une notion correspondant à votre question : **Crime**.

1. [Afficher l’explication](SCR_QL_GLO0037)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("delit"))`
J’ai trouvé une notion correspondant à votre question : **Délit**.

1. [Afficher l’explication](SCR_QL_GLO0039)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("ecole"))`
J’ai trouvé une notion correspondant à votre question : **École**.

1. [Afficher l’explication](SCR_QL_GLO0048)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("gaule"))`
J’ai trouvé une notion correspondant à votre question : **Gaule**.

1. [Afficher l’explication](SCR_QL_GLO0064)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("impot"))`
J’ai trouvé une notion correspondant à votre question : **Impôt**.

1. [Afficher l’explication](SCR_QL_GLO0073)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("lycee"))`
J’ai trouvé une notion correspondant à votre question : **Lycée**.

1. [Afficher l’explication](SCR_QL_GLO0086)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("maire"))`
J’ai trouvé une notion correspondant à votre question : **Maire**.

1. [Afficher l’explication](SCR_QL_GLO0087)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("seine"))`
J’ai trouvé une notion correspondant à votre question : **Seine**.

1. [Afficher l’explication](SCR_QL_GLO0122)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("senat"))`
J’ai trouvé une notion correspondant à votre question : **Sénat**.

1. [Afficher l’explication](SCR_QL_GLO0123)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("bail"))`
J’ai trouvé une notion correspondant à votre question : **Bail**.

1. [Afficher l’explication](SCR_QL_GLO0007)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("cpam"))`
J’ai trouvé une notion correspondant à votre question : **CPAM**.

1. [Afficher l’explication](SCR_QL_GLO0036)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("etat"))`
J’ai trouvé une notion correspondant à votre question : **État**.

1. [Afficher l’explication](SCR_QL_GLO0054)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("euro"))`
J’ai trouvé une notion correspondant à votre question : **Euro**.

1. [Afficher l’explication](SCR_QL_GLO0055)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("vote"))`
J’ai trouvé une notion correspondant à votre question : **Vote**.

1. [Afficher l’explication](SCR_QL_GLO0137)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("apl"))`
J’ai trouvé une notion correspondant à votre question : **APL**.

1. [Afficher l’explication](SCR_QL_GLO0003)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("caf"))`
J’ai trouvé une notion correspondant à votre question : **CAF**.

1. [Afficher l’explication](SCR_QL_GLO0009)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("cdd"))`
J’ai trouvé une notion correspondant à votre question : **CDD**.

1. [Afficher l’explication](SCR_QL_GLO0012)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("cdi"))`
J’ai trouvé une notion correspondant à votre question : **CDI**.

1. [Afficher l’explication](SCR_QL_GLO0013)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("loi"))`
J’ai trouvé une notion correspondant à votre question : **Loi**.

1. [Afficher l’explication](SCR_QL_GLO0085)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("valeurs de la republique"))`
J’ai trouvé une notion correspondant à votre question : **Contrat d'engagement à respecter les principes de la République**.

1. [Afficher l’explication](SCR_QL_GLO0033)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("secours"))`
J’ai trouvé une notion correspondant à votre question : **Assistance à personne en danger**.

1. [Afficher l’explication](SCR_QL_GLO0005)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("marseille") || @qlNormalisee.includes("nice"))`
J’ai trouvé une notion correspondant à votre question : **Provence-Alpes-Côte d'Azur**.

1. [Afficher l’explication](SCR_QL_GLO0114)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("esclavage"))`
J’ai trouvé une notion correspondant à votre question : **Traite des êtres humains**.

1. [Afficher l’explication](SCR_QL_GLO0131)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("resistance"))`
J’ai trouvé une notion correspondant à votre question : **Seconde Guerre mondiale**.

1. [Afficher l’explication](SCR_QL_GLO0121)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("louis xiv"))`
J’ai trouvé une notion correspondant à votre question : **Château de Versailles**.

1. [Afficher l’explication](SCR_QL_GLO0017)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("culture"))`
J’ai trouvé une notion correspondant à votre question : **Fête de la Musique**.

1. [Afficher l’explication](SCR_QL_GLO0056)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("services publics"))`
J’ai trouvé une notion correspondant à votre question : **France Services**.

1. [Afficher l’explication](SCR_QL_GLO0059)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("paris"))`
J’ai trouvé une notion correspondant à votre question : **Musée du Louvre**.

1. [Afficher l’explication](SCR_QL_GLO0095)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("formation") || @qlNormalisee.includes("emploi"))`
J’ai trouvé une notion correspondant à votre question : **France Travail**.

1. [Afficher l’explication](SCR_QL_GLO0060)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("nationalite francaise"))`
J’ai trouvé une notion correspondant à votre question : **Naturalisation**.

1. [Afficher l’explication](SCR_QL_GLO0097)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("paris"))`
J’ai trouvé une notion correspondant à votre question : **Île-de-France**.

1. [Afficher l’explication](SCR_QL_GLO0072)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("jules cesar"))`
J’ai trouvé une notion correspondant à votre question : **Vercingétorix**.

1. [Afficher l’explication](SCR_QL_GLO0135)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("violence sexuelle"))`
J’ai trouvé une notion correspondant à votre question : **Consentement**.

1. [Afficher l’explication](SCR_QL_GLO0031)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("langue francaise"))`
J’ai trouvé une notion correspondant à votre question : **Francophonie**.

1. [Afficher l’explication](SCR_QL_GLO0061)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("moyen age"))`
J’ai trouvé une notion correspondant à votre question : **Charlemagne**.

1. [Afficher l’explication](SCR_QL_GLO0015)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("nationalite"))`
J’ai trouvé une notion correspondant à votre question : **Citoyenneté**.

1. [Afficher l’explication](SCR_QL_GLO0020)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("paris"))`
J’ai trouvé une notion correspondant à votre question : **Tour Eiffel**.

1. [Afficher l’explication](SCR_QL_GLO0130)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("solidarite"))`
J’ai trouvé une notion correspondant à votre question : **Fraternité**.

1. [Afficher l’explication](SCR_QL_GLO0062)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("salarie"))`
J’ai trouvé une notion correspondant à votre question : **Employeur**.

1. [Afficher l’explication](SCR_QL_GLO0051)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("rennes"))`
J’ai trouvé une notion correspondant à votre question : **Bretagne**.

1. [Afficher l’explication](SCR_QL_GLO0008)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("samu"))`
J’ai trouvé une notion correspondant à votre question : **Urgences**.

1. [Afficher l’explication](SCR_QL_GLO0134)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("droit de vote") || @qlNormalisee.includes("nationalite"))`
J’ai trouvé une notion correspondant à votre question : **Citoyen**.

1. [Afficher l’explication](SCR_QL_GLO0019)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("discrimination"))`
J’ai trouvé une notion correspondant à votre question : **Égalité**.

1. [Afficher l’explication](SCR_QL_GLO0049)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("tribunal"))`
J’ai trouvé une notion correspondant à votre question : **Justice**.

1. [Afficher l’explication](SCR_QL_GLO0077)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("liberte d expression"))`
J’ai trouvé une notion correspondant à votre question : **Liberté**.

1. [Afficher l’explication](SCR_QL_GLO0082)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("jules cesar"))`
J’ai trouvé une notion correspondant à votre question : **Gaule**.

1. [Afficher l’explication](SCR_QL_GLO0064)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("services publics"))`
J’ai trouvé une notion correspondant à votre question : **Impôt**.

1. [Afficher l’explication](SCR_QL_GLO0073)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("baccalaureat"))`
J’ai trouvé une notion correspondant à votre question : **Lycée**.

1. [Afficher l’explication](SCR_QL_GLO0086)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("loire"))`
La **Loire** est le plus long fleuve qui coule entièrement en France. Elle traverse notamment Orléans, Tours et Nantes avant de se jeter dans l’océan Atlantique.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("rhone"))`
Le **Rhône** prend sa source en Suisse, traverse notamment Lyon et se jette dans la mer Méditerranée.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("logement"))`
J’ai trouvé une notion correspondant à votre question : **Bail**.

1. [Afficher l’explication](SCR_QL_GLO0007)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("prix") || @qlNormalisee.includes("cout") || @qlNormalisee.includes("tarif") || @qlNormalisee.includes("payer"))`
Votre demande concerne **le prix de l’examen**.

1. [Ouvrir la rubrique adaptée](SCR_FAQ_019)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("combien de questions") || @qlNormalisee.includes("duree examen") || @qlNormalisee.includes("format examen") || @qlNormalisee.includes("40 questions"))`
Votre demande concerne **le format de l’examen**.

1. [Ouvrir la rubrique adaptée](SCR_FAQ_004)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("score") || @qlNormalisee.includes("bonnes reponses") || @qlNormalisee.includes("32 sur 40") || @qlNormalisee.includes("80 pour cent") || @qlNormalisee.includes("reussir examen"))`
Votre demande concerne **le score nécessaire pour réussir**.

1. [Ouvrir la rubrique adaptée](SCR_FAQ_009)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("echec") || @qlNormalisee.includes("echoue") || @qlNormalisee.includes("rate examen") || @qlNormalisee.includes("repasser examen"))`
Votre demande concerne **ce qu’il faut faire après un échec**.

1. [Ouvrir la rubrique adaptée](SCR_FAQ_026)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("inscription") || @qlNormalisee.includes("m inscrire") || @qlNormalisee.includes("formulaire examen"))`
Votre demande concerne **l’inscription et les prochaines sessions**.

1. [Ouvrir la rubrique adaptée](SCR_PASS_MENU)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("m entrainer") || @qlNormalisee.includes("entrainement") || @qlNormalisee.includes("quiz") || @qlNormalisee.includes("qcm"))`
Votre demande concerne **les entraînements**.

1. [Ouvrir la rubrique adaptée](SCR_ENT_MENU)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("examen blanc") || @qlNormalisee.includes("simulation examen"))`
Votre demande concerne **les examens blancs**.

1. [Ouvrir la rubrique adaptée](SCR_PREP_MENU)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("memoriser") || @qlNormalisee.includes("retenir") || @qlNormalisee.includes("j oublie") || @qlNormalisee.includes("memoire"))`
Votre demande concerne **les méthodes de mémorisation**.

1. [Ouvrir la rubrique adaptée](SCR_CONS_MEMOIRE_MENU)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("stress") || @qlNormalisee.includes("angoisse") || @qlNormalisee.includes("peur examen") || @qlNormalisee.includes("inquiet"))`
Votre demande concerne **la gestion du stress**.

1. [Ouvrir la rubrique adaptée](SCR_CONS_ENTRETIEN_MENU)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("bilan") || @qlNormalisee.includes("progression") || @qlNormalisee.includes("suis je pret") || @qlNormalisee.includes("points faibles"))`
Votre demande concerne **le bilan de progression**.

1. [Ouvrir la rubrique adaptée](SCR_BIL_MENU)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee && (@qlNormalisee.includes("reviser") || @qlNormalisee.includes("revision") || @qlNormalisee.includes("cours"))`
Votre demande concerne **les cours de révision**.

1. [Ouvrir la rubrique adaptée](SCR_REV_MENU)
2. [Poser une autre question](SCR_QL_RESET)
`@qlTrouvee = true`
`endif`

`if !@qlTrouvee`
### Je n’ai pas trouvé de réponse précise

Essayez une phrase plus courte en indiquant le mot principal, ou choisissez une recherche guidée.

1. [Reformuler ma question](SCR_QL_RESET)
2. [Chercher une notion par thème](SCR_QL_THEMES)
3. [Consulter la FAQ](SCR_FAQ_MENU)
4. [Voir les cours](SCR_REV_MENU)
5. [Retour au menu principal](MENU_PRINCIPAL)
`endif`
`endif`

`if !@qlQuestion`
Vous pouvez écrire votre question dans la barre de saisie ci-dessus.
`endif`

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_EXAMPLES

### Exemples de demandes reconnues

- « Que signifie laïcité ? »
- « Explique-moi le rôle du Parlement. »
- « Combien faut-il de bonnes réponses ? »
- « Comment mieux mémoriser les dates ? »
- « Où puis-je m’inscrire à l’examen ? »

1. [Poser ma question](SCR_QL_RESET)
2. [Retour au module](SCR_QL_MENU)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_THEMES

### Chercher une notion par thème

1. [Principes et valeurs de la République](SCR_QL_THEME_T1)
2. [Institutions et système politique](SCR_QL_THEME_T2)
3. [Droits et devoirs](SCR_QL_THEME_T3)
4. [Histoire, géographie et culture](SCR_QL_THEME_T4)
5. [Vivre dans la société française](SCR_QL_THEME_T5)
6. [Retour au module](SCR_QL_MENU)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_THEME_T1

### Principes et valeurs de la République

1. [Citoyen](SCR_QL_GLO0019)
2. [Constitution](SCR_QL_GLO0032)
3. [Contrat d'engagement à respecter les principes de la République](SCR_QL_GLO0033)
4. [Démocratie](SCR_QL_GLO0040)
5. [Devise de la République](SCR_QL_GLO0044)
6. [Drapeau français](SCR_QL_GLO0046)
7. [Égalité](SCR_QL_GLO0049)
8. [Fête nationale](SCR_QL_GLO0057)
9. [Fraternité](SCR_QL_GLO0062)
10. [La Marseillaise](SCR_QL_GLO0078)
11. [Laïcité](SCR_QL_GLO0080)
12. [Langue de la République](SCR_QL_GLO0081)
13. [Liberté](SCR_QL_GLO0082)
14. [Liberté de conscience](SCR_QL_GLO0083)
15. [Marianne](SCR_QL_GLO0089)
16. [Neutralité](SCR_QL_GLO0098)
17. [République](SCR_QL_GLO0118)
18. [Souveraineté nationale](SCR_QL_GLO0126)
19. [Choisir un autre thème](SCR_QL_THEMES)
20. [Poser une question](SCR_QL_RESET)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_THEME_T2

### Institutions et système politique

1. [Abstention](SCR_QL_GLO0001)
2. [Assemblée nationale](SCR_QL_GLO0004)
3. [Commission européenne](SCR_QL_GLO0023)
4. [Commune](SCR_QL_GLO0024)
5. [Conseil constitutionnel](SCR_QL_GLO0025)
6. [Conseil de l'Union européenne](SCR_QL_GLO0026)
7. [Conseil départemental](SCR_QL_GLO0027)
8. [Conseil européen](SCR_QL_GLO0028)
9. [Conseil municipal](SCR_QL_GLO0029)
10. [Conseil régional](SCR_QL_GLO0030)
11. [Département](SCR_QL_GLO0041)
12. [Député](SCR_QL_GLO0042)
13. [Député européen](SCR_QL_GLO0043)
14. [Élection](SCR_QL_GLO0050)
15. [Espace Schengen](SCR_QL_GLO0053)
16. [État](SCR_QL_GLO0054)
17. [Euro](SCR_QL_GLO0055)
18. [Gouvernement](SCR_QL_GLO0066)
19. [Justice](SCR_QL_GLO0077)
20. [Maire](SCR_QL_GLO0087)
21. [Ministre](SCR_QL_GLO0093)
22. [Parlement](SCR_QL_GLO0101)
23. [Parlement européen](SCR_QL_GLO0102)
24. [Préfet](SCR_QL_GLO0106)
25. [Premier ministre](SCR_QL_GLO0107)
26. [Président de la République](SCR_QL_GLO0109)
27. [Procuration](SCR_QL_GLO0111)
28. [Référendum](SCR_QL_GLO0116)
29. [Région](SCR_QL_GLO0117)
30. [Sénat](SCR_QL_GLO0123)
31. [Sénateur](SCR_QL_GLO0124)
32. [Suffrage universel](SCR_QL_GLO0127)
33. [Union européenne](SCR_QL_GLO0133)
34. [Vote](SCR_QL_GLO0137)
35. [Choisir un autre thème](SCR_QL_THEMES)
36. [Poser une question](SCR_QL_RESET)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_THEME_T3

### Droits et devoirs

1. [Assistance à personne en danger](SCR_QL_GLO0005)
2. [Charte de l'environnement](SCR_QL_GLO0016)
3. [Citoyenneté](SCR_QL_GLO0020)
4. [Consentement](SCR_QL_GLO0031)
5. [Contravention](SCR_QL_GLO0035)
6. [Crime](SCR_QL_GLO0037)
7. [Déclaration des droits de l'homme et du citoyen](SCR_QL_GLO0038)
8. [Délit](SCR_QL_GLO0039)
9. [Dignité humaine](SCR_QL_GLO0045)
10. [Droits fondamentaux](SCR_QL_GLO0047)
11. [Égalité](SCR_QL_GLO0049)
12. [Environnement](SCR_QL_GLO0052)
13. [Gendarmerie](SCR_QL_GLO0065)
14. [Harcèlement](SCR_QL_GLO0069)
15. [Harcèlement scolaire](SCR_QL_GLO0070)
16. [Impôt](SCR_QL_GLO0073)
17. [Infraction](SCR_QL_GLO0074)
18. [Intégrité de la personne](SCR_QL_GLO0075)
19. [Liberté](SCR_QL_GLO0082)
20. [Loi](SCR_QL_GLO0085)
21. [Mutilations sexuelles féminines](SCR_QL_GLO0096)
22. [Ordre public](SCR_QL_GLO0099)
23. [Police](SCR_QL_GLO0104)
24. [Présomption d'innocence](SCR_QL_GLO0110)
25. [Prostitution](SCR_QL_GLO0113)
26. [Sûreté](SCR_QL_GLO0128)
27. [Traite des êtres humains](SCR_QL_GLO0131)
28. [Violence](SCR_QL_GLO0136)
29. [Choisir un autre thème](SCR_QL_THEMES)
30. [Poser une question](SCR_QL_RESET)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_THEME_T4

### Histoire, géographie et culture

1. [Alpes](SCR_QL_GLO0002)
2. [Bretagne](SCR_QL_GLO0008)
3. [Celtes](SCR_QL_GLO0014)
4. [Charlemagne](SCR_QL_GLO0015)
5. [Château de Versailles](SCR_QL_GLO0017)
6. [Cinquième République](SCR_QL_GLO0018)
7. [Clovis](SCR_QL_GLO0021)
8. [Fête de la Musique](SCR_QL_GLO0056)
9. [France métropolitaine](SCR_QL_GLO0058)
10. [Francophonie](SCR_QL_GLO0061)
11. [Gastronomie française](SCR_QL_GLO0063)
12. [Gaule](SCR_QL_GLO0064)
13. [Guadeloupe](SCR_QL_GLO0067)
14. [Guyane](SCR_QL_GLO0068)
15. [Île-de-France](SCR_QL_GLO0072)
16. [Journées européennes du patrimoine](SCR_QL_GLO0076)
17. [La Réunion](SCR_QL_GLO0079)
18. [Martinique](SCR_QL_GLO0090)
19. [Mayotte](SCR_QL_GLO0091)
20. [Mont-Saint-Michel](SCR_QL_GLO0094)
21. [Musée du Louvre](SCR_QL_GLO0095)
22. [Outre-mer](SCR_QL_GLO0100)
23. [Patrimoine](SCR_QL_GLO0103)
24. [Première Guerre mondiale](SCR_QL_GLO0108)
25. [Provence-Alpes-Côte d'Azur](SCR_QL_GLO0114)
26. [Pyrénées](SCR_QL_GLO0115)
27. [Révolution française](SCR_QL_GLO0119)
28. [Seconde Guerre mondiale](SCR_QL_GLO0121)
29. [Seine](SCR_QL_GLO0122)
30. [Tour Eiffel](SCR_QL_GLO0130)
31. [UNESCO](SCR_QL_GLO0132)
32. [Vercingétorix](SCR_QL_GLO0135)
33. [Choisir un autre thème](SCR_QL_THEMES)
34. [Poser une question](SCR_QL_RESET)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_THEME_T5

### Vivre dans la société française

1. [APL](SCR_QL_GLO0003)
2. [Assurance maladie](SCR_QL_GLO0006)
3. [Bail](SCR_QL_GLO0007)
4. [CAF](SCR_QL_GLO0009)
5. [Carte de résident](SCR_QL_GLO0010)
6. [Carte Vitale](SCR_QL_GLO0011)
7. [CDD](SCR_QL_GLO0012)
8. [CDI](SCR_QL_GLO0013)
9. [Collège](SCR_QL_GLO0022)
10. [Contrat de travail](SCR_QL_GLO0034)
11. [CPAM](SCR_QL_GLO0036)
12. [École](SCR_QL_GLO0048)
13. [Employeur](SCR_QL_GLO0051)
14. [France Services](SCR_QL_GLO0059)
15. [France Travail](SCR_QL_GLO0060)
16. [Hôpital](SCR_QL_GLO0071)
17. [Locataire](SCR_QL_GLO0084)
18. [Lycée](SCR_QL_GLO0086)
19. [Mairie](SCR_QL_GLO0088)
20. [Médecin traitant](SCR_QL_GLO0092)
21. [Naturalisation](SCR_QL_GLO0097)
22. [Préfecture](SCR_QL_GLO0105)
23. [Propriétaire](SCR_QL_GLO0112)
24. [Salaire](SCR_QL_GLO0120)
25. [Service public](SCR_QL_GLO0125)
26. [Titre de séjour](SCR_QL_GLO0129)
27. [Urgences](SCR_QL_GLO0134)
28. [Choisir un autre thème](SCR_QL_THEMES)
29. [Poser une question](SCR_QL_RESET)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0001

### Abstention

Fait de ne pas participer à une élection.

**À retenir :** L'abstention est différente du vote blanc.

**Voir aussi :** Vote.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0002

### Alpes

Massif montagneux situé à l'est de la France.

**À retenir :** Le Mont Blanc est le plus haut sommet d'Europe occidentale.

**Voir aussi :** Pyrénées.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0003

### APL

Aide personnalisée au logement versée sous certaines conditions.

**À retenir :** Elle permet de réduire le montant du loyer.

**Voir aussi :** CAF.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0004

### Assemblée nationale

L'Assemblée nationale est composée des députés.

**À retenir :** Les députés sont élus directement par les citoyens.

**Voir aussi :** Député; Parlement.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0005

### Assistance à personne en danger

Obligation d'aider une personne en danger ou d'alerter les secours lorsqu'il est possible de le faire sans risque.

**À retenir :** Ne pas porter assistance peut être puni par la loi.

**Voir aussi :** Secours.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0006

### Assurance maladie

Système de protection sociale qui rembourse tout ou partie des dépenses de santé.

**À retenir :** Toute personne résidant régulièrement en France peut bénéficier d'une couverture maladie selon sa situation.

**Voir aussi :** Carte Vitale; CPAM; Médecin traitant.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0007

### Bail

Contrat de location entre un propriétaire et un locataire.

**À retenir :** Le bail fixe les droits et obligations de chacun.

**Voir aussi :** Logement.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0008

### Bretagne

Région située à l'ouest de la France métropolitaine.

**À retenir :** La Bretagne est connue pour son littoral, sa culture bretonne, ses ports de pêche, ses phares et ses spécialités culinaires comme les crêpes et le kouign-amann.

**Voir aussi :** Rennes; Région.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0009

### CAF

La Caisse d'allocations familiales verse différentes aides aux familles et aux personnes selon leur situation.

**À retenir :** La CAF peut aider au paiement du logement.

**Voir aussi :** APL.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0010

### Carte de résident

Titre de séjour permettant de résider durablement en France.

**À retenir :** Sa durée de validité est généralement de dix ans.

**Voir aussi :** Titre de séjour.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0011

### Carte Vitale

Carte personnelle permettant de justifier ses droits à l'Assurance maladie.

**À retenir :** Elle facilite le remboursement des soins.

**Voir aussi :** Assurance maladie; CPAM.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0012

### CDD

Contrat à durée déterminée.

**À retenir :** Il prévoit une date de fin.

**Attention à ne pas confondre :** CDD ≠ CDI.

**Voir aussi :** Contrat de travail; CDI.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0013

### CDI

Contrat à durée indéterminée.

**À retenir :** Il ne prévoit pas de date de fin.

**Attention à ne pas confondre :** CDI ≠ CDD.

**Voir aussi :** Contrat de travail; CDD.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0014

### Celtes

Peuples installés en Gaule avant la conquête romaine.

**À retenir :** Les Gaulois étaient des peuples celtes.

**Voir aussi :** Gaule.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0015

### Charlemagne

Empereur d'Occident couronné en l'an 800.

**À retenir :** Il a contribué au développement de l'éducation et de l'organisation de son empire.

**Voir aussi :** Moyen Âge.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0016

### Charte de l'environnement

Texte à valeur constitutionnelle qui reconnaît le droit à un environnement équilibré.

**À retenir :** La protection de l'environnement est un principe constitutionnel.

**Voir aussi :** Environnement.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0017

### Château de Versailles

Ancienne résidence des rois de France située près de Paris.

**À retenir :** Il est célèbre pour son architecture et ses jardins.

**Voir aussi :** Louis XIV.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0018

### Cinquième République

Régime politique actuel de la France, instauré en 1958.

**À retenir :** La Constitution de 1958 est toujours en vigueur.

**Voir aussi :** Constitution.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0019

### Citoyen

Personne possédant la nationalité française et bénéficiant des droits civiques et politiques.

**À retenir :** Le citoyen participe à la vie démocratique.

**Voir aussi :** Nationalité; Droit de vote.

1. [Approfondir dans le cours](SCR_REV_T1_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0020

### Citoyenneté

Lien juridique entre une personne et un État, donnant des droits mais aussi des devoirs.

**À retenir :** Tous les résidents ne sont pas citoyens français.

**Attention à ne pas confondre :** Citoyenneté ≠ résidence.

**Voir aussi :** Nationalité.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0021

### Clovis

Premier roi des Francs à s'être converti au christianisme.

**À retenir :** Son règne marque le début de la dynastie mérovingienne.

**Voir aussi :** Charlemagne.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0022

### Collège

Établissement accueillant les élèves après l'école primaire.

**À retenir :** Le collège est obligatoire.

**Voir aussi :** Lycée.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0023

### Commission européenne

Institution chargée de proposer les lois européennes et de veiller à leur application.

**À retenir :** Elle défend l'intérêt général de l'Union européenne.

**Voir aussi :** Union européenne.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0024

### Commune

La commune est la plus petite collectivité territoriale.

**À retenir :** Elle est administrée par un maire.

**Voir aussi :** Maire.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0025

### Conseil constitutionnel

Le Conseil constitutionnel vérifie que les lois respectent la Constitution.

**À retenir :** Il protège la Constitution.

**Voir aussi :** Constitution.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0026

### Conseil de l'Union européenne

Institution où siègent les ministres des États membres.

**À retenir :** Il participe au vote des lois européennes.

**Voir aussi :** Commission européenne.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0027

### Conseil départemental

Assemblée qui administre le département.

**À retenir :** Ses membres sont les conseillers départementaux.

**Voir aussi :** Département.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0028

### Conseil européen

Réunion des chefs d'État ou de gouvernement des pays membres.

**À retenir :** Il fixe les grandes orientations politiques de l'Union européenne.

**Voir aussi :** Union européenne.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0029

### Conseil municipal

Assemblée élue qui administre la commune.

**À retenir :** Les conseillers municipaux élisent le maire.

**Voir aussi :** Maire.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0030

### Conseil régional

Assemblée qui administre la région.

**À retenir :** Ses membres sont les conseillers régionaux.

**Voir aussi :** Région.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0031

### Consentement

Accord libre et volontaire donné par une personne.

**À retenir :** Sans consentement, un acte peut constituer une infraction.

**Voir aussi :** Violence sexuelle.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0032

### Constitution

Texte fondamental qui organise les institutions françaises et garantit les droits et libertés.

**À retenir :** Toutes les lois doivent respecter la Constitution.

**Voir aussi :** République; Loi.

1. [Approfondir dans le cours](SCR_REV_T1_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0033

### Contrat d'engagement à respecter les principes de la République

Engagement consistant à respecter les valeurs et les principes de la République française.

**À retenir :** Le respect des principes républicains est attendu dans certains parcours administratifs.

**Voir aussi :** République; Laïcité; Valeurs de la République.

1. [Approfondir dans le cours](SCR_REV_T1_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0034

### Contrat de travail

Accord entre un employeur et un salarié définissant les conditions de travail.

**À retenir :** Le contrat précise les droits et les obligations de chacun.

**Voir aussi :** CDI; CDD.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0035

### Contravention

Infraction la moins grave.

**À retenir :** Elle est généralement punie d'une amende.

**Voir aussi :** Délit; Crime.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0036

### CPAM

La Caisse primaire d'assurance maladie gère l'Assurance maladie dans chaque département.

**À retenir :** Elle accompagne les assurés dans leurs démarches de santé.

**Voir aussi :** Carte Vitale; Assurance maladie.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0037

### Crime

Infraction la plus grave prévue par la loi.

**À retenir :** Les crimes sont jugés par une cour d'assises.

**Voir aussi :** Délit.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0038

### Déclaration des droits de l'homme et du citoyen

Texte adopté en 1789 qui affirme les droits et libertés fondamentaux.

**À retenir :** C'est l'un des textes fondateurs de la République française.

**Voir aussi :** Constitution.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0039

### Délit

Infraction plus grave qu'une contravention.

**À retenir :** Il peut être puni d'une peine de prison.

**Voir aussi :** Crime.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0040

### Démocratie

Régime politique dans lequel les citoyens participent à la vie publique par le vote ou le référendum.

**À retenir :** La démocratie permet au peuple de participer aux décisions publiques.

**Attention à ne pas confondre :** Démocratie ≠ République.

**Voir aussi :** République; Élection.

1. [Approfondir dans le cours](SCR_REV_T1_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0041

### Département

Le département est une collectivité territoriale située entre la région et la commune.

**À retenir :** La France compte 101 départements.

**Voir aussi :** Région; Commune.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0042

### Député

Le député représente les citoyens à l'Assemblée nationale.

**À retenir :** Il vote les lois.

**Voir aussi :** Assemblée nationale.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0043

### Député européen

Représentant élu des citoyens au Parlement européen.

**À retenir :** Les députés européens sont élus tous les cinq ans.

**Voir aussi :** Parlement européen.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0044

### Devise de la République

La devise officielle de la République française est :
Liberté, Égalité, Fraternité.

**À retenir :** Elle représente les trois valeurs fondamentales de la République.

**Voir aussi :** Liberté; Égalité; Fraternité.

1. [Approfondir dans le cours](SCR_REV_T1_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0045

### Dignité humaine

Principe selon lequel chaque personne doit être respectée et ne jamais être traitée comme un objet.

**À retenir :** La dignité humaine est protégée par la loi.

**Voir aussi :** Droits fondamentaux.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0046

### Drapeau français

Le drapeau national est composé de trois bandes verticales bleue, blanche et rouge.

**À retenir :** Il est l'un des symboles officiels de la République.

**Voir aussi :** La Marseillaise.

1. [Approfondir dans le cours](SCR_REV_T1_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0047

### Droits fondamentaux

Ensemble des droits et libertés reconnus à toute personne et garantis par la Constitution et les textes fondamentaux.

**À retenir :** Ils protègent la dignité, la liberté et l'égalité de chacun.

**Voir aussi :** Constitution; Liberté; Égalité.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0048

### École

Établissement où les enfants reçoivent un enseignement.

**À retenir :** L'instruction est obligatoire de 3 à 16 ans.

**Voir aussi :** Collège; Lycée.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0049

### Égalité

Principe selon lequel toutes les personnes disposent des mêmes droits devant la loi.

Principe selon lequel toutes les personnes bénéficient des mêmes droits devant la loi.

**À retenir :** La loi est la même pour tous.

Aucune discrimination n'est autorisée.

**Voir aussi :** Liberté; Discrimination.

1. [Approfondir dans le cours](SCR_REV_T1_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0050

### Élection

Procédure permettant aux citoyens de choisir leurs représentants.

**À retenir :** Les élections sont au cœur de la démocratie.

**Voir aussi :** Suffrage universel.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0051

### Employeur

Personne ou entreprise qui embauche un salarié.

**À retenir :** L'employeur doit respecter le Code du travail.

**Voir aussi :** Salarié.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0052

### Environnement

Ensemble des éléments naturels que chacun doit protéger.

**À retenir :** La protection de l'environnement est une responsabilité collective.

**Voir aussi :** Charte de l'environnement.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0053

### Espace Schengen

Espace dans lequel les contrôles aux frontières intérieures sont supprimés entre les États participants.

**À retenir :** La France fait partie de l'espace Schengen.

**Voir aussi :** Union européenne.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0054

### État

L'État est l'organisation politique qui exerce son autorité sur le territoire français et garantit le respect des lois.

**À retenir :** L'État assure les services publics et protège les citoyens.

**Voir aussi :** République; Gouvernement; Préfet.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0055

### Euro

Monnaie utilisée par plusieurs pays de l'Union européenne.

**À retenir :** L'euro est la monnaie officielle de la France.

**Voir aussi :** Union européenne.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0056

### Fête de la Musique

Manifestation culturelle organisée chaque année le 21 juin.

**À retenir :** Elle permet à tous de partager la musique gratuitement.

**Voir aussi :** Culture.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0057

### Fête nationale

La fête nationale française est célébrée chaque année le 14 juillet.

**À retenir :** Elle commémore la prise de la Bastille et la Fête de la Fédération.

**Voir aussi :** République.

1. [Approfondir dans le cours](SCR_REV_T1_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0058

### France métropolitaine

Partie du territoire français située en Europe.

**À retenir :** Elle est composée de 13 régions.

**Voir aussi :** Outre-mer.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0059

### France Services

Réseau de guichets de proximité permettant d'effectuer de nombreuses démarches administratives.

**À retenir :** France Services accompagne les usagers gratuitement.

**Voir aussi :** Services publics.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0060

### France Travail

Établissement public qui accompagne les personnes dans leur recherche d'emploi.

**À retenir :** France Travail remplace Pôle emploi.

**Voir aussi :** Emploi; Formation.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0061

### Francophonie

Ensemble des personnes et des pays qui utilisent la langue française.

**À retenir :** Le français est parlé sur les cinq continents.

**Voir aussi :** Langue française.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0062

### Fraternité

Valeur qui encourage la solidarité, l'entraide et le respect entre les personnes.

**À retenir :** La fraternité favorise le vivre ensemble.

**Voir aussi :** Solidarité.

1. [Approfondir dans le cours](SCR_REV_T1_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0063

### Gastronomie française

Ensemble des traditions culinaires françaises.

**À retenir :** Le repas gastronomique des Français est inscrit au patrimoine culturel immatériel de l'UNESCO.

**Voir aussi :** UNESCO.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0064

### Gaule

Nom donné au territoire de la France actuelle avant la conquête romaine.

**À retenir :** La Gaule était peuplée de peuples celtes.

**Voir aussi :** Celtes; Vercingétorix; Jules César.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0065

### Gendarmerie

Force militaire chargée de missions de sécurité publique.

**À retenir :** Elle intervient principalement en zone rurale.

**Voir aussi :** Police.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0066

### Gouvernement

Le Gouvernement conduit la politique de la Nation.
Il est composé du Premier ministre et des ministres.

**À retenir :** Il prépare les projets de loi et applique les lois.

**Attention à ne pas confondre :** Le Gouvernement propose les lois.
Le Parlement les vote.

**Voir aussi :** Premier ministre; Parlement.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0067

### Guadeloupe

Département et région d'outre-mer situé dans les Caraïbes.

**À retenir :** Elle est connue pour ses plages, son volcan de la Soufrière et sa biodiversité.

**Voir aussi :** Outre-mer.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0068

### Guyane

Département et région d'outre-mer situé en Amérique du Sud.

**À retenir :** La Guyane accueille le Centre spatial guyanais de Kourou et possède une vaste forêt amazonienne.

**Voir aussi :** Outre-mer.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0069

### Harcèlement

Violences ou comportements répétés ayant pour effet de dégrader les conditions de vie d'une personne.

**À retenir :** Le harcèlement est puni par la loi.

**Voir aussi :** Harcèlement scolaire.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0070

### Harcèlement scolaire

Violences répétées subies par un élève de la part d'autres élèves.

**À retenir :** Il s'agit d'un délit.

**Voir aussi :** Violence.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0071

### Hôpital

Établissement de santé où sont assurés les soins médicaux et chirurgicaux.

**À retenir :** Les hôpitaux publics accueillent tous les patients.

**Voir aussi :** Urgences.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0072

### Île-de-France

Région où se situe Paris, capitale de la France.

**À retenir :** Elle est la région la plus peuplée du pays et concentre de nombreuses institutions nationales.

**Voir aussi :** Paris.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0073

### Impôt

Somme versée à l'État ou aux collectivités pour financer les services publics.

**À retenir :** Le paiement des impôts est une obligation.

**Voir aussi :** Services publics.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0074

### Infraction

Acte interdit par la loi.

**À retenir :** Une infraction peut être sanctionnée.

**Voir aussi :** Contravention; Délit; Crime.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0075

### Intégrité de la personne

Droit de chacun à la protection de son corps et de son esprit.

**À retenir :** Toute atteinte injustifiée à l'intégrité est interdite.

**Voir aussi :** Dignité humaine.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0076

### Journées européennes du patrimoine

Événement annuel permettant de découvrir gratuitement de nombreux lieux patrimoniaux.

**À retenir :** Elles ont lieu chaque année en septembre.

**Voir aussi :** Patrimoine.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0077

### Justice

La justice règle les conflits et sanctionne les infractions.

**À retenir :** Elle est indépendante.

**Voir aussi :** Tribunal.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0078

### La Marseillaise

La Marseillaise est l'hymne national français.

**À retenir :** Elle est chantée lors des cérémonies officielles.

**Voir aussi :** Drapeau français.

1. [Approfondir dans le cours](SCR_REV_T1_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0079

### La Réunion

Département et région d'outre-mer situé dans l'océan Indien.

**À retenir :** L'île est connue pour ses cirques, son volcan actif et ses paysages naturels.

**Voir aussi :** Outre-mer.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0080

### Laïcité

Principe garantissant la liberté de conscience, la neutralité de l'État et le respect de toutes les convictions.

**À retenir :** La République respecte toutes les croyances et garantit la liberté de religion ou de ne pas avoir de religion.

**Attention à ne pas confondre :** La laïcité n'interdit pas les religions.
Elle garantit leur libre exercice dans le respect de la loi.

**Voir aussi :** Neutralité; Liberté de conscience.

1. [Approfondir dans le cours](SCR_REV_T1_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0081

### Langue de la République

Le français est la langue officielle de la République française.

**À retenir :** Le français est utilisé dans les administrations, les écoles et les services publics.

**Voir aussi :** République.

1. [Approfondir dans le cours](SCR_REV_T1_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0082

### Liberté

Valeur qui permet à chacun de penser, de s'exprimer et d'agir dans le respect de la loi et des autres.

Droit reconnu à chacun de penser, de s'exprimer et d'agir dans le respect de la loi.

**À retenir :** La liberté s'exerce dans le respect des droits d'autrui.

La liberté est un droit fondamental.

**Attention à ne pas confondre :** Liberté ≠ absence de règles.

La liberté ne permet pas de porter atteinte aux droits des autres.

**Voir aussi :** Égalité; Fraternité; Liberté d'expression.

1. [Approfondir dans le cours](SCR_REV_T1_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0083

### Liberté de conscience

Droit de choisir librement ses convictions religieuses, philosophiques ou de ne pas en avoir.

**À retenir :** Cette liberté est protégée par la République.

**Voir aussi :** Laïcité.

1. [Approfondir dans le cours](SCR_REV_T1_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0084

### Locataire

Personne qui loue un logement.

**À retenir :** Le locataire doit payer son loyer et entretenir le logement.

**Voir aussi :** Bail.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0085

### Loi

Règle votée par le Parlement qui s'impose à tous.

**À retenir :** Toute personne vivant en France doit respecter la loi.

**Voir aussi :** Parlement.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0086

### Lycée

Établissement préparant les élèves au baccalauréat ou à une formation professionnelle.

**À retenir :** Il existe des lycées généraux, technologiques et professionnels.

**Voir aussi :** Baccalauréat.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0087

### Maire

Le maire dirige une commune.

**À retenir :** Il est élu par le conseil municipal.

**Attention à ne pas confondre :** Le maire dirige une commune.
Le préfet représente l'État.

**Voir aussi :** Commune; Préfet.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0088

### Mairie

Administration de la commune dirigée par le maire.

**À retenir :** De nombreuses démarches administratives y sont réalisées.

**Voir aussi :** Commune; Maire.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0089

### Marianne

Marianne est la représentation symbolique de la République française.

**À retenir :** Elle symbolise la liberté et la République.

**Voir aussi :** République.

1. [Approfondir dans le cours](SCR_REV_T1_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0090

### Martinique

Département et région d'outre-mer situé dans les Caraïbes.

**À retenir :** La Martinique est célèbre pour la montagne Pelée et son patrimoine culturel.

**Voir aussi :** Outre-mer.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0091

### Mayotte

Département et région d'outre-mer situé dans l'océan Indien.

**À retenir :** Mayotte est le département le plus récent de la République française.

**Voir aussi :** Outre-mer.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0092

### Médecin traitant

Médecin choisi par le patient pour assurer son suivi médical.

**À retenir :** Le déclarer permet un meilleur remboursement des soins.

**Voir aussi :** Assurance maladie.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0093

### Ministre

Un ministre est membre du Gouvernement.
Il est responsable d'un domaine particulier (éducation, santé, intérieur...).

**À retenir :** Chaque ministre dirige un ministère.

**Voir aussi :** Gouvernement.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0094

### Mont-Saint-Michel

Îlot rocheux situé en Normandie sur lequel est construite une abbaye.

**À retenir :** Il est inscrit au patrimoine mondial de l'UNESCO.

**Voir aussi :** UNESCO.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0095

### Musée du Louvre

Plus grand musée d'art de France situé à Paris.

**À retenir :** Il abrite notamment la Joconde.

**Voir aussi :** Paris.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0096

### Mutilations sexuelles féminines

Interventions consistant à retirer partiellement ou totalement les organes génitaux féminins sans raison médicale.

**À retenir :** Elles sont interdites et sévèrement punies en France.

**Voir aussi :** Violence.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0097

### Naturalisation

Procédure permettant à un étranger d'acquérir la nationalité française sous certaines conditions.

**À retenir :** La naturalisation n'est pas automatique.

**Voir aussi :** Nationalité française.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0098

### Neutralité

Obligation pour les services publics de traiter chacun de manière égale sans favoriser une religion ou une conviction.

**À retenir :** La neutralité concerne principalement les institutions et les agents publics.

**Voir aussi :** Laïcité.

1. [Approfondir dans le cours](SCR_REV_T1_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0099

### Ordre public

Ensemble des règles garantissant la sécurité, la tranquillité et la salubrité publiques.

**À retenir :** L'ordre public permet le bon fonctionnement de la société.

**Voir aussi :** Police; Gendarmerie.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0100

### Outre-mer

Ensemble des territoires français situés hors du continent européen.

**À retenir :** Ils font pleinement partie de la République française.

**Voir aussi :** Guyane; Guadeloupe; Martinique; La Réunion; Mayotte.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0101

### Parlement

Le Parlement vote les lois et contrôle l'action du Gouvernement.

**À retenir :** Il comprend deux assemblées.

**Voir aussi :** Assemblée nationale; Sénat.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0102

### Parlement européen

Institution européenne composée de députés élus par les citoyens des États membres.

**À retenir :** Il participe à l'adoption des lois européennes.

**Voir aussi :** Député européen.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0103

### Patrimoine

Ensemble des biens culturels, historiques et naturels transmis de génération en génération.

**À retenir :** Le patrimoine est protégé et valorisé.

**Voir aussi :** UNESCO.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0104

### Police

Force civile chargée de protéger les personnes et de faire respecter la loi.

**À retenir :** Elle intervient principalement dans les villes.

**Voir aussi :** Gendarmerie.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0105

### Préfecture

Administration représentant l'État dans un département.

**À retenir :** Elle traite notamment certaines démarches liées au séjour des étrangers.

**Voir aussi :** Préfet.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0106

### Préfet

Le préfet représente l'État dans un département ou une région.

**À retenir :** Il est nommé par le Gouvernement.

**Attention à ne pas confondre :** Le préfet n'est pas élu.

**Voir aussi :** État; Maire.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0107

### Premier ministre

Le Premier ministre dirige l'action du Gouvernement.

**À retenir :** Il coordonne le travail des ministres.

**Attention à ne pas confondre :** Le Président dirige l'État.
Le Premier ministre dirige le Gouvernement.

**Voir aussi :** Gouvernement.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0108

### Première Guerre mondiale

Conflit mondial de 1914 à 1918.

**À retenir :** La France fait partie des pays vainqueurs.

**Voir aussi :** Seconde Guerre mondiale.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0109

### Président de la République

Le Président de la République est le chef de l'État.

**À retenir :** Il est élu au suffrage universel direct pour cinq ans.

**Attention à ne pas confondre :** Le Président est le chef de l'État.
Le Premier ministre dirige l'action du Gouvernement.

**Voir aussi :** Gouvernement; Premier ministre.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0110

### Présomption d'innocence

Toute personne est considérée innocente tant qu'elle n'a pas été reconnue coupable par un tribunal.

**À retenir :** La culpabilité doit être prouvée.

**Voir aussi :** Justice.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0111

### Procuration

Autorisation donnée à une autre personne pour voter à sa place.

**À retenir :** Elle permet de voter en cas d'absence.

**Voir aussi :** Vote.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0112

### Propriétaire

Personne qui possède un logement.

**À retenir :** Le propriétaire peut louer son logement.

**Voir aussi :** Bail.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0113

### Prostitution

Échange d'un acte sexuel contre une rémunération.

**À retenir :** Le proxénétisme et le recours à la prostitution sont encadrés par la loi.

**Voir aussi :** Traite des êtres humains.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0114

### Provence-Alpes-Côte d'Azur

Région située dans le sud-est de la France.

**À retenir :** Elle est réputée pour la Méditerranée, les Alpes, Marseille, Nice et la lavande.

**Voir aussi :** Marseille; Nice.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0115

### Pyrénées

Chaîne de montagnes séparant la France et l'Espagne.

**À retenir :** Elles forment une frontière naturelle.

**Voir aussi :** Alpes.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0116

### Référendum

Consultation permettant au peuple de répondre directement à une question.

**À retenir :** Les citoyens répondent généralement par "Oui" ou "Non".

**Voir aussi :** Souveraineté nationale.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0117

### Région

La région est une collectivité territoriale regroupant plusieurs départements.

**À retenir :** La France compte 18 régions.

**Voir aussi :** Département.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0118

### République

Organisation politique dans laquelle le pouvoir appartient au peuple et s'exerce conformément à la Constitution.

**À retenir :** La France est une République indivisible, laïque, démocratique et sociale.

**Attention à ne pas confondre :** République ≠ démocratie.
La République est une forme d'organisation de l'État.
La démocratie est une manière d'exercer le pouvoir.

**Voir aussi :** Constitution; Démocratie; Souveraineté nationale.

1. [Approfondir dans le cours](SCR_REV_T1_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0119

### Révolution française

Période commencée en 1789 qui met fin à la monarchie absolue et fonde de nouveaux principes politiques.

**À retenir :** Elle marque la naissance des valeurs républicaines modernes.

**Voir aussi :** Déclaration des droits de l'homme et du citoyen.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0120

### Salaire

Somme versée par l'employeur en contrepartie du travail effectué.

**À retenir :** Le salaire est indiqué sur la fiche de paie.

**Voir aussi :** Employeur.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0121

### Seconde Guerre mondiale

Conflit mondial de 1939 à 1945.

**À retenir :** La Résistance a joué un rôle important dans la libération de la France.

**Voir aussi :** Résistance.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0122

### Seine

Fleuve qui traverse notamment Paris avant de se jeter dans la Manche.

**À retenir :** La Seine est l'un des principaux fleuves français.

**Voir aussi :** Loire; Rhône.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0123

### Sénat

Le Sénat est la seconde assemblée du Parlement.

**À retenir :** Les sénateurs représentent les collectivités territoriales.

**Attention à ne pas confondre :** Assemblée nationale ≠ Sénat.

**Voir aussi :** Sénateur; Parlement.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0124

### Sénateur

Le sénateur siège au Sénat.

**À retenir :** Il participe au vote des lois.

**Voir aussi :** Sénat.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0125

### Service public

Service assuré par une administration pour répondre aux besoins de la population.

**À retenir :** Les services publics garantissent l'égalité d'accès pour tous.

**Voir aussi :** Mairie; Préfecture.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0126

### Souveraineté nationale

Principe selon lequel le pouvoir appartient au peuple.

**À retenir :** Le peuple exerce sa souveraineté par ses représentants élus et par référendum.

**Attention à ne pas confondre :** La souveraineté appartient au peuple et non au Président de la République.

**Voir aussi :** République; Référendum; Citoyen.

1. [Approfondir dans le cours](SCR_REV_T1_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0127

### Suffrage universel

Mode d'élection dans lequel tous les citoyens remplissant les conditions peuvent voter.

**À retenir :** En France, le vote est universel, égal et secret.

**Voir aussi :** Vote.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0128

### Sûreté

Droit d'être protégé contre les arrestations arbitraires et de bénéficier d'un procès équitable.

**À retenir :** La justice protège les libertés individuelles.

**Voir aussi :** Présomption d'innocence; Justice.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0129

### Titre de séjour

Document autorisant un ressortissant étranger à séjourner en France pendant une durée déterminée.

**À retenir :** Il doit être renouvelé avant sa date d'expiration.

**Voir aussi :** Préfecture.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0130

### Tour Eiffel

Monument emblématique situé à Paris, construit pour l'Exposition universelle de 1889.

**À retenir :** Elle est l'un des symboles les plus connus de la France.

**Voir aussi :** Paris.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0131

### Traite des êtres humains

Exploitation d'une personne par la contrainte, la menace ou la tromperie.

**À retenir :** La traite des êtres humains est un crime.

**Voir aussi :** Esclavage.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0132

### UNESCO

Organisation des Nations unies chargée notamment de protéger le patrimoine mondial.

**À retenir :** Plusieurs sites français sont inscrits au patrimoine mondial de l'UNESCO.

**Voir aussi :** Patrimoine.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0133

### Union européenne

Organisation regroupant plusieurs États européens qui coopèrent dans de nombreux domaines.

**À retenir :** La France est membre de l'Union européenne.

**Voir aussi :** Parlement européen; Euro.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0134

### Urgences

Situation nécessitant une prise en charge médicale immédiate.

**À retenir :** En cas d'urgence médicale, composez le 15.

**Voir aussi :** SAMU; Hôpital.

1. [Approfondir dans le cours](SCR_REV_T5_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0135

### Vercingétorix

Chef gaulois qui s'est opposé à Jules César.

**À retenir :** Il est devenu un symbole de la résistance gauloise.

**Voir aussi :** Gaule; Jules César.

1. [Approfondir dans le cours](SCR_REV_T4_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0136

### Violence

Acte portant atteinte à une personne, physiquement, psychologiquement, sexuellement ou économiquement.

**À retenir :** Toutes les formes de violence sont interdites.

**Voir aussi :** Consentement.

1. [Approfondir dans le cours](SCR_REV_T3_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_GLO0137

### Vote

Action qui consiste à choisir un candidat ou répondre à une question lors d'un référendum.

**À retenir :** Le vote est un droit civique.

**Voir aussi :** Élection.

1. [Approfondir dans le cours](SCR_REV_T2_MENU)
2. [Poser une autre question](SCR_QL_RESET)
3. [Reprendre un entraînement](SCR_ENT_MENU)
4. [Retour au menu principal](MENU_PRINCIPAL)

1. [↩️ Reprendre mon activité](SCR_QL_RETOUR)

## SCR_QL_RETOUR

### ↩️ Reprendre mon activité

Choisissez le parcours que vous souhaitez reprendre.

`if @qlOrigine == "SCR_BIL_MENU"`
1. [🧭 Reprendre mon bilan](SCR_BIL_MENU)
`endif`
`if @qlOrigine == "SCR_REV_MENU"`
1. [📚 Reprendre mes révisions](SCR_REV_MENU)
`endif`
`if @qlOrigine == "SCR_GLO_MENU"`
1. [📖 Revenir au glossaire](SCR_GLO_MENU)
`endif`
`if @qlOrigine == "SCR_PREP_MENU"`
1. [🎯 Reprendre ma préparation](SCR_PREP_MENU)
`endif`
`if @qlOrigine == "SCR_ENT_MENU"`
1. [📝 Reprendre mon entraînement](SCR_ENT_MENU)
`endif`
`if @qlOrigine == "SCR_PASS_MENU"`
1. [🏛️ Revenir aux sessions d’examen](SCR_PASS_MENU)
`endif`
`if @qlOrigine == "SCR_CONS_MENU"`
1. [💡 Revenir aux conseils](SCR_CONS_MENU)
`endif`
`if @qlOrigine == "SCR_FAQ_MENU"`
1. [❔ Revenir à la FAQ](SCR_FAQ_MENU)
`endif`

2. [🏠 Retour au menu principal](MENU_PRINCIPAL)
3. [❓ Poser une autre question](SCR_QL_RESET)
