import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Logins from './Logins';
import Signups from './Signups';
import './css/logins.css';

function Tabsu() {
  return (
    <Tabs
      defaultActiveKey="signin"
      id="LogTab"
      className="mb-3"
      fill
    >
      <Tab eventKey="signin" title="Sign in">
        <Logins />
      </Tab>
      <Tab eventKey="signup" title="Sign up">
        <Signups />
      </Tab>
      
    </Tabs>
  );
}

export default Tabsu;