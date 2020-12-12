import React, {useEffect,useState} from 'react';
import HeaderSection from './components/header-section/header-section.jsx';
import './App.scss';
import Preloader from './components/preloader/preloader';
import AboutSection from './components/about-section/about-section';


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
      {
        loader ? <Preloader />: null
      }
    </div>
  );
}

export default App;
