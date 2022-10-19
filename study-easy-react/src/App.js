
import './App.css';
import Headertab from './designpages/Headertab';
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import React,{ useState } from 'react';
import Extra from './Pages/Extra';
import AnimationRoutes from './components/AnimationRoutes';
import Bodytab from './designpages/bodytab';

//chatbot
import config from "./Pages/Chatbot/bots/docsbot/config";
import MessageParser from "./Pages/Chatbot/bots/docsbot/MessageParser";
import ActionProvider from "./Pages/Chatbot/bots/docsbot/ActionProvider";
import { ConditionallyRender } from "react-util-kit";
import { ReactComponent as ButtonIcon } from "./Pages/Chatbot/images/bot.svg";
import Chatbot from 'react-chatbot-kit';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
function App() {
  const [showChatbot, toggleChatbot] = useState(true);
  const slideImages = [
    {
      url:
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/11cc5325-37c6-4490-9adb-6f09ccb2a0781637049244895-luxe-banner.jpg",
      caption: "Slide 1"
    },
    {
      url:
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/7/dccf586d-d76d-49d6-9723-85e6cdd908341644241619162-Meena-Bazaar-Desktop.jpg",
      caption: "Slide 2"
    },
    {
      url:
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/3/fd2ec981-19c5-4fb8-af87-155ce3d5eb351643900805737-Desktop-banner_sale-live.jpg",
      caption: "Slide 3"
    }
  ];
  return (
    <>
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
    <Headertab/>
    <div className="App">
          <AnimationRoutes/>
    </div>
    <div>


    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}>
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>





      <React.Fragment>
    <div className="app-chatbot-container">
          <ConditionallyRender
            ifTrue={showChatbot}
            show={
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            }
          />
        </div>
        <button
          className="app-chatbot-button"
          onClick={() => toggleChatbot((prev) => !prev)}
        >
          <ButtonIcon className="app-chatbot-button-icon" />
        </button>
        </React.Fragment>
    </div>
    </BrowserRouter>
    <div>
    <Extra/>
    </div>
    </>
  );
}

export default App;