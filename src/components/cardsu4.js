import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Himage2 from "./Images/gaming.jpg";
import './css/cardsu.css'
import React from 'react';
import KimK from './Images/kimk.webp';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


var sectionStyle = {
    backgroundImage: `url(${Himage2})`,
    width: '18rem',
    backgroundSize: 'cover',
    backgroundPosition:'center',
  }

  var sectionStyle2 = {
    backgroundImage: `url(${KimK})`,
    width: '18rem',
    backgroundSize: 'cover',
    backgroundPosition:'center',
    borderRadius:'100%',
  }

  var sectionStyle3 = {
  backgroundImage: `url(${KimK})`,
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

function Card4() {
  return (
    <Card className = "card" style={sectionStyle}>
    
      <Card.Body className = "card-content">
        <Card.Title className = "card-title">Gaming</Card.Title>
        <Card.Text className = "card-body">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

function TCard4() {
  return (
    <Card className = "card2" style={sectionStyle2}>
    
      <Card.Body className = "card-content2">
        <Card.Title className = "card-title2">Kim Kardashian</Card.Title>
        <Card.Text className = "card-body2">
          Omg its like so amazing.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}
function SCard4() {
  return (
    <Row>
    <Col md={4}>
    <Card className = "card2" style={sectionStyle3}>
   
    
    </Card>

    </Col>

    <Col md={4} style={sectionStyle4}>
<Card className = "card3">
   
<Card.Body className = "card-content3">
  <Card.Title className = "card-title3">Kim Kardashian</Card.Title>
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


export {Card4,TCard4,SCard4};