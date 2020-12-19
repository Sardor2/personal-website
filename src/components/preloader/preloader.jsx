import React,{useEffect,useState} from 'react';
import './preloader.scss';
import {FaReact} from 'react-icons/fa';

const Preloader = () => {
  const [trans,setTrans] = useState('');
 
  useEffect(() => {
    setTimeout(() => {
      setTrans('after-load');
    },900);
  },[]);
  
  return (
    <div  className={`preloader ${trans}`}>
      <FaReact />
    </div>
  );
}

export default Preloader;