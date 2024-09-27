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
            <div className="flex items-center">
              <div className="text-4xl font-bold mr-2" style={{color: '#FCDE70'}}>{'{'}</div>
              <div>
                <h1 className="text-3xl sm:text-3xl md:text-xl font-black">
               <span
              className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
              Tech My Team
              </span>
                </h1>
                <div className="text-sm" style={{color: '#000'}}>Skills for digital business</div>
              </div>
            </div>

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
        </div>
      </header>
    </div>
  );
}

export default NavBar;
