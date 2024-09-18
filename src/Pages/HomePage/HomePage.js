import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar/NavBar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Clients from "../../Components/Clients/Clients";
import Features from "../../Components/Features/Features";
import About from "../../Components/About/About";
import FeatureTabs from "../../Components/FeatureTabs/FeatureTabs";
import Facts from "../../Components/Facts/Facts";
import Footer from "../../Components/Footer/Footer";
import Contact from "../../Components/Contact/Contact";
import CallToAction from "../../Components/CallToAction/CallToAction";
import Portfolio from "../../Components/Portfolio/Portfolio";
import ChatBot from "../../Components/ChatBot/ChatBot";

function HomePage() {
    const [stickyMenu, setStickyMenu] = useState(false);
    const [navigationOpen, setNavigationOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("isDark")))

    useEffect(() => {
        const handleScroll = () => {
            setStickyMenu(window.pageYOffset > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleNavigation = () => setNavigationOpen(!navigationOpen);
    const toggleDropdown = () => setDropdown(!dropdown);

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
                dropdown={dropdown}
            />
            <HeroSection/>
            <Facts/>
            <Clients/>
            <ChatBot/>
            <Features/>
            <About/>
            <CallToAction/>
            <Footer/>
        </div>
    );
}

export default HomePage;
