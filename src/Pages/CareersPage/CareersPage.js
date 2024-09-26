import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Careers from "../../Components/Careers/Careers";
import Banner from "../../Components/Banner/Banner";

function CareersPage() {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("isDark")))

  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.pageYOffset > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavigation = () => setNavigationOpen(!navigationOpen);

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    localStorage.setItem("isDark", JSON.stringify(!isDark))
  };
  return (
    <div className={`App ${isDark ? "dark bg-black" : ""}`}>
      <NavBar
        isDark={isDark}
        toggleDarkMode={toggleDarkMode}
        stickyMenu={stickyMenu}
        navigationOpen={navigationOpen}
        toggleNavigation={toggleNavigation}
      />
      <Banner/>
      <Careers/>
      <Footer/>
    </div>
  );
}

export default CareersPage;
