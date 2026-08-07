@echo off
setlocal
cd /d "%~dp0"

if not exist "chat_bot.md" (
  echo ERREUR : lancez ce fichier depuis la racine de Chatbot_civique2.
  pause
  exit /b 1
)

if exist "Chatbot_civique2_automatise_GitHub" rmdir /s /q "Chatbot_civique2_automatise_GitHub"
if exist "Module07_ChatMD_recherche_proximite" rmdir /s /q "Module07_ChatMD_recherche_proximite"
if exist "__pycache__" rmdir /s /q "__pycache__"

for %%F in (
  "Chatbot_Civique_V2.md"
  "Exemplechatmd.md"
  "FICHIER_EXCEL_MOTEUR_CHAT_BOT_module07_actualise.xlsx"
  "Module_Conseils_ChatMD_V1_complet.md"
  "Module_Entrainement_ChatMD_V2_conseils_personnalises.md"
  "Module_FAQ_ChatMD_V1_complet.md"
  "Module_Preparer_mon_examen_ChatMD_V5_conseils_classes_par_priorite.md"
  "Module_Question_libre_ChatMD_V1_complet.md"
  "bilan_chatmd_complet_v7_premier_et_progression.md"
  "chatbot_coach_civique_v2_bilan_integre.md"
  "communes_france.csv"
  "glossaire_corrige_recherche_native_chatmd.md"
  "module_bilan_v2_opérationnel.md"
  "module_revisions_complet_chatmd_v13_harmonise.md"
  "update-examens.yml"
) do if exist "%%~F" del /q "%%~F"

echo Nettoyage termine. Verifiez maintenant les changements dans GitHub Desktop.
pause
