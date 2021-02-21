import React from 'react';
import './services-section.scss';
import ServiceBox from '../service-box/service-box';
import {Container,Row,Col} from 'react-bootstrap';
import {useGlobalContext} from "../../context";

const ServicesSection = () => {
    const {servicesData} = useGlobalContext();
    console.log('this is service data from firebase:',servicesData);
    return (
      <section id="services" className="services">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="title-box">
                <h3 className="title-a">
                  Services
                </h3>
                <p className="subtitle-a">
                  Here are the Services I offer
                </p>
                <div className="line-mf"></div>
              </div>
            </Col>
          </Row>

          <Row>
            {
              servicesData.map((service,index) => <ServiceBox key={index} {...service} />)
            }
          </Row>
        </Container>
      </section>
)
};

export default ServicesSection;