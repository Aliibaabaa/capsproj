// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import {TCard1} from './cardsu';
import {TCard2} from './cardsu2';
import {TCard3} from './cardsu3';
import {TCard4 }from './cardsu4';
import {TCard5} from './cardsu5';
import {TCard6} from './cardsu6';
import {TCard7} from './cardsu7';
// import Card8 from './cardsu8';
import {TCard9} from './cardsu9';
import React, { Component } from "react";
// import Carousel from 'react-bootstrap/Carousel';
import "./css/carousel.css";
// import Stack from 'react-bootstrap/Stack';
import Slider from "react-slick";
import "./css/slick.css";

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

// import './css/gridu.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default class TestResponsive extends Component {
render() {

      var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      // autoplay: true,
      speed: 1000,
      // autoplaySpeed: 2000,
      // cssEase: "linear",
      centerMode: true,
      gap:5,
    
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
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
        <div className="Div" style ={{ margin:'1rem auto 0'}}>
          <div className="Services">
          <h2> TESTIMONIALS</h2>
          </div>
          <Slider className="SSlider" {...settings} style ={{ display: 'flex',justifyContent: 'center'}}>
          <div style ={{ marginTop:'1rem', marginRight:'auto', marginBottom:' 0'}} className="Div"><TCard1 /></div>
          <div style ={{ marginTop:'1rem', marginRight:'auto', marginBottom:' 0'}} className="Div"><TCard2 /></div>
          <div style ={{ marginTop:'1rem', marginRight:'auto', marginBottom:' 0'}} className="Div"><TCard3 /></div>
          <div style ={{ marginTop:'1rem', marginRight:'auto', marginBottom:' 0'}} className="Div"><TCard4 /></div>
          <div style ={{ marginTop:'1rem', marginRight:'auto', marginBottom:' 0'}} className="Div"><TCard5 /></div>
          <div style ={{ marginTop:'1rem', marginRight:'auto', marginBottom:' 0'}} className="Div"><TCard6 /></div>
          <div style ={{ marginTop:'1rem', marginRight:'auto', marginBottom:' 0'}} className="Div"><TCard7 /></div>
          <div style ={{ marginTop:'1rem', marginRight:'auto', marginBottom:' 0'}} className="Div"><TCard9 /></div>
          </Slider>
          </div>
      );
    }
  }
  
  
//     <>
    
//         <Carousel fade control md>
        
//           <Carousel.Item >
//           <Row className="justify-content-md-center" s md="12" {...options}>
//         <Col s md="3">
//         <h1>Our Services</h1>
//         </Col>
//         </Row>
//           <div className="d-block w-100" style={{height:'100vh',width:'100%',aspectRatio:'1/1'}}  alt="First slide"/>
    
//             <Carousel.Caption style={{textShadow: '2px 2px black'}}>
//             <Container fluid = "md">
//       <Stack direction="horizontal" style={{justifyContent:'center'}}  className="col-md-5 mx-auto"  gap={5} >
//         <div  className="d-block w-100"><Card1 /></div>
//         <div  className="d-block w-100"><Card2 /></div>
//         <div className="d-block w-100"><Card3 /></div>
//         <div className="d-block w-100"><Card4 /></div>
      
        
//       </Stack>
//     </Container>
//             </Carousel.Caption>
//           </Carousel.Item>
    
//           <Carousel.Item >
//           <Row className="justify-content-md-center" s md="12" {...options}>
//         <Col a md="3">
//           <h1>Our Services</h1>
//         </Col>
//         </Row>
//             <div
//               className="d-block w-100"
//               style={{height:'100vh',width:'100%',aspectRatio:'1/1'}} 
//               alt="Second slide"
//             />
    
//             <Carousel.Caption style={{textShadow: '2px 2px black'}}>
//             <Container fluid = "md">

//         <Stack direction="horizontal" style={{justifyContent:'center'}}  className="col-md-5 mx-auto"  gap={5} >
//         <div className="d-block w-100"><Card5 /></div>
//         <div  className="d-block w-100"><Card6 /></div>
//         <div className="d-block w-100"><Card7 /></div>
//         <div className="d-block w-100"><Card9 /></div>
      
//       </Stack>
//     </Container>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//         </>
//   );
// }

//  export default CardGrid;