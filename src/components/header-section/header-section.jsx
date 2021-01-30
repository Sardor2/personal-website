import React from 'react';
import './header-section.scss';
import NavBar from  '../navbar/navbar';
import HeaderIntro from '../header-intro/header-intro';
import BgVideo from '../bg-video/bg-video'

export default function HeaderSection() {
  return (
    <section id="home" className="header">
      <BgVideo />
      <NavBar />
      <HeaderIntro />
    </section>
  );
}