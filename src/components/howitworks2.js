import '../components/css/howitworks.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table';
import hwC from '../components/Images/hwC...jpg'
import hwT from '../components/Images/hwC.jfif'
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function Feat2p2() {
  let navigate = useNavigate();
  return (
    <Container > 
      <Row xs={1} md={2}>
        <Col lg={8} className='hw-head'><br/>For Clients
        <Stack gap={2}>
          <div className="satck ">
            <b>1. </b>Meet with the Talent Acquisition Team
            </div>
          <div className="satck "> <b>2. </b>Receive a Shortlist
          </div>
          <div className="satck "> <b>3. </b>Choose the Perfect Fit
          </div>
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
        <Col lg={4} className='hw-head'>  
        <div className='hwC-cont'> 
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
        <Stack gap={2}>
          <div className="satck ">1. Complete your Profile </div>
          <div className="satck ">2. Application is Reviewed </div>
          <div className="satck ">3.  Complete Assessments</div>
          <div className="satck ">4.  Client Matching</div>
          <div className="satck ">5. Connect with Client</div>
      </Stack>
        </Col>
      </Row>

      <br/>
      {/* <Row>
      <button  className="seebtn"  onClick={() =>{
          navigate("/seemore");
        }} >
          See More
        </button>
          {/* <Button variant="outline-secondary" className="seebtn">See More</Button>  </Row> */}
      
      <br/>  <br/>  
    </Container>

  );
}

export default Feat2p2;