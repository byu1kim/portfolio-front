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
    <header className="relative w-full  z-20">
      <nav className="fixed flex flex-wrap w-full dark:text-cyan-400">
        <button onClick={showHideNav} className="w-1/3 p-4">
          <div className="text-left">
            <i className="fa-solid fa-bars"></i>
          </div>
        </button>

        <div className="font-bold w-1/3 text-center p-4">
          <a href="/">BYUL</a>
        </div>

        <div className="w-1/3 text-right p-4">
          <button onClick={clickDarkMode}>Dark | </button>

          <button onClick={clickLightMode}> Light</button>
        </div>

        <div className={` ${navOpen ? "" : "hidden"} w-full p-4 pt-0`} id="menu">
          <ul className="">
            <li className={`pb-2 hover:text-indigo-700`}>
              <a href="/"> Home</a>
            </li>
            <li className={`pb-2 hover:text-indigo-700`}>
              <a href="/about">About</a>
            </li>
            <li className={`pb-2 hover:text-indigo-700`}>
              <a href="/projects">Projects</a>
            </li>
            <li className={`pb-2 hover:text-indigo-700`}>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
