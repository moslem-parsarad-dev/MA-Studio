import React from 'react';
import '../css/App.css'
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor";
import Project from './Project';
import Team from './Team';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <div className="App wow">
      <AnimatedCursor 
      color='29, 41, 153'
      />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Project />}/>
          <Route path="/team" element={<Team />}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
