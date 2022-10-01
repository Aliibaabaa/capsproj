import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Himage2 from "./Images/dmark.jpeg";
import './css/cardsu.css';
import React from 'react';
import KimJ from "./Images/kimj.jpg";

var sectionStyle = {
    backgroundImage: `url(${Himage2})`,
    width: '18rem',
    backgroundSize: 'cover',
    backgroundPosition:'center',
  }

  var sectionStyle2 = {
    backgroundImage: `url(${KimJ})`,
    width: '18rem',
    backgroundSize: 'cover',
    backgroundPosition:'top',
    borderRadius:'100%',
  }

function Card5() {
  return (
    <Card className = "card" style={sectionStyle}>
    
      <Card.Body className = "card-content">
        <Card.Title className = "card-title">Digital Marketing</Card.Title>
        <Card.Text className = "card-body">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

function TCard5() {
  return (
    <Card className = "card2" style={sectionStyle2}>
    
      <Card.Body className = "card-content2">
        <Card.Title className = "card-title2">Kim Jong Un</Card.Title>
        <Card.Text className = "card-body2">
        그들은 좋다
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export {Card5, TCard5};