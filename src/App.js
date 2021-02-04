import React, {useEffect} from 'react';
import './App.scss';

import HeaderSection from './components/header-section/header-section.jsx';
import Preloader from './components/preloader/preloader';
import AboutSection from './components/about-section/about-section';
import ServicesSection from './components/services-section/services-section';
import PortfolioSection from './components/portfolio-section/portfolio-section';
import ContactSection from './components/contact-section/contact-section';
import ChatBox from './components/chat-box/chat-box';

import {fetchAboutData} from './firebase/firebase.utils';
import {useGlobalContext} from './context';


function App() {

  const {isLoading,setIsLoadingFalse,setAboutMeData,getAppData} = useGlobalContext();

  // const getM = async () => {
  //   setAboutMeData(await fetchAboutData());
  //   setIsLoadingFalse();
  // }
  useEffect(() => {
    // fetchAboutData()
    // .then(data => {
    //   setAboutMeData(data);
    //   setIsLoadingFalse();
    // })
    // .catch(err => console.error(err))
    getAppData();
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
          <ChatBox />
        </>
      }
    </div>
  );
}

export default App;
