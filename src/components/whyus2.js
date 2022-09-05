import '../components/css/whyus.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

function Feat1p2() {
  return (
    <Container>
      <Row>
        <Col lg={true} className='t-head'>For Clients
        <Stack gap={1}>
          <div className="satck ">Proof of Quality</div>
          <div className="satck bg-light border">Safe and Secure</div>
          <div className="satck bg-light border">Take the fastlane to the right talent</div>
          <div className="satck bg-light border">24/7 support</div>
      </Stack>
    </Col>
        <Col lg={true} className='t-head'>For Talents
        <Stack gap={1}>
          <div className="satck bg-light border">First item</div>
          <div className="satck bg-light border">Second item</div>
          <div className="satck bg-light border">Third item</div>
      </Stack>
    </Col>
      </Row>
      <br/>
      <Row>
          <Button variant="outline-secondary" className="seebtn">See More</Button> 
      </Row>
      <br/> <br/>
    </Container>

    
  );
}

export default Feat1p2;