import '../components/css/seemore1.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import JustifiedExample from './tabs2'; 
import React from 'react'
import bv from '../components/images/bv2.mp4'

function Seemore() {
  return (
    <>
  <header>
    <div className="hero2">
    <video loop muted autoPlay playsInline className='bv'>
        <source src={bv} type="video/mp4" />
      </video>
    </div>
</header>
  <main>
          <br/>  <JustifiedExample />
    </main>
    </>
  );
}

export default Seemore;