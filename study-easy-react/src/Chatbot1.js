import React, {useState} from 'react';
import Chatbot from 'react-chatbot-kit';
import {ConditionallyRender} from "react-util-kit";
import config from "./components/common/Chatbot/bots/docsbot/config"
import MessageParser from "./components/common/Chatbot/bots/docsbot/MessageParser";
import ActionProvider from "./components/common/Chatbot/bots/docsbot/ActionProvider";
import { ReactComponent as ButtonIcon } from "./components/common/Chatbot/images/bot.svg";
function Chatbot1() {
    const [showChatbot, toggleChatbot] = useState(false);
    return (
        <>
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
</>
    );
}
export default Chatbot1;