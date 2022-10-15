import { createChatBotMessage } from "react-chatbot-kit";
import '../bot/custom.css';
const botName ='GeekyBot';
const config = {
    botName: 'GeekyBot',
    initialMessages: [createChatBotMessage("Welcome to StudyEasy"),
createChatBotMessage("Here is a list to navigate through StudyEasy Portal, which might help you"),
createChatBotMessage("Enter '1': for countries list \n Enter '2': to access resources \n  Enter '3': to get the visa information"),
//createChatBotMessage(<a href="http://localhost:3000/mustang-StudyEasy/Country" class="links">List of Countries</a>),
//createChatBotMessage(<a href="http://localhost:3000/mustang-StudyEasy/Resources" class="links">Resources</a>),
//createChatBotMessage("Couldn't find what you're looking for? Ask me I might be able to help you!"),
],
    customStyles: {
        botMessageBox: {
            backgroundColor: '#000000',
        },
        chatButton: {
            backgroundColor: '#000000',
        }
    }, 
    customComponents: {
        header: () => <div style={{backgroundColor: 'black', padding: "5px", borderRadius: "3px", height: '30px', color: "white" ,}}>GeekyBot</div>,
       
    }

    

};
export default config;