import './App.css';
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import React, {useState} from 'react';
import AnimationRoutes from './components/common/AnimationRoutes';
import  Header  from '../src/components/common/head/header.jsx' ;
import { Footer } from './Footer';
import Chatbot1 from './Chatbot1'
import DayNightToggle from 'react-day-and-night-toggle'
function App() {
   window.scrollTo(0,0);
   const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <>
    
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
    {/* <DayNightToggle
      onChange={() => setIsDarkMode(!isDarkMode)}
      checked={isDarkMode}
    /> */}
      <Header/>
    <div className="App">
      <AnimationRoutes/>
    </div>
    <div>
      <Chatbot1/>
    </div>
    <div>
      <Footer/>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;