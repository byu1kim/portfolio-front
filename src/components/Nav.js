import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../components/Context";

const Nav = () => {
  const { clickDarkMode, clickLightMode } = useContext(GlobalContext);

  const [navOpen, setNavOpen] = useState(false);

  const isDesktop = (e) => {
    if (e.matches) {
      setNavOpen(false);
    }
  };

  const showHideNav = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 800px");
    mediaQuery.addEventListener("change", isDesktop);
    return () => mediaQuery.addEventListener("change", isDesktop);
  }, []);

  return (
    <header className="relative w-full h-1 z-20">
      <nav className="fixed flex flex-wrap items-center justify-between w-full p-5 dark:text-cyan-400">
        <div className="font-bold">
          <a href="/">BYUL</a>
        </div>

        <button onClick={showHideNav}>
          <div className="visible justify-center items-center">
            <i className="fa-solid fa-bars"></i>
          </div>
        </button>

        <div>
          <button onClick={clickDarkMode}>Dark | </button>
          <button onClick={clickLightMode}> Light</button>
        </div>

        <div className={` ${navOpen ? "" : "hidden"} w-full`} id="menu">
          <ul className="text-center">
            <li className={`hover:text-indigo-700`}>
              <a href="/"> Home</a>
            </li>
            <li className={`hover:text-indigo-700`}>
              <a href="/about">About</a>
            </li>
            <li className={`hover:text-indigo-700`}>
              <a href="/projects">Projects</a>
            </li>
            <li className={`hover:text-indigo-700`}>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
