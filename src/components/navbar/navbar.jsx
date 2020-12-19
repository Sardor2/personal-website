import React,{useState,useEffect} from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';
import './navbar.scss';
import {FaReact} from 'react-icons/fa';
import {Link} from 'react-scroll';

const NavBar = () => {

  const [navBack,setNavBack] = useState('trans-bg');
  
  const checkSize = () => {
    if (window.scrollY < 10) {
      setNavBack('trans-bg');
    } else {
      setNavBack('navbar-reduce');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',checkSize);
    return () => {
      window.removeEventListener('scroll',checkSize);
    }
  },[]);

  return (
    <Navbar expand="md" fixed="top" className={navBack}>
      <Container>
        <Link to="home" className="navbar-brand" smooth={true} duration={1000}>
          <FaReact />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setNavBack('navbar-reduce')}>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto justify-content-space-between">
       
            <Link className="nav-link" href="#home" to="home" smooth={true} duration={1000}>  
              Home
            </Link>
            <Link className="nav-link" to="about" smooth={true} duration={1000} href="#about">About</Link>
            <Link className="nav-link" to="services" smooth={true} duration={1000} href="#services">Services</Link>
            <Link className="nav-link" to="work" smooth={true} duration={1000} href="#work">Work</Link>
            <Link className="nav-link" to="contact" smooth={true} duration={1000} href="#contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  );
}

export default NavBar;