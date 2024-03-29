// App.js
import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';

 const App = () => {

  
  return (
    

      <Router>
      
        <Routes> 
         
          
          <Route exact path="/" element={<Home/>} />
          
          <Route exact path="/game" element={<Game/>} />
         
          
        </Routes> 
        
      </Router>

    
  );
};



export default App