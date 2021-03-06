import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';

const Navigation = () => {
   return(
       <Router>
       <Routes>
           <Route component = { Home }  path="/" exact />
           <Route component = { About }  path="/about" />
           <Route component = { Projects }  path="/projects" />
       </Routes>
       </Router>
   )
}

export default Navigation;