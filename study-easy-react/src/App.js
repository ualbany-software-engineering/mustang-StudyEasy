import './App.css';
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import React, {useState} from 'react';
import AnimationRoutes from './components/common/AnimationRoutes';
import  Header  from '../src/components/common/head/header.jsx' ;
import Chatbot from 'react-chatbot-kit';
import { ReactComponent as ButtonIcon } from "./components/common/Chatbot/images/bot.svg";
import {ConditionallyRender} from "react-util-kit";
import config from "./components/common/Chatbot/bots/docsbot/config"
import MessageParser from "./components/common/Chatbot/bots/docsbot/MessageParser";
import ActionProvider from "./components/common/Chatbot/bots/docsbot/ActionProvider";
import Chatbot1 from './Chatbot1';

function App() {
  const [showChatbot, toggleChatbot] = useState(false);
  window.scrollTo(0,0);
  return (
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
    <Header/>
  <div className="App">
    <AnimationRoutes/>
  </div>
  <div>
    <Chatbot1 />
  </div>
  </BrowserRouter>
  );
}

export default App;
