import '../components/css/whyus.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

function Feat1p2() {
  return (
    <Container fluid>
      <Row>
        <Col lg={true} className='t-head'>For Clients
        <Stack gap={1}>
          <div className="satck bg-light border">First item</div>
          <div className="satck bg-light border">Second item</div>
          <div className="satck bg-light border">Third item</div>
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
    </Container>
  );
}

export default Feat1p2;