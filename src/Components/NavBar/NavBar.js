function NavBar({
                    isDark,
                    toggleDarkMode,
                    stickyMenu,
                    navigationOpen,
                    toggleNavigation,
                    dropdown,
                    toggleDropdown
                }) {

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
                            <img className="dark:hidden" src="./images/logo/logo-light.png" alt="Logo Clair" />
                            <img className="hidden dark:block" src="./images/logo/logo-light.png" alt="Logo Sombre" />
                        </a>

                        {/* Bouton de menu hamburger */}
                        <button className="lg:hidden block" onClick={toggleNavigation}>
                            <span className="block relative cursor-pointer w-5.5 h-5.5">
                                {/* Lignes du hamburger */}
                                <span className="block absolute w-full h-full">
                                    <span
                                        className={`block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-[0] ${
                                            !navigationOpen ? "!w-full delay-300" : ""
                                        }`}
                                    ></span>
                                    <span
                                        className={`block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-150 ${
                                            !navigationOpen ? "!w-full delay-400" : ""
                                        }`}
                                    ></span>
                                    <span
                                        className={`block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-200 ${
                                            !navigationOpen ? "!w-full delay-500" : ""
                                        }`}
                                    ></span>
                                </span>
                            </span>
                        </button>
                    </div>

                    <div
                        className={`w-full lg:w-3/4 lg:h-auto lg:visible lg:flex items-center justify-between ${
                            navigationOpen
                                ? "visible bg-white dark:bg-black shadow-solid-5 h-auto max-h-[400px] overflow-y-scroll rounded-md mt-4 p-7.5"
                                : ""
                        }`}
                    >
                        <nav>
                            <ul className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-10">
                                <li>
                                    <a href="index.html"
                                       className={`hover:text-primary ${window.location.pathname === "/" ? "text-primary" : ""}`}>
                                        Accueil
                                    </a>
                                </li>
                                <li className="group relative">
                                    <a
                                        href="#"
                                        className="hover:text-primary flex items-center justify-between gap-3"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleDropdown();
                                        }}
                                    >
                                        Solutions
                                        <svg
                                            className={`fill-waterloo group-hover:fill-primary w-3 h-3 cursor-pointer ${dropdown ? "fill-primary" : ""}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                                        </svg>
                                    </a>
                                    <ul className={`dropdown ${dropdown ? "flex" : ""}`}>
                                        <li><a href="blog-grid.html" className="hover:text-primary">Talent</a></li>
                                        <li><a href="blog-single.html" className="hover:text-primary">Smart Teams</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="group relative">
                                    <a
                                        href="#"
                                        className="hover:text-primary flex items-center justify-between gap-3"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleDropdown();
                                        }}
                                    >
                                        Produits
                                        <svg
                                            className={`fill-waterloo group-hover:fill-primary w-3 h-3 cursor-pointer ${dropdown ? "fill-primary" : ""}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                                        </svg>
                                    </a>
                                    <ul className={`dropdown ${dropdown ? "flex" : ""}`}>
                                        <li><a href="blog-grid.html" className="hover:text-primary">Site Web</a></li>
                                        <li><a href="blog-single.html" className="hover:text-primary">E-Commerce</a>
                                        </li>
                                        <li><a href="blog-single.html" className="hover:text-primary">Application</a>
                                        </li>
                                        <li><a href="blog-single.html" className="hover:text-primary">Cloud</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="index.html#support" className="hover:text-primary">Careers</a>
                                </li>
                                <li>
                                    <a href="index.html#support" className="hover:text-primary">A Propos</a>
                                </li>
                                <li>
                                    <a href="index.html#support" className="hover:text-primary">Contact</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-6 mt-7 lg:mt-0">
                            <div
                                className={`mr-1.5 absolute lg:static top-1 right-17 ${navigationOpen ? "visible" : "visible"}`}>
                                <label className="block m-0 relative">
                                    <input
                                        type="checkbox"
                                        value={isDark}
                                        onChange={toggleDarkMode}
                                        className="cursor-pointer w-full h-full opacity-0 absolute top-0 z-50 m-0"
                                    />
                                    <img className="dark:hidden" src="./images/icon/icon-sun.svg" alt="Soleil"/>
                                    <img className="hidden dark:block" src="./images/icon/icon-moon.svg" alt="Lune"/>
                                </label>
                            </div>

                            <a href="signin.html" className="text-waterloo text-regular font-medium hover:text-primary">
                                Se Connecter
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default NavBar;
