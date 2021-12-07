import React from "react";
import Intro from "./pages/Intro";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import About from "./pages/About";
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Intro/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

// element={<Welcome />}
