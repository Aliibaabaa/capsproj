import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Himage from "./Images/pandt.jpg";
import './css/cardsu.css'
import React from 'react';
import Aladeen from "./Images/Aladeen.jpg"


var sectionStyle = {
    backgroundImage: `url(${Himage})`,
    width: '18rem',
    backgroundSize: 'cover',
    backgroundPosition:'center',
  }

  var sectionStyle2 = {
    backgroundImage: `url(${Aladeen})`,
    width: '18rem',
    backgroundSize: 'cover',
    backgroundPosition:'center',
    borderRadius:'100%',
  }

function Card7() {
  return (
    <Card className = "card" style={sectionStyle}>
    
      <Card.Body className = "card-content">
        <Card.Title className = "card-title">Programming & Tech</Card.Title>
        <Card.Text className = "card-body">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

function TCard7() {
  return (
    <Card className = "card2" style={sectionStyle2}>
    
      <Card.Body className = "card-content2">
        <Card.Title className = "card-title2">Aladeen Efawadh</Card.Title>
        <Card.Text className = "card-body2">
          They have made an Aladeen impact on society
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export {Card7, TCard7};