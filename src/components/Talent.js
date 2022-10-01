import React from "react";
import Card from 'react-bootstrap/Card';
import './css/seemore1.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
// import wc3 from '../components/Images/wcc3.gif';
import wcc4 from './Images/wcc4.gif';
import wc2 from './Images/wcc2.gif';
import wc1 from './Images/wc1.gif';
import wc5 from './Images/wcc5.gif';
// import TestiMonials from './TestiMonials';
import Button from 'react-bootstrap/Button';
import bv from './Images/bv2.mp4';
import bt from './Images/bt.mp4';
import TestResponsive from './Testimony';
function Talent() {
  return (
    <div>

    <div className="hero2">
    <video loop muted autoPlay playsInline className='bv'>
            <source src={bt} type="video/mp4" />
          </video>
                </div> 
    <div className='hero2'>
        <div className='contt'>
              <Container>
                <Row id="cl-why">
                  <Col lg={true} className="head">
                    <h1 >WHY WORK WITH US?  </h1>
                    <h2>You can have the best people. Right here. Right now!</h2>
                  </Col>
                </Row>
                <br/>
                <Row>
                  <Col lg={true}><h3 className='s-head'>Blending Innovation in the Right Portion!</h3></Col>
                </Row>
                
                <Row>
                <Col lg={true}>
                  <Stack gap={1}>
                    <div className="stackk "> <i class="fa fa-check-square-o" aria-hidden="true"></i> LEARN AS YOU WORK
                      <p className="stack-p">Think about the skills and knowledge you need to stay current now and prepare for the future. There's a wide range of choices about where, when, and how to learn, from one-to-one sessions with a co-worker to online training sessions -  allowing you to pursue your learning goals while you continue working.  </p>
                    </div>
                    
                    <div className="stackk "> <i class="fa fa-check-square-o" aria-hidden="true"></i> GROW YOUR CAREER
                    <p className="stack-p"> Do the work you love, your way! Build rewarding relationships in the world's Work Marketplace. Your home for the work you want.
    
    </p>
                    </div>
                </Stack>
                  </Col>
              <Col lg={true}>
              <Stack gap={1}>
    
                    <div className="stackk "> <i class="fa fa-check-square-o" aria-hidden="true"></i>  LET THE WORK FIND YOU
                    <p className="stack-p"> Endless opportunities awaits! Search for jobs or have clients come to you. Learn, share information, and build your community with like-minded professionals. </p>
                    </div>
                    
                    <div className="stackk "> <i class="fa fa-check-square-o" aria-hidden="true"></i> FIND SUPPORT
                    <p className="stack-p"> Quantacell is a community that values your trust and safety as our number one priority. Our round-the-clock support team is available to help and assist you with any issues anytime, anywhere. </p>
                    </div>
                </Stack>
              </Col>
            </Row>
            <Row>
            <Col lg={12}>
             <Button  variant="light" className='tabbtn' id='tabbtn'>
                 JOIN THE TEAM NOW!  <i class=" fa fa-users"> </i>
              </Button>
            </Col>
          </Row>
                <Row>
                  <Col lg={true}>
                  <img src={wc1} className="w-gif" responsive />
                  </Col>
                </Row>
                </Container>
         </div> 
        <div className='cont2'>
        <Container>
              <Row id="cl-how">
                <Col lg={true} className="head" >
                <h1>HOW IT WORKS  </h1>
                <h2>Get anything done, exactly how you want it. Turn that spark of an idea into reality.</h2>
                </Col>
              </Row>
              <Row>
                <Col lg={true}><h3 className='s-head'>You bring the skill. We'll make earning easy.</h3></Col>
              </Row>
    
              <Row>
            <Col lg={true} className='t-headd '>
            <Stack gap={2}>
              <div className="satckk border">
                 <strong className="num"> 1. </strong> 
                 <strong className="t-num">   Complete your profile  </strong>
                 <p className="stack-p">Highlight your skills and experience, show your portfolio, set your ideal pay rate and upload a professional profile photo .</p>
              </div>
              <div className="satckk  border">
                 <strong className="num">2.  </strong> 
                 <strong className="t-num">  Application is reviewed    </strong>
                 <p className="stack-p">Go through the Verification Center checklist. If we think you are a fit,  we will move you into our TALA Team interview process.</p>
                 
              </div>
              <div className="satckk border">
                 <strong className="num"> 3.  </strong> 
                 <strong className="t-num">  Complete Assessments </strong>
                 <p className="stack-p"> Complete a series of tests and an interview with a specialized TALA Representative.</p>
              </div>
    
              <div className="satckk border">
                 <strong className="num"> 4.  </strong> 
                 <strong className="t-num">  Client Matching </strong>
                 <p className="stack-p"> Our TALA Team will start matching you to fulfilling work!</p>
              </div>
    
              <div className="satckk border">
                 <strong className="num"> 5.  </strong> 
                 <strong className="t-num"> Connect with Client </strong>
                 <p className="stack-p"> Develop lasting relationships with leaders who respect your time and expertise. </p>
              </div>
          </Stack>
        </Col>
        <Col lg={true} className='t-headd ' >
            <img src={wcc4} className="h-gif" responsive />
        </Col>
          </Row>
    
            </Container>
            
        </div>
    
        <div className='cont3'>
           <TestResponsive></TestResponsive> 
        </div>
      </div>
    
            </div>
           
            
  );
}

export default Talent;