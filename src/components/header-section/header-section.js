import React from 'react';
import './header-section.scss';
import NavBar from  '../navbar/navbar';
import HeaderIntro from '../header-intro/header-intro';

export default function HeaderSection() {
  return (
    <>
      <NavBar />
      <HeaderIntro />
    </>
  );
}