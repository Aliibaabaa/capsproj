import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbarr from './components/navbar';
import Feat1 from './components/whyus'
import Feat1p2 from './components/whyus2'
import Feat2 from './components/howitworks'
import Feat2p2 from './components/howitworks2'
import HeroSection from './components/hero';
import CardGrid from './components/cardgrid';
// import BasicExample from  './components/cardsu';
import TestiMonials from './components/TestiMonials';



function App() {
  return (
    <>
    <nav>
      <Navbarr />
    </nav>
    <header>
      <HeroSection />
    </header>
    
    <main>
      <CardGrid />
      <br/>
      <Feat1/>
        <Feat1p2/>
      <br/>
        <Feat2/>
        <Feat2p2/>
      <div>
      <TestiMonials></TestiMonials>
      </div>
      
    </main>
    
    <footer>

    </footer>

    </>
  );
}

export default App;
