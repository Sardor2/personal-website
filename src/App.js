import React, {useEffect,useState} from 'react';
import HeaderSection from './components/header-section/header-section.jsx';
import './App.scss';
import Preloader from './components/preloader/preloader';
import AboutSection from './components/about-section/about-section';
import ServicesSection from './components/services-section/services-section';
import PortfolioSection from './components/portfolio-section/portfolio-section';
import ContactSection from './components/contact-section/contact-section';
import ChatBox from './components/chat-box/chat-box';


function App() {
  const [loader,SetLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetLoader(false);
    },2000);
  },[]);
  
  return (
    <div className="App">
      <HeaderSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <ChatBox />
      {
        loader ? <Preloader />: null
      }
    </div>
  );
}

export default App;
