import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import CSignups from './Candidates';
import ESignups from './Employers';

import './css/logins.css';


function Signups() {
  return (
    <div className="MainContL">
    <Tabs
      defaultActiveKey="employee"
      id="fill-tab-example"
      className="mb-3"
      paddingLeft="20"
      
    
    >
      <Tab eventKey="candidate" title="Candidate" textAlign ="center"
>
        <CSignups/>
      </Tab>
      <Tab eventKey="employee" title="Employer" textAlign ="center"
>
        <ESignups />
      </Tab>
      
    </Tabs>
    </div>
  );
}

export default Signups;