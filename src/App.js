import { initializeAlpine, initializeTestimonialSwiper, initializeScrollReveal } from './Utils/Utils';
import React, {useEffect} from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";


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
            <Route path="/produits" element={<ServicesPage/>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
