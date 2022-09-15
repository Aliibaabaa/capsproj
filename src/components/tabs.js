import '../components/css/tabs.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams, 
    useNavigate
  } from "react-router-dom";

  import {ClientInfo,TalentInfo} from './seemorepages2';

  
function Clients() {
    return (
      <div>
        <ClientInfo />
      </div>
    );
  }
  
  function Talents() {
    return (
      <div>
       <TalentInfo />
      </div>
    );
  }

export {
    Clients, Talents};