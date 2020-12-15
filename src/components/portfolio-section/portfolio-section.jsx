import React from 'react';
import './portfolio-section.scss';
import {Row,Col,Container} from 'react-bootstrap';
import WorkBox from '../work-box/work-box';
import works from '../../data/portfolio-data';

const PortfolioSection = () => (
  <section id="work" className="portfolio-section">
    <Container>
      <Row>
        <Col sm={12}>
          <div className="title-box">
            <h3 className="title-a">
              Portfolio
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
          works.map((project,index) => <WorkBox key={index} {...project} />)
        }
      </Row>
    </Container>
  </section>
);

export default PortfolioSection;