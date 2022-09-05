import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";



function TabsProto() {
  return (
   <Router>
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
        >
      <Tab eventKey="client" title="Client">
      <Link to="/">Clients</Link>
      </Tab>
      <Tab eventKey="talent" title="Talent">
      <Link to="/talent">Talents</Link>
      </Tab>
      <Tab eventKey="home" title="Home">
          </Tab>
      <Tab eventKey="profile" title="Profile">

      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">

      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
      </Tab>
      <Routes>
          <Route exact path="/" element={<Clients />}/>
            
          <Route path="/talent" element ={<Talents/>}/>
           
        </Routes>
      
    </Tabs>
    </Router>
  );
}
function Clients() {
    return (
      <div>
        <h2>Client</h2>
      </div>
    );
  }
  
  function Talents() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }

export {TabsProto, 
    Clients, Talents};