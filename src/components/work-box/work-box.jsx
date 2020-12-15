import React from 'react';
import './work-box.scss';
import {Col,Row,Image} from 'react-bootstrap';
import {BsPlusCircle} from 'react-icons/bs';

const WorkBox = ({image,title,category,date}) => {
  return (
    <Col md={4}>
      <div className="work-box">
        <a href="portfolio">
          <div className="work-img">
            <Image src={image} alt="work-image" fluid/>
          </div>
          <div className="work-content">
            <Row>
              <Col sm={8}>
                <h2 className="w-title">{title}</h2>
                <div className="w-more">
                  <span className="w-category">{category} </span>
                  <span className="w-date">/ {date} </span>
                </div>
              </Col>
              <Col sm={4}>
                <div className="w-like">
                  <BsPlusCircle />
                </div>
              </Col>
            </Row>
          </div>
        </a>
      </div>
      
    </Col>
  );
}

export default WorkBox;