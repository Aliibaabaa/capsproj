import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Himage3 from "./Images/gandd.jpg";
import './css/cardsu.css'
import React from 'react';
import Elon from './Images/elon.jpg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


var sectionStyle = {
  backgroundImage: `url(${Himage3})`,
  width: '18rem',
  backgroundSize: 'cover',
  backgroundPosition:'center',
}
var sectionStyle2 = {
  backgroundImage: `url(${Elon})`,
  width: '18rem',
  backgroundSize: 'cover',
  backgroundPosition:'top',
  borderRadius:'100%',
}

var sectionStyle3 = {
  backgroundImage: `url(${Elon})`,
  width: '10rem',
  height: '2rem',
  backgroundSize: 'cover',
  backgroundPosition:'center',
  marginBottom:'-5rem',
  marginRight:'12px',
  zIndex:'100',
  
}
var sectionStyle4 = {
  width: '50rem',
  height:'5rem',
  marginLeft:'2rem',
 
  
}
function Card2() {
  return (
    <Card className = "card" style={sectionStyle}>
    
      <Card.Body className = "card-content">
        <Card.Title className = "card-title">Graphics and Design</Card.Title>
        <Card.Text className = "card-body">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

function TCard2() {
  return (
    <Card className = "card2" style={sectionStyle2}>
    
      <Card.Body className = "card-content2">
        <Card.Title className = "card-title2">Elon Musk</Card.Title>
        <Card.Text className = "card-body2">
          Revolutionary Stuff!
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}
function SCard2() {
  return (
    <Row>
    <Col md={4}>
    <Card className = "card2" style={sectionStyle3}>
   
    
    </Card>

    </Col>

    <Col md={4} style={sectionStyle4}>
<Card className = "card3">
   
<Card.Body className = "card-content3">
  <Card.Title className = "card-title3">Elon Musk</Card.Title>
  <Card.Text className = "card-body3">
   A quick brown fox jumped over a lazy dog and over the fence
  </Card.Text>
  {/* <Button variant="primary">Go somewhere</Button> */}
</Card.Body>
</Card>

</Col>

    </Row>
  );
  
}

export {Card2, TCard2, SCard2};