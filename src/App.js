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
        <p className="no-margin">
          <i class="fab fa-linkedin-in"></i>
          <i class="fab fa-github"></i>
          <i class="fab fa-behance"></i>
        </p>
      </div>
      <div className="Container">
        <div className="col1">
          <About/>
          <Skills/>
          <Languages/>
        </div>
        <div className="col2">
          <Contact/>
          <Portfolio/>
          <Education/>
        </div>
      </div>
    </div>
  );
}

export default App;
