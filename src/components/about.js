import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutUsContent from './aboutuscont'
import './css/seemore1.css';
import React from 'react';

function AboutUs() {
  return (
<>    <header>
    <div className="hero">
    <div class="wrap-hero">
      <Row>
        <Col lg={true} className="headd"><h1>ABOUT US</h1></Col>
        
      </Row>
      </div>
    </div>
    
    </header>

    <main>
        <AboutUsContent/>
   </main>
</>
);
}

export default AboutUs;