import './App.css';
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import React, { useState } from 'react';
import AnimationRoutes from './components/common/AnimationRoutes';
import  Header  from '../src/components/common/head/header.jsx' ;
//chatbot
import config from "./components/Chatbot/bots/docsbot/config";
import MessageParser from "./components/Chatbot/bots/docsbot/MessageParser";
import ActionProvider from "./components/Chatbot/bots/docsbot/ActionProvider";
import { ConditionallyRender } from "react-util-kit";
import { ReactComponent as ButtonIcon } from "./components/Chatbot/images/bot.svg";
import Chatbot from 'react-chatbot-kit';

function App() {
  const [showChatbot, toggleChatbot] = useState(true);
 
  return (
    <>
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
      <Header/>
    <div className="App">
      <AnimationRoutes/>
    </div>
    
    <div>
    <React.Fragment>
    <div className='app-chatbot-container'>
          <ConditionallyRender ifTrue={showChatbot} 
          show = {
            <Chatbot config={config} messageParser = {MessageParser} actionProvider = {ActionProvider} />
          }/>
        </div>
        <button className='app-chatbot-button' 
        onClick={() => toggleChatbot((prev) => !prev)}
        >
          <ButtonIcon className="app-chatbot-button-icon" />
        </button>
        </React.Fragment>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;