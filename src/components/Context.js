import { createContext, useState, useEffect } from "react";
export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [projects, setProjects] = useState();

  const clickDarkMode = (e) => {
    if (document.documentElement.classList.contains("dark")) {
      e.target.classList.add("rotate-180");
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      e.target.classList.remove("rotate-180");
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  };

  useEffect(() => {
    async function getProjects() {
      const result = await fetch("https://portfolio23-a3204-default-rtdb.firebaseio.com/projects.json").then((res) =>
        res.json()
      );
      setProjects(result);
    }
    getProjects();

    const date = new Date();
    const time = date.getHours();
    if (time > 18 && time << 7) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  return <GlobalContext.Provider value={{ darkMode, clickDarkMode, projects }}>{children}</GlobalContext.Provider>;
}
