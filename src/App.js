import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbarr from './components/navbar';
import Feat1 from './components/whyus'
import Feat1p2 from './components/whyus2'
import Feat2 from './components/howitworks'
import Feat2p2 from './components/howitworks2'

function App() {
  return (
    <>
    <nav>
      <Navbarr />
    </nav>
    
    <main> 
      <br/>
        <Feat1/>
        <Feat1p2/>
      <br/>
        <Feat2/>
        <Feat2p2/>
    </main>

    <footer>

    </footer>

    </>
  );
}

export default App;
