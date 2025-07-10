import React from 'react';
import Introduction from './components/introduction-component/Introduction'; 
import Skills from './components/skill-component/Skills';
import Projects from './components/projects-component/Projects';
import Contact from './components/contact-component/Contact';

function App() {
  return (
    <div className="App">
      <Introduction />
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
