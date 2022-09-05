import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbarr from './components/navbar';
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
