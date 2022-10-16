import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Overview from "./widgets/Overview/Overview";
import MessageParserDocs from "./widgets/docs/MessageParserDocs/MessageParserDocs";
import ActionProviderDocs from "./widgets/docs/ActionProviderDocs/ActionProviderDocs";
import Config from "./widgets/docs/Config/Config";

const botName = "StudyEasy Bot";

const config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hi I'm ${botName}`
    ),
    createChatBotMessage(
      "What do you need help in?",
      {
        withAvatar: false,
        delay: 500,
        widget: "overview",
      }
    ),
  ],
  state: {
    //gist: "",
    infoBox: "",
  },
  customComponents: {},
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: [""],
    },
    {
      widgetName: "messageParser",
      widgetFunc: (props) => <MessageParserDocs {...props} />,
      mapStateToProps: ["infoBox"],
    },
    {
      widgetName: "actionProviderDocs",
      widgetFunc: (props) => <ActionProviderDocs {...props} />,
      mapStateToProps: ["infoBox"],
    },
    {
      widgetName: "config",
      widgetFunc: (props) => <Config {...props} />,
      mapStateToProps: ["infoBox"],
    },
    
  ],
};

export default config;
