import { createContext, useState, useEffect } from "react";

export const UserPreferencesContext = createContext();

export const UserPreferencesProvider = (props) => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedLanguage = localStorage.getItem("language");

    if (savedTheme) setTheme(savedTheme);
    if (savedLanguage) setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("language", language);
  }, [theme, language]);

  return (
    <UserPreferencesContext.Provider
      value={{ theme, setTheme, language, setLanguage }}
    >
      {props.children}
    </UserPreferencesContext.Provider>
  );
};
