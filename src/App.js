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
import $ from 'jquery';
import TabsProto from './components/tabs'; 


function App() {

  $(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });


  return (
    <>
    <nav>
      <Navbarr />
      <TabsProto />
    </nav>

    <header>
      <HeroSection />
    </header>
    
    <main>
    <div className="tag">
      <CardGrid />
    </div>
      <hr/>

      <div className="tag">
        <Feat1/>
        <Feat1p2/>
      </div>
      <br/>
      <div className="tag">
        <Feat2/>
        <Feat2p2/>
      </div>

      <div className="tag">
      <TestiMonials></TestiMonials>
      </div>
      
    </main>
    
    <footer>

    </footer>

    </>
  );
}

export default App;
