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

  const handleClick = () => {
    let mediaQuery = window.matchMedia("(min-width: 768px");
    if (!mediaQuery.matches) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px");
    mediaQuery.addEventListener("change", isDesktop);
    if (mediaQuery.matches) {
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
          <Link to="/">BYUL</Link>
        </div>

        <div className="w-1/3 text-right p-4 md:order-3">
          <button onClick={(e) => clickDarkMode(e)}>
            <i className="fa-solid fa-circle-half-stroke"></i>
          </button>
        </div>

        <div
          className={` ${
            navOpen ? "opacity-100" : "opacity-0 hidden"
          } w-full p-4 pt-0 md:w-1/3 md:order-2 md:center md:p-0  `}
          id="menu"
        >
          <ul className="uppercase md:flex md:gap-3 md:items-center">
            <li
              className="p-2 hover:text-cyan-500 hover:bg-white/20 dark:hover:text-cyan-300 dark:bg-transparent"
              onClick={handleClick}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className="p-2 hover:text-cyan-500 hover:bg-white/20 dark:hover:text-cyan-300 dark:bg-transparent"
              onClick={handleClick}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className="p-2 hover:text-cyan-500 hover:bg-white/20 dark:hover:text-cyan-300 dark:bg-transparent"
              onClick={handleClick}
            >
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
