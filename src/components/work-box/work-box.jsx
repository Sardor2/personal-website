import React from 'react';
import './work-box.scss';
import {Col,Row,Image} from 'react-bootstrap';
import {BsLink45Deg} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const WorkBox = ({image,title,category,date,link,src_code}) => {
  return (
    <Col md={4}>
      <div className="work-box">
          <div className="work-img">
            <Image src={image} alt="work-image" fluid/>
          </div>
          <div className="work-content">
            <Row>
              <Col sm={7}>
                <h2 className="w-title">{title}</h2>
                <div className="w-more">
                  <span className="w-category">{category} </span>
                  <span className="w-date">/ {date} </span>
                </div>
              </Col>
              <Col sm={5}>
                <div className="w-like">
                  <a href={link} target="_blank" rel="noreferrer" className="project-link">
                    <BsLink45Deg />
                  </a>
                  <a href={src_code} target="_blank" rel="noreferrer" className="project-link">
                    <FaGithub />
                  </a>
                </div>
              </Col>
            </Row>
          </div>
      </div>
      
    </Col>
  );
}

export default WorkBox;