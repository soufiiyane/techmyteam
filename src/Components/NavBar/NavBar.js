import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar({
                  isDark,
                  toggleDarkMode,
                  stickyMenu,
                  navigationOpen,
                  toggleNavigation,
                }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="fixed top-0 left-0 -z-10 flex h-full w-full items-center justify-around">
        <span className="w-[1px] h-full bg-stroke dark:bg-strokedark flex animate-line1"></span>
        <span className="w-[1px] h-full bg-stroke dark:bg-strokedark flex animate-line2"></span>
        <span className="w-[1px] h-full bg-stroke dark:bg-strokedark flex animate-line3"></span>
      </div>
      <header
        className={`fixed left-0 top-0 w-full z-[99999] py-7 ${
          stickyMenu ? "bg-white dark:bg-black shadow py-4 transition duration-100" : ""
        }`}
      >
        <div className="mx-auto max-w-[1390px] px-4 md:px-8 2xl:px-0 lg:flex items-center justify-between relative">
          <div className="w-full lg:w-1/4 flex items-center justify-between">
            <a href="index.html">
              <img className="dark:hidden" src="./images/logo/techmyteam-black.png" alt="Logo Clair"/>
              <img className="hidden dark:block" src="./images/logo/logo-light.png" alt="Logo Sombre"/>
            </a>

            {/* Hamburger Menu Button */}
            <button className="lg:hidden block" onClick={toggleNavigation}>
              <span className="block relative cursor-pointer w-5.5 h-5.5">
                {/* Hamburger Lines */}
                <span className="block absolute w-full h-full">
                  {/* First Line */}
                  <span
                    className={`block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-full h-0.5 my-1 transition-transform duration-300 ${
                      navigationOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  ></span>
                  {/* Second Line */}
                  <span
                    className={`block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-full h-0.5 my-1 transition-opacity duration-300 ${
                      navigationOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  {/* Third Line */}
                  <span
                    className={`block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-full h-0.5 my-1 transition-transform duration-300 ${
                      navigationOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  ></span>
                </span>
              </span>
            </button>
          </div>

          <div
            className={`w-full lg:w-3/4 lg:h-auto lg:visible lg:flex items-center justify-between ${
              navigationOpen
                ? "visible bg-white dark:bg-black shadow-solid-5 h-auto max-h-[400px] overflow-y-auto rounded-md mt-4 p-7.5"
                : "hidden lg:flex"
            }`}
          >
            <nav>
              <ul className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-10">
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/carriere">Carrière</NavLink></li>
                <li>
                  <a
                    href="#support"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('support');
                    }}
                    className="hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/*
          <div className="flex items-center gap-6 mt-7 lg:mt-0">
            <div className={`mr-1.5 absolute lg:static top-1 right-17 visible`}>
              <label className="block m-0 relative">
                <input
                  type="checkbox"
                  checked={isDark}
                  onChange={toggleDarkMode}
                  className="sr-only peer"
                />
                <div
                  className="w-10 h-5.5 rounded-full bg-[#D0D0D2] flex items-center px-[3px] cursor-pointer after:content-[''] after:w-4.5 after:h-4.5 after:bg-white dark:after:bg-[#262938] after:rounded-full after:shadow-switch after:duration-300 peer-checked:after:translate-x-4.5"></div>
              </label>
            </div>
          </div>
          */}
        </div>
      </header>
    </div>
  );
}

export default NavBar;
