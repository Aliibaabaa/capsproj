import '../components/css/howitworks.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table';
import hwC from '../components/images/hwC...jpg'
import hwT from '../components/images/hwC.jfif'

function Feat2p2() {
  return (
    <Container fluid>
      <Row xs={1} md={2}>
        <Col lg={8} className='hw-head'>For Clients
        <Stack gap={1}>
          <div className="satck bg-light border">First item</div>
          <div className="satck bg-light border">Second item</div>
          <div className="satck bg-light border">Third item</div>
      </Stack>
    </Col>
        <Col lg={4} className='hw-head'>
            <div className='hwC-cont'> 
                 <Image className='hwC-img' src={hwC} responsive />
                    <div className='hwC-ol'> 
                    <Table striped  className='hwC-ol'>
                    <tbody>
                            <tr>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            </tr>
                            <tr>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            </tr>
                            <tr>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            </tr>
                        </tbody>
                    </Table>
                    </div>
           </div>
           </Col>
     
      </Row>

      <br/>  

      <Row xs={1} md={2}>
        <Col lg={4} className='hw-head'>  <div className='hwC-cont'> 
                 <Image className='hwC-img' src={hwT} responsive />
                    <div className='hwC-ol'> 
                    <Table striped  className='hwC-ol'>
                            <tbody>
                            <tr>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            </tr>
                            <tr>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            </tr>
                            <tr>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            </tr>
                        </tbody>
                    </Table>
                    </div>
           </div>
    </Col>
        <Col lg={8} className='hw-head'>For Talents
        <Stack gap={1}>
          <div className="satck bg-light border">First item</div>
          <div className="satck bg-light border">Second item</div>
          <div className="satck bg-light border">Third item</div>
      </Stack>
        </Col>
      </Row>

      <br/>  <br/>  <br/>

    </Container>

  );
}

export default Feat2p2;