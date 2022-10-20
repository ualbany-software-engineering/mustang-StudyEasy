import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Overview from "./widgets/Overview/Overview";
import MessageParserDocs from "./widgets/docs/MessageParserDocs/MessageParserDocs";
import ActionProviderDocs from "./widgets/docs/ActionProviderDocs/ActionProviderDocs";
import Config from "./widgets/docs/Config/Config";
const botName ='GeekyBot';
const config = {
    botName: 'GeekyBot',
    initialMessages: [createChatBotMessage("Welcome to StudyEasy"),
    createChatBotMessage("What can I help you with?",{
        withAvatar: false,
        delay: 500,
        widget: "overview",
    }),
//createChatBotMessage("Here is a list to navigate through StudyEasy Portal, which might help you"),
//createChatBotMessage("Enter '1': for countries list \n Enter '2': to access resources \n  Enter '3': to get the visa information"),
//createChatBotMessage(<a href="http://localhost:3000/mustang-StudyEasy/Country" class="links">List of Countries</a>),
//createChatBotMessage(<a href="http://localhost:3000/mustang-StudyEasy/Resources" class="links">Resources</a>),
//createChatBotMessage("Couldn't find what you're looking for? Ask me I might be able to help you!"),
],
state: {
infoBox: "",
},
    customStyles: {
        botMessageBox: {
            backgroundColor: '#0066CC',
        },
        chatButton: {
            backgroundColor: '#0066CC',
        }
    }, 
    customComponents: {
        header: () => <div style={{cursor:"default",backgroundColor: '#0066CC', padding: "5px", borderRadius: "3px", height: '30px', color: "white" , fontWeight: "bold", letterSpacing:"2.5px", fontSize:"18px"}}>GeekyBot</div>,
       
    },
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