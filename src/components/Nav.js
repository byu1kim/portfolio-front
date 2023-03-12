import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = () => {
  const color = "indigo";
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
    <header>
      <nav className={`bg-indigo-500 text-white  flex flex-wrap items-center justify-between w-full p-5`}>
        <div className="font-bold">
          <a href="/">BYUL</a>
        </div>

        <button onClick={showHideNav}>
          <div className="visible justify-center items-center">
            <i className="fa-solid fa-bars"></i>
          </div>
        </button>

        <div className={` ${navOpen ? "" : "hidden"} w-full`} id="menu">
          <ul className="text-center">
            <li className={`hover:text-indigo-700`}>
              <Link to="/"> Home</Link>
            </li>
            <li className={`hover:text-indigo-700`}>
              <Link to="/about">About</Link>
            </li>
            <li className={`hover:text-indigo-700`}>
              <Link to="/projects">Projects</Link>
            </li>
            <li className={`hover:text-indigo-700`}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
