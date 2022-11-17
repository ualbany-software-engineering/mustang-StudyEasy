import './App.css';
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import React, {useState} from 'react';
import AnimationRoutes from './components/common/AnimationRoutes';
import  Header  from '../src/components/common/head/header.jsx' ;
import Chatbot1 from "./Chatbot1"
import { html } from 'wikipedia/dist';
import { Mono } from './mono';
function App() {
  const [showChatbot, toggleChatbot] = useState(false);
  window.scrollTo(0,0);
  
function myfunction(){
  var ele=document.body;
  ele.classList.toggle("blind");
}



  return (
  <>
    <div>
    <Mono/>
    </div>
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
    <Header/>
  <div className="App">
    <AnimationRoutes/>
  </div>
  <div>
  <div>
      <Chatbot1/>
    </div>
  </div>
  </BrowserRouter>
  </>
  );
}

export default App;
