import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import About from './About';
import Game from './Game';
import Home from './Home';
import How from './How';

const Views = () => {
  const navigate = useNavigate();
  return (
  
  <Routes>
      
        <Route path="/" element={<Home />}>
          <Route path="game" element={<Game />}/> 
          <Route path="about" element={<About />} />          
          <Route path="how" element={<How />} />                 
       </Route>
      
  </Routes>

  )
};

export default Views;
