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
        <Navbar.Brand href="#home"><FaReact /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setNavBack('navbar-reduce')}>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto justify-content-space-between">
       
            <Nav.Link href="#home">  
              Home
            </Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  );
}

export default NavBar;