import  React,{useState}  from "react";
import './contact-form.scss';
import {Col,Row,Form,Button} from 'react-bootstrap';
import sendMail from './send-mail';


const ContactForm = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [text,setText] = useState('');
  const [subject,setSubject] = useState('');

  const handleClick = () => {
    sendMail(email,subject,text);
    setName('');
    setEmail('');
    setText('');
    setSubject('');
  }
  return (
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
              <Form.Control onChange={e => setName(e.target.value)} value={name} type="text" id="name" name="name" placeholder="Name" required />
            </Form.Group>
          </Col>
          <Col md={12} className="mb-3">
            <Form.Group>
              <Form.Control onChange={e => setEmail(e.target.value)} value={email} type="email" id="email" name="email" required placeholder="Please Enter Valid Email"/>
            </Form.Group>
          </Col>
          <Col md={12} className="mb-3">
            <Form.Group>
              <Form.Control onChange={e => setSubject(e.target.value)} value={subject} type="text" id="subject" name="subject" required placeholder="Subject"/>
            </Form.Group>
          </Col>
          <Col md={12} className="mb-3">
            <Form.Group>
              <textarea onChange={e => setText(e.target.value)} value={text} name="message" className="form-control" id="message" rows="5"  placeholder="Message" required></textarea>
            </Form.Group>
          </Col>
          <Col md={12}>
            <Button onClick={handleClick} type="submit" variant="primary" className="form-button" >Send Message</Button>
          </Col>
        </Row>
      </Form>
    </div>
  </>
)
};

export default ContactForm;