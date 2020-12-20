import React from 'react';
import './about-resume.scss';
import {Row,Col,Image} from 'react-bootstrap';
import ResumeImage from '../../img/resume-img.jpg';
import aboutMe from '../../data/about-me-data';

const {name,profile,email,phone,skills} = aboutMe;

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
          <p><span className="title-s">Name : </span> <span>{name}</span></p>
          <p><span className="title-s">Profile : </span> <span>{profile}</span></p>
          <p><span className="title-s">Email : </span> <span>{email}</span></p>
          <p><span className="title-s">Phone : </span> <span>{phone}</span></p>
        </div>
      </Col>
    </Row>
    <div className="skill-mf">
      <p className="title-s">Superpowers</p>
      <div className="skills">
        {
          skills.map((s,i) => <span key={i} className="skill">{s}</span>)
        }
      </div>
    </div>
  </>
);

export default AboutResume;