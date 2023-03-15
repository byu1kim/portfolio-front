import { createContext, useState, useEffect } from "react";
export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const clickDarkMode = () => {
    document.documentElement.classList.add("dark");
    setDarkMode(true);
  };

  const clickLightMode = () => {
    document.documentElement.classList.remove("dark");
    setDarkMode(false);
  };

  useEffect(() => {}, [darkMode]);
  return (
    <GlobalContext.Provider value={{ darkMode, clickDarkMode, clickLightMode }}>{children}</GlobalContext.Provider>
  );
}
