import './App.css';
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import AnimationRoutes from './components/common/AnimationRoutes';
import  Header  from '../src/components/common/head/header.jsx' ;

function App() {
  window.scrollTo(0,0);
  return (
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
      <Header/>
    <div className="App">
      <AnimationRoutes/>
    </div>
    </BrowserRouter>
  );
}

export default App;