import React from 'react';
import './App.css';
import About from './Component/About/About';
import Skills from './Component/Skills/Skills';
import Languages from './Component/Languages/Languages';
import Contact from './Component/Contact/Contact';
import Portfolio from './Component/Portfolio/Portfolio';
import Education from './Component/Education/Education';

function App() {
  return (
    <div className="App">
      <div className="Links">
        <p className="icons no-margin">
          <a href="https://www.linkedin.com/in/carla-montani-7b3231112" add target="_blank"><i class="fab fa-linkedin-in icon"></i></a>
          <a href="https://github.com/carlamontani" add target="_blank"><i class="fab fa-github icon"></i></a>
          <a href="https://www.behance.net/carlamontani" add target="_blank"><i class="fab fa-behance icon"></i></a>
        </p>
      </div>
      <div className="Container">
        <div className="col1">
          <About/>
          <Education/>
          <Languages/>
        </div>
        <div className="col2">
          <Contact/>
          <Portfolio/>
          <Skills/>
        </div>
      </div>
    </div>
  );
}

export default App;
