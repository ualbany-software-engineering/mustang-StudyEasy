import React, {useState} from 'react';
import './App.css';
import Chatbot from 'react-chatbot-kit';
import { ReactComponent as ButtonIcon } from "./components/common/Chatbot/images/bot.svg";
import {ConditionallyRender} from "react-util-kit";
import config from "./components/common/Chatbot/bots/docsbot/config"
import MessageParser from "./components/common/Chatbot/bots/docsbot/MessageParser";
import ActionProvider from "./components/common/Chatbot/bots/docsbot/ActionProvider";
function Chatbot1(){
  const [showChatbot, toggleChatbot] = useState(false);
  return (
    <div>
      <div className='app-chatbot-container'>

<ConditionallyRender ifTrue={showChatbot}
show={
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
    </div>
  )
}
export default Chatbot1;
