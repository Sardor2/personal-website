import React from 'react';
import './contact-section.scss';
import {Container,Row,Col} from 'react-bootstrap';
import ContactForm from '../contact-form/contact-form';
import Footer from '../footer/footer';
import ContactDetails from '../contact-details/contact-details';

const ContactSection = () => (
  <section id="contact" className="contact-section paralax-mf bg-image" >
    <div className="overlay-mf"></div>
    <Container>
      <Row>
        <Col sm={12}>
          <div className="contact-mf">
            <div className="box-shadow-full">
              <Row>
                <Col md={6}>
                  <ContactForm />
                </Col>
                <Col md={6}>
                  <ContactDetails />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <Footer />
  </section>
);

export default ContactSection;