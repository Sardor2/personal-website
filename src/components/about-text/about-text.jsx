import React from 'react';
import './about-text.scss';
import aboutMe from '../../data/about-me-data';

const AboutText = () => (
  <div className="about-text">
    <div className="title-box-2">
      <h5 className="title-left">
        About Me
      </h5>
    </div>
      <p className="lead">
        {aboutMe.text}
      </p>
  </div>
);

export default AboutText;