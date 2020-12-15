import React from 'react';
import './header-section.scss';
import NavBar from  '../navbar/navbar';
import HeaderIntro from '../header-intro/header-intro';

export default function HeaderSection() {
  return (
    <section id="home" className="header">
      <NavBar />
      <HeaderIntro />
    </section>
  );
}