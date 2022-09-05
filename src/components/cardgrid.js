import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card1 from './cardsu';
import Card2 from './cardsu2';
import Card3 from './cardsu3';
import Card4 from './cardsu4';
import Card5 from './cardsu5';
import Card6 from './cardsu6';
import Card7 from './cardsu7';
import Card8 from './cardsu8';
import Card9 from './cardsu9';
import Card10 from './cardsu10';
import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./css/carousel.css";
import Stack from 'react-bootstrap/Stack';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

// import './css/gridu.css'

function CardGrid() {
  
  return (
    <>
    <div className ="Head"><h1>Our Services</h1></div>
        <Carousel fade control>
          <Carousel.Item>
    
          <div className="d-block w-100" style={{height:'100vh',width:'100%',aspectRatio:'1/1'}}  alt="First slide"/>
    
            <Carousel.Caption style={{bottom:'8rem',textShadow: '2px 2px black'}}>
            <Container>
      <Stack direction="horizontal" style={{justifyContent:'center'}}  gap={5} >
        <Col md ={'auto'}><Card1 /></Col>
        <Col md ={'auto'}><Card2 /></Col>
        <Col md ={'auto'}><Card3 /></Col>
        <Col md ={'auto'}><Card4 /></Col>
      
        
      </Stack>
    </Container>
            </Carousel.Caption>
          </Carousel.Item>
    
          <Carousel.Item >
    
            <div
              className="d-block w-100"
              style={{height:'100vh',width:'100%',aspectRatio:'1/1'}} 
              alt="Second slide"
            />
    
            <Carousel.Caption style={{bottom:'8rem',textShadow: '2px 2px black'}}>
            <Container>

        <Stack direction="horizontal" style={{justifyContent:'center'}}  gap={5} >
        <Col md ={'auto'}><Card5 /></Col>
        <Col md={'auto'}><Card6 /></Col>
        <Col md={'auto'}><Card7 /></Col>
        <Col md={'auto'}><Card9 /></Col>
      
      </Stack>
    </Container>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </>
  );
}

export default CardGrid;