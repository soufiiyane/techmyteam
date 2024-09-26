import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import Integrations from "../../Components/Integrations/Integrations";
import Clients from "../../Components/Clients/Clients";
import FAQs from "../../Components/FAQs/FAQs";

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
      <Integrations/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default CareersPage;
