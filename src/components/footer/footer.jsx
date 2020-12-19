import React from 'react'
import './footer.scss';
import {Container,Row,Col} from 'react-bootstrap';


const d = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={12}>
            <div className="copyright-box">
              <p className="copyright">&copy; CopyRight {d}.<strong>Powered By React</strong></p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}