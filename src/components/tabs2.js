import '../components/css/tabs.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import{ 
    Clients, Talents} from './tabs';
    // import {ClientInfo, TalentInfo} from './seemorepages2'

function JustifiedExample() {
  return (
    
    <Tabs
      defaultActiveKey="profile" id="justify-tab-example" className="mb-3"
      justify
    >
<<<<<<< HEAD
      
      <Tab eventKey="client" title="Clients">
=======
      <ClientInfo/>

      <Tab eventKey="client" title="FOR CLIENTS">
>>>>>>> f930fe92b172133f06b2d5fe13d68e31d9c6351c
        <Clients />
        
       
      </Tab>
<<<<<<< HEAD
      
      <Tab eventKey="talent" title="Talents">
=======
      <Tab eventKey="talent" title="FOR TALENTS">
>>>>>>> f930fe92b172133f06b2d5fe13d68e31d9c6351c
      <Talents />
      </Tab>


      {/* <Tab eventKey="longer-tab" title="Loooonger Tab">
        <Feat2 />
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        <Feat2 />
      </Tab> */}
    </Tabs>
  );
}

export default JustifiedExample;