import React,{useEffect,useState} from 'react';
import './preloader.scss';

const Preloader = () => {
  const [trans,setTrans] = useState('');
 
  useEffect(() => {
    setTimeout(() => {
      setTrans('after-load');
    },900);
  },[]);
  
  return (
    <div  className={`preloader ${trans}`}>
      <div className="circle"></div>
    </div>
  );
}

export default Preloader;