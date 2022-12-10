import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function AboutUsContent() {
  return (
    <div class = "wrapper">
       <div class="container" id="wrap-cont">
      <div className='abouts'>
      <Container style={{paddingTop: "30px"}}>
        <Stack gap={5}>
          <Row id="abt1">
            <Col lg={true} className="abt1-h" >
            <h1>WHAT WE DO  </h1>
            <h2>We connect over 2,000,000 employers and freelancers globally from over 200 countries, regions and territories. Through our marketplace, employers can hire freelancers to do work. We ease people's burdens by connecting employers who need help with workers who need jobs. We work hard to put trust into the outsourcing experience for everyone. </h2>
            </Col>
          </Row>

          <Row id="abt1">
            <Col lg={true} className="abt1-h" >
            <h1>WHY WE DO IT </h1>
            <h2>We want to create economic opportunities so people have better lives.We have become the world's work marketplace where every day businesses of all sizes and independent talent from around the globe meet here to accomplish incredible things.</h2>
            </Col>
          </Row>

        <Container fluid="lg" className="abt">

        <Row>
        <Col gap={1} lg={true}>
        <div > 
        <h4 className = "abth">Assured Services</h4>
        <p className="abtp">We guarantee only the best Service</p>
        </div>
          </Col>
        <Col gap={1} lg={true}>
        <div > 
        <h4 className = "abth">Worldwide Clients</h4>
        <p className="abtp" >We are trusted by Clients Globally</p>
        </div>
          </Col>
        <Col gap={1} lg={true}>
        <div > 
        <h4 className = "abth">Go-To Talent and Service Provider</h4>
        <p className="abtp" >The number 1 place for tech services and talents</p>
      </div>
          </Col>
        <Col gap={1} lg={true}>
          <div > 
          <h4 className = "abth">It's All About The Customer</h4>
      <p className="abtp" > Here at Quantacell we put the customers first and we guarantee your satsifaction</p>
      </div>
        </Col>
        </Row>
        </Container>
        
        <Row>
        
            <Col gap={1} lg={true}>
              <Stack gap={5}>
                <div className="stackk "> 
                <div className='st-h'> <i class="fa fa-certificate" aria-hidden="true"></i> CREATING IDEAS WITH PASSION </div>
                  <p className="stack-p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ad minim veniam, quis nostrud exercitation nisi ut aliquip ex ea commodo consequat. irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  </p>
                </div>
                
                <div className="stackk ">
                <div className='st-h'> <i class="fa fa-certificate" aria-hidden="true"></i> ON-TIME AND WITHIN BUDGET </div>
                <p className="stack-p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </Stack>
              </Col>
          <Col gap={1} lg={true}>
          <Stack gap={5}>

                <div className="stackk ">
                  <div className='st-h'> <i class="fa fa-certificate" aria-hidden="true"></i>  MISSION</div>
                <p className="stack-p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam </p>
                </div>
                
                <div className="stackk "> 
                <div className='st-h'> <i class="fa fa-certificate" aria-hidden="true"></i>  VISION
                </div>
                <p className="stack-p"> Lorem ipsum dolor  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>
                </div>
            </Stack>
          </Col>
        </Row>

        <Container className="abtt">

        <Row>
          <Col lg={true} >
          <div className = "abt2-h"> 
          <h1 >
             START YOUR JOURNEY WITH US NOW!</h1>
          </div>
            </Col>
        </Row>
          
        <Row>
          <Col lg={6} className="chead">
            <Button  variant="light" className='btn2' id='btn2'>
              JOIN THE TEAM NOW!  <i class=" fa fa-users"> </i>
            </Button>
          </Col>

          <Col lg={6} className="chead">
          <Link to="/client" > <Button  variant="light" className='btn2' id='btn2'>
                HIRE A TALENT NOW! <i class="fa fa-handshake-o" > </i>
              </Button>
              </Link>
          </Col>
        </Row>

        </Container>
        <br/>
        </Stack>
            
      </Container>
      </div>
  </div>
  </div>
  
  );
}

export default AboutUsContent;