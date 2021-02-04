import React,{useState,useContext} from 'react';
import {fetchAboutData} from './firebase/firebase.utils'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [isLoading,setIsLoading] = useState(true);
  const [aboutMeData,setAboutMeData] = useState({});

  const setIsLoadingFalse = () => {
    setIsLoading(false);
  }
  const getAppData = async () => {
    setAboutMeData(await fetchAboutData());
    setIsLoading(false);
  }
  const state = {
    isLoading,
    setIsLoadingFalse,
    aboutMeData,
    setAboutMeData,
    getAppData
  }
  return <AppContext.Provider value={state} >
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppContext,AppProvider}