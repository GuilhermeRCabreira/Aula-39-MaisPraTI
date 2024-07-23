import { useContext } from "react";
import { UserPreferencesContext } from "./UserPreferencesContext";

const PreferencesSelector = () => {
  const { theme, setTheme, language, setLanguage } = useContext(
    UserPreferencesContext
  );

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <div>
        <label>
          Tema:
          <select value={theme} onChange={handleThemeChange}>
            <option value="light">Claro</option>
            <option value="dark">Escuro</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Idioma:
          <select value={language} onChange={handleLanguageChange}>
            <option value="en">Inglês</option>
            <option value="pt">Português</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default PreferencesSelector;
