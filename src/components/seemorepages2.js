import '../components/css/seemore1.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import wc3 from '../components/images/wcc3.gif';
import wc4 from '../components/images/wcc4.gif';
import wc2 from '../components/images/wcc2.gif';
import wc1 from '../components/images/wc1.gif';
function ClientInfo() {
  return (
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
            <Col lg={true}><h3 className='s-head'>WHAT'S GREAT ABOUT IT?</h3></Col>
          </Row>
          
          <Row>
          <Col lg={true}>
            <Stack gap={1}>
              <div className="stackk "> <i class="fa fa-check-square-o" aria-hidden="true"></i> Proof of Quality
                <p className="stack-p"> Quantacell has by far the largest pool of quality freelancers globally- over 50 million to choose from. Work with in-demand global talent who are at the top of their field! </p>
              </div>
              
              <div className="stackk "> <i class="fa fa-check-square-o" aria-hidden="true"></i> Safe and Secure
              <p className="stack-p"> Contact and interview your top choices, use our collaboration tools to work efficiently with your freelancer. Share files, chat in real-time, monitor progress, and so much more. Keep up-to-date and on-the-go with our time tracker, be in control and keep in contact.</p>
              </div>
              
          </Stack>
            </Col>
        <Col lg={true}>
        <Stack gap={1}>

              <div className="stackk "> <i class="fa fa-check-square-o" aria-hidden="true"></i> Take the Fastlane to the Right Talent
              <p className="stack-p"> We are here to help match you with the best talent for your team! Find professionals you can trust by browsing their portfolios and reading their profile reviews. We will provide a pre-vetted shortlist of the best matches from our global talent community. </p>
              </div>
              
              <div className="stackk "> <i class="fa fa-check-square-o" aria-hidden="true"></i> 24/7 Support
              <p className="stack-p"> Quantacell is a community that values your trust and safety as our number one priority. Our representatives are available 24/7 to assist you with any issues. </p>
              </div>
          </Stack>
        </Col>
      </Row>

          <Row>
            <Col lg={true}>
              <img src={wc2} className="w-gif" responsive />
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

        </Container>
        
    </div>
    </div>
  );
}

function TalentInfo() {
    return (
      <div className='contt'>
      <Container>
      <Row>
        <Col md={12}>
              <h1 >WHY WORK WITH US?  </h1>
              <h2>You can have the best people. Right here. Right now!</h2>
        </Col>
      </Row>
      <br/>
        <Row>
          <Col md><div><h3> Learn as you work</h3></div></Col>
          <Col md><div><h3>Grow your career</h3></div></Col>
          <Col md><div><h3>Let the Work Find You</h3></div></Col>
          <Col md><div><h3>24/7 support</h3></div></Col>
        </Row>
      </Container>
      </div>
    );
  }

export  {ClientInfo, TalentInfo};