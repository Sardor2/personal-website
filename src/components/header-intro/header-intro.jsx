import React from 'react';
import {Container} from 'react-bootstrap';
import Typed from 'react-typed';
import './header-intro.scss';
// {'<Web Developer>'}
const data = [
  'Web Developer',
  'Front-end',
  'Back-end'
];
const HeaderIntro = () => (
  <div className="intro route bg-image">
    <div className="overlay-intro"></div>
    <div className="intro-content display-table">
      <div className="table-cell">
      
        <Container>
          <h1 className="intro-title">I am Sardor Abdurakhimov</h1>
          <p className="intro-subtitle">
            <span className="text-slider-items">
            {'<'}  
            <Typed 
              strings={data}
              typeSpeed={60}
              backSpeed={30}
              backDelay={2000}
              loop
            />
            {'/>'}
            </span>
          </p>
        </Container>
      </div>
    </div>
  </div>
);

export default HeaderIntro;