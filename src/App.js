import React, {useEffect} from 'react';
import './App.scss';

import HeaderSection from './components/header-section/header-section.jsx';
import Preloader from './components/preloader/preloader';
import AboutSection from './components/about-section/about-section';
import ServicesSection from './components/services-section/services-section';
import PortfolioSection from './components/portfolio-section/portfolio-section';
import ContactSection from './components/contact-section/contact-section';
import {useGlobalContext} from './context';


function App() {
  const {isLoading,getAppData,getAllData} = useGlobalContext();

  useEffect(() => {
    getAllData()
  },[]);
  
  return (
    <div className="App">
      
      {
        isLoading ? <Preloader />: <> 
          <HeaderSection />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <ContactSection />
        </>
      }
    </div>
  );
}

export default App;
