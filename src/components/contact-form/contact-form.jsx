import  React  from "react";
import './contact-form.scss';
import {Col,Row,Form,Button} from 'react-bootstrap';

const ContactForm = () => (
  <>
    <div className="title-box-2">
      <h5 className="title-left">
        Send Messsage
      </h5>
    </div>

    <div>
      <Form action="" method="post" className="contact-form" onSubmit={e => e.preventDefault()}>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group>
              <Form.Control type="text" id="name" name="name" placeholder="Name" required />
            </Form.Group>
          </Col>
          <Col md={12} className="mb-3">
            <Form.Group>
              <Form.Control type="email" id="email" name="email" required placeholder="Please Enter Valid Email"/>
            </Form.Group>
          </Col>
          <Col md={12} className="mb-3">
            <Form.Group>
              <Form.Control type="text" id="subject" name="subject" required placeholder="Subject"/>
            </Form.Group>
          </Col>
          <Col md={12} className="mb-3">
            <Form.Group>
              <textarea name="message" className="form-control" id="message" rows="5"  placeholder="Message" required></textarea>
            </Form.Group>
          </Col>
          <Col md={12}>
            <Button type="submit" variant="primary" className="form-button" >Send Message</Button>
          </Col>
        </Row>
      </Form>
    </div>
  </>
);

export default ContactForm;