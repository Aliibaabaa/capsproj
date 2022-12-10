import Carousel from 'react-bootstrap/Carousel';
import Himage from "./Images/cpic1.jpg";
import Himage2 from "./Images/cpic2.jpg";
import Himage3 from "./Images/cpic3.jpg";
import Form from 'react-bootstrap/Form';
import "./css/carousel.css";
import Button from 'react-bootstrap/Button';
import React from 'react';

function HeroSection() {
  return (
    <Carousel fade controls={false} indicators ={false} style={{marginTop:'auto'}}>
      <Carousel.Item interval={1000}>

      <img className="d-block w-100" style={{height:'100vh',width:'100%',aspectRatio:'1/1'}} src={Himage }  alt="First slide"/>

        <Carousel.Caption style={{bottom:'10rem',textShadow: '2px 2px black'}}>
          <h1 className="carh1">We find your dreams</h1>
          <p className="carp">Our mission is to create economic opportunities so people have better lives.</p>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for Services/Talents"
              className="me-2"
              aria-label="Search"
            />
            <Button className="car-searchbtn" variant="outline" id='car-searchbtn'>Search</Button>
          </Form>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000} >

        <img
          className="d-block w-100"
          style={{height:'100vh',width:'100%',aspectRatio:'1/1'}} src={Himage2 }
          alt="Second slide"
        />

        <Carousel.Caption style={{bottom:'10rem',textShadow: '2px 2px black'}}>
          <h1 className="carh1">Satisfaction Guarantee</h1>
          <p className="carp">We assure you to provide the excellent and quality services with our dedicated talents.</p>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for Services/Talents"
              className="me-2"
              aria-label="Search"
            />
            <Button className="car-searchbtn" variant="outline" id='car-searchbtn'> Search</Button>
          </Form>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>

        <img
          className="d-block w-100"
          style={{height:'100vh',width:'100%',aspectRatio:'1/1'}} src={Himage3 }
          alt="Third slide"
        />

        <Carousel.Caption style={{bottom:'10rem',textShadow: '2px 2px black'}}>
          <h1 className="carh1">Join our Team</h1>
          <p className="carp">
            What are you waiting for? Be a part of our growing team here in Strategic Jobseek.
          </p>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for Services/Talents"
              className="me-2"
              aria-label="Search"
            />
            <Button className="car-searchbtn" variant="outline" id='car-searchbtn'>Search</Button>
          </Form>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;