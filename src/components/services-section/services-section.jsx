import React from 'react';
import './services-section.scss';
import ServiceBox from '../service/service-box';
import {Container,Row,Col} from 'react-bootstrap';
import {ServicesData} from '../../data/data';

const ServicesSection = () => (
  <section id="services" className="services">
    <Container>
      <Row>
        <Col sm={12}>
          <div className="title-box">
            <h3 className="title-a">
              Services
            </h3>
            <p className="subtitle-a">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="line-mf"></div>
          </div>
        </Col>
      </Row>

      <Row>
        {
          ServicesData.map(service => <ServiceBox {...service} />)
        }
      </Row>
    </Container>
  </section>
);

export default ServicesSection;