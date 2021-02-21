import React,{useState,useContext} from 'react';
import {fetchAboutData,fetchServiceData,modifyServiceData} from './firebase/firebase.utils'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [isLoading,setIsLoading] = useState(true);
  const [aboutMeData,setAboutMeData] = useState({});
  const [servicesData,setServicesData] = useState([]);

  const setIsLoadingFalse = () => {
    setIsLoading(false);
  }

  const getAllData = async () => {
    setAboutMeData(await fetchAboutData());
    const data = await fetchServiceData();
    setServicesData(modifyServiceData(data));
    setIsLoading(false);
  }
  const state = {
    isLoading,
    aboutMeData,
    setAboutMeData,
    getAllData,
    servicesData
  }
  return <AppContext.Provider value={state} >
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppContext,AppProvider}