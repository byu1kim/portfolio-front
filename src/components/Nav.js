import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../components/Context";

const Nav = () => {
  const { clickDarkMode } = useContext(GlobalContext);

  const [navOpen, setNavOpen] = useState(false);

  const isDesktop = (e) => {
    if (e.matches) {
      setNavOpen(true);
    } else {
      setNavOpen(false);
    }
  };

  const showHideNav = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 800px");
    mediaQuery.addEventListener("change", isDesktop);
    if (mediaQuery) {
      setNavOpen(true);
    } else {
      setNavOpen(false);
    }
    return () => mediaQuery.addEventListener("change", isDesktop);
  }, []);

  return (
    <header className="fixed w-full z-50 p-2 font-color">
      <nav className="flex flex-wrap w-full">
        <button onClick={showHideNav} className="w-1/3 p-4 md:hidden">
          <div className="text-left">
            <i className="fa-solid fa-bars"></i>
          </div>
        </button>

        <div className="font-bold w-1/3 text-center p-4 md:order-1 md:text-left">
          <a href="/">BYUL</a>
        </div>

        <div className="w-1/3 text-right p-4 md:order-3">
          <button onClick={(e) => clickDarkMode(e)}>
            <i className="fa-solid fa-circle-half-stroke"></i>
          </button>
        </div>

        <div
          className={` ${
            navOpen ? "opacity-100" : "opacity-0 hidden"
          } w-full p-4 pt-0 md:w-1/3 md:order-2 md:center md:p-0 bg-white dark:bg-gray-900 `}
          id="menu"
        >
          <ul className="uppercase md:flex md:gap-10 md:items-center">
            <li className="pb-2 hover:bg-white hover:text-cyan-500 dark:hover:text-cyan-300 dark:bg-transparent md:p-0">
              <Link to="/">Home</Link>
            </li>
            <li className="pb-2 hover:bg-white hover:text-cyan-500 dark:hover:text-cyan-300 dark:bg-transparent md:p-0">
              <Link to="/about">About</Link>
            </li>
            <li className="pb-2 hover:bg-white hover:text-cyan-500 dark:hover:text-cyan-300 dark:bg-transparent md:p-0">
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
