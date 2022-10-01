import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Himage2 from "./Images/cpic2.jpg";
import './css/cardsu.css';
import React from 'react';
import Rowan from "./Images/rowanA.jpg";


var sectionStyle = {
    backgroundImage: `url(${Himage2})`,
    width: '18rem',
    backgroundSize: 'cover',
    backgroundPosition:'center',
  }

  var sectionStyle2 = {
    backgroundImage: `url(${Rowan})`,
    width: '18rem',
    backgroundSize: 'cover',
    backgroundPosition:'center',
     borderRadius:'100%',
  }

function Card6() {
  return (
    <Card className = "card" style={sectionStyle}>
    
      <Card.Body className = "card-content">
        <Card.Title className = "card-title">Business</Card.Title>
        <Card.Text className = "card-body">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

function TCard6() {
  return (
    <Card className = "card2" style={sectionStyle2}>
    
      <Card.Body className = "card-content2">
        <Card.Title className = "card-title2">Rowan Atkinson</Card.Title>
        <Card.Text className = "card-body2">
         Jolly good show
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export {Card6, TCard6};