import { initializeAlpine, initializeTestimonialSwiper, initializeScrollReveal } from './Utils/Utils';
import React, {useEffect} from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import CareersPage from "./Pages/CareersPage/CareersPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import CandidatureSpontaneePage from "./Pages/CandidatureSpontaneePage/CandidatureSpontaneePage";
import DrupalRealisationsPage from "./Pages/RealisationsPage/DrupalRealisationsPage";
import SymfonyRealisationsPage from "./Pages/RealisationsPage/SymfonyRealisationsPage";
import PimcoreRealisationsPage from "./Pages/RealisationsPage/PimcoreRealisationsPage";
import PrestashopRealisationsPage from "./Pages/RealisationsPage/PrestashopRealisationsPage";
import WordpressRealisationsPage from "./Pages/RealisationsPage/WordpressRealisationsPage";


function App() {

  useEffect(() => {
        initializeAlpine();
        initializeTestimonialSwiper();
        initializeScrollReveal();
  }, []);

  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/carriere" element={<CareersPage/>} />
            <Route path="/services" element={<ServicesPage/>} />
            <Route path="/carriere/candidature-spontanee" element={<CandidatureSpontaneePage/>} />
            <Route path="/drupal-realisations" element={<DrupalRealisationsPage/>} />
            <Route path="/symfony-realisations" element={<SymfonyRealisationsPage/>} />
            <Route path="/pimcore-realisations" element={<PimcoreRealisationsPage/>} />
            <Route path="/prestashop-realisations" element={<PrestashopRealisationsPage/>} />
            <Route path="/wordpress-realisations" element={<WordpressRealisationsPage/>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
