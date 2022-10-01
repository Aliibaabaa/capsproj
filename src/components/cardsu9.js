import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Himage from "./Images/videoanim.jpg";
import './css/cardsu.css'
import React from 'react';
import TomS from "./Images/Tom.webp"


var sectionStyle = {
    backgroundImage: `url(${Himage})`,
    width: '18rem',
    backgroundSize: 'cover',
    backgroundPosition:'center',
    
  }

  var sectionStyle2 = {
    backgroundImage: `url(${TomS})`,
    width: '18rem',
    backgroundSize: 'cover',
    backgroundPosition:'top',
    borderRadius:'100%',
    
  }

function Card9() {
  return (
    <Card className = "card" style={sectionStyle}>
    
      <Card.Body className = "card-content">
        <Card.Title className = "card-title">Video and Animation</Card.Title>
        <Card.Text className = "card-body">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

function TCard9() {
  return (
    <Card className = "card2" style={sectionStyle2}>
    
      <Card.Body className = "card-content2">
        <Card.Title className = "card-title2">Thomas Shelby</Card.Title>
        <Card.Text className = "card-body2">
         They're fookin great
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export {Card9, TCard9};