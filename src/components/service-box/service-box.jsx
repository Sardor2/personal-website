import React from 'react';
import './service-box.scss';
import {Col} from 'react-bootstrap';


const ServiceBox = ({title,description,icon}) => {

  return (
    <Col md={4}>
      <div className="service-box">
        <div className="service-ico">
          <span className="ico-circle">
            {icon}
          </span>
        </div>
        <div className="service-content">
          <h2 className="s-title">
           {title}
          </h2>
          <p className="s-description text-center">
            {description}
          </p>
        </div>
      </div>
    </Col>
  );
}

export default ServiceBox;