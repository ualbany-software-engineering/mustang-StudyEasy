import './App.css';
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import AnimationRoutes from './components/common/AnimationRoutes';

function App() {
 
  return (
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
    <div className="App">
      <AnimationRoutes/>
    </div>
    </BrowserRouter>
  );
}

export default App;