import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
import Slider from "react-slick";
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

// import './css/gridu.css'

function CardGrid() {
  var options = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
    
        <Carousel fade control>
        
          <Carousel.Item >
          <Row className="justify-content-md-center"  md="12" >
        <Col s md="3">
        <h1>Our Services</h1>
        </Col>
        </Row>
          <div className="d-block w-100" style={{height:'100vh',width:'100%',aspectRatio:'1/1'}}  alt="First slide"/>
    
            <Carousel.Caption style={{textShadow: '2px 2px black'}}>
            <Container fluid = "md">
      <Slider direction="horizontal" style={{justifyContent:'center'}} md ={'auto'}  gap={5} {...options}>
        <Col md ={'auto'}><Card1 /></Col>
        <Col md ={'auto'}><Card2 /></Col>
        <Col md ={'auto'}><Card3 /></Col>
        <Col md ={'auto'}><Card4 /></Col>
      
        
      </Slider>
    </Container>
            </Carousel.Caption>
          </Carousel.Item>
    
          <Carousel.Item >
          <Row className="justify-content-md-center" s md="12" >
        <Col a md="3">
          <h1>Our Services</h1>
        </Col>
        </Row>
            <div
              className="d-block w-100"
              style={{height:'100vh',width:'100%',aspectRatio:'1/1'}} 
              alt="Second slide"
            />
    
            <Carousel.Caption style={{textShadow: '2px 2px black'}}>
            <Container fluid = "md">

        <Slider direction="horizontal" style={{justifyContent:'center'}} md ={'auto'}  gap={5} {...options}>
        <Col md ={'auto'}><Card5 /></Col>
        <Col md={'auto'}><Card6 /></Col>
        <Col md={'auto'}><Card7 /></Col>
        <Col md={'auto'}><Card9 /></Col>
      
      </Slider>
    </Container>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </>
  );
}

export default CardGrid;