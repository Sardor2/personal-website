import React from 'react';
import './about-resume.scss';
import {Row,Col,Image} from 'react-bootstrap';
import ResumeImage from '../../img/resume-img.jpg';

const AboutResume = () => (
  <>
    <Row>
      <Col sm={6} md={5}>
        <div className="about-img"> 
          <Image src={ResumeImage} fluid rounded  alt="resume-image"/>
        </div>
      </Col>
      <Col sm={6} md={7}>
        <div className="about-info">
          <p><span className="title-s">Name : </span> <span>Sardor Abdurakhimov</span></p>
          <p><span className="title-s">Profile : </span> <span>Full-Stack Developer</span></p>
          <p><span className="title-s">Email : </span> <span>abdurakhimov.sardor@gmail.com</span></p>
          <p><span className="title-s">Phone : </span> <span>99 803 52 19</span></p>
        </div>
      </Col>
    </Row>
    <div className="skill-mf">
      <p className="title-s">Superpowers</p>
    </div>
  </>
);

export default AboutResume;