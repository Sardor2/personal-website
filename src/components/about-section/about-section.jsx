import React from 'react';
import './about-section.scss';
import {Container,Row,Col} from 'react-bootstrap';
import AboutResume from '../about-resume/about-resume';
import AboutText from '../about-text/about-text';

const AboutSection = () => (
  <section id="about" className="about-mf">
    <Container>
      <Row>
        <Col sm={12}>
          <div className="box-shadow-full">
            <Row>
              <Col md={6}>
                <AboutResume />
              </Col>
              <Col md={6}>
                <AboutText />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default AboutSection;