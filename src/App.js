import React, {useEffect,useState} from 'react';
import HeaderSection from './components/header-section/header-section.jsx';
import './App.scss';
import Preloader from './components/preloader/preloader';


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
      {
        loader ? <Preloader />: null
      }
    </div>
  );
}

export default App;
