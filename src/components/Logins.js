import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import CLogins from './Candidate';
import ELogins from './Employer';
import './css/logins.css';

function Logins() {
  return (
    <div className="MainContL">
    <Tabs
      defaultActiveKey="employee"
      id="fill-tab-example"
      className="mb-3"
      textAlign = "center"
      paddingLeft="20"
  
      
    >
      <Tab id="Cbutton" eventKey="candidate" title="Candidate" textAlign = "center">
        <CLogins/>
      </Tab>
      <Tab id="EButton" eventKey="employee" title="Employer" textAlign = "center">
        <ELogins />
      </Tab>
      
    </Tabs>
    </div>
  );
}

export default Logins;