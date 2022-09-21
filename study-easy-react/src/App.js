
import './App.css';
import Headertab from './designpages/Headertab';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import React from 'react';

import AnimationRoutes from './components/AnimationRoutes';

function App() {
 
  return (
    <BrowserRouter>
    <Headertab/>
    <div className="App">
          <AnimationRoutes/>
    </div>
    </BrowserRouter>
  );
}

export default App;
