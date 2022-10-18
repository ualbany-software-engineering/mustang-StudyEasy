
import './App.css';
import Headertab from './designpages/Headertab';
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import React, { useState } from 'react';

import AnimationRoutes from './components/AnimationRoutes';
import Bodytab from './designpages/bodytab';

import config from "./Pages/Chatbot/bots/docsbot/config";
import MessageParser from "./Pages/Chatbot/bots/docsbot/MessageParser";
import ActionProvider from "./Pages/Chatbot/bots/docsbot/ActionProvider";
import { ConditionallyRender } from "react-util-kit";
import { ReactComponent as ButtonIcon } from "./Pages/Chatbot/images/bot.svg";
import Chatbot from 'react-chatbot-kit';
function App() {
 const [showChatbot, toggleChatbot] = useState(true);
  return (
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
    <Headertab/>
    <div className="App">
          <AnimationRoutes/>
    </div>
    <div>
      <React.Fragment>
        <div className='app-chatbot-container'>
          <ConditionallyRender ifTrue={showChatbot} 
          show = {
            <Chatbot 
            config={config}
            messageParser = {MessageParser}
            actionProvider = {ActionProvider} 
            />
          }
          />
        </div>
        <button className='app-chatbot-button' 
        onClick={() => toggleChatbot((prev) => !prev)}
        >
          <ButtonIcon className="app-chatbot-button-icon" />
        </button>
      </React.Fragment>
    </div>
    </BrowserRouter>
  );
}

export default App;