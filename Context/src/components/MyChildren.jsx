import { useContext } from "react";
import { UserPreferencesContext } from "./UserPreferencesContext";
import PreferencesSelector from "./PreferencesSelector";

const MyChildren = () => {
  const { theme, language } = useContext(UserPreferencesContext);

  const texts = {
    en: {
      greeting: "Hello",
      userPreferences: "User Preferences",
      selectedLanguage: "Selected Language",
      theme: "Theme",
    },
    pt: {
      greeting: "Olá",
      userPreferences: "Preferências do Usuário",
      selectedLanguage: "Idioma Selecionado",
      theme: "Tema",
    },
  };

  return (
    <div
      style={{
        background: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <h1>{texts[language].greeting}</h1>
      <h2>{texts[language].userPreferences}</h2>
      <p>
        {texts[language].selectedLanguage}:{" "}
        {language === "en" ? "Inglês" : "Português"}
      </p>
      <p>
        {texts[language].theme}: {theme === "light" ? "Claro" : "Escuro"}
      </p>
      <PreferencesSelector />
    </div>
  );
};

export default MyChildren;
