import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar/NavBar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Clients from "../../Components/Clients/Clients";
import Features from "../../Components/Features/Features";
import About from "../../Components/About/About";
import Facts from "../../Components/Facts/Facts";
import Footer from "../../Components/Footer/Footer";
import CallToAction from "../../Components/CallToAction/CallToAction";
import ChatBot from "../../Components/ChatBot/ChatBot";
import Contact from "../../Components/Contact/Contact";

function HomePage() {
    const [stickyMenu, setStickyMenu] = useState(false);
    const [navigationOpen, setNavigationOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setStickyMenu(window.pageYOffset > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleNavigation = () => setNavigationOpen(!navigationOpen);

    return (
        <div>
            <NavBar
                stickyMenu={stickyMenu}
                navigationOpen={navigationOpen}
                toggleNavigation={toggleNavigation}
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
