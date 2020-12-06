import React,{useState,useEffect} from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';
import './navbar.scss';

const NavBar = () => {

  const [navBack,setNavBack] = useState('trans-bg');
  
  const checkSize = () => {
    console.log(window.scrollY);
    if (window.scrollY < 10) {
      setNavBack('trans-bg');
    } else {
      setNavBack('navbar-reduce');
    }
  }

  const handleClick = () => {
    setNavBack('navbar-reduce');
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
        <Navbar.Brand href="#home">DevFolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto justify-content-space-between">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#blog">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  );
}

export default NavBar;