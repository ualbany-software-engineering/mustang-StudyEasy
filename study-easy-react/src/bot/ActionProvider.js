import React from "react";
const ActionProvider = ({ createChatBotMessage, setState, children}) => {
    const handleHello = () => {
        const botMessage = createChatBotMessage('hi how can I help you?');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage], 
        }));
    };
    const handleCountries = () => {
        //const botMessage = createChatBotMessage('Here is a list of countries:USA \n INDIA \n CHINA \n CANADA \n UK \n AUSTRALIA');
        const botMessage = createChatBotMessage( <>Here is the link to the countries: <br/> 
        <a href="http://localhost:3000/mustang-StudyEasy/Univ/USA">USA</a> 
        <br/> 
        <a href="http://localhost:3000/mustang-StudyEasy/Univ/IND">INDIA</a>
        <br/>
        <a href="http://localhost:3000/mustang-StudyEasy/Univ/CHI">CHINA</a>
        <br/>
        <a href="http://localhost:3000/mustang-StudyEasy/Univ/CAN">CANADA</a>
        <br/>
        <a href="http://localhost:3000/mustang-StudyEasy/Univ/UK">UK</a>
        <br/>
        <a href="http://localhost:3000/mustang-StudyEasy/Univ/AUS">AUSTRALIA</a>
        </>)
       
    
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage], 
        }));
    };
    return (
        <div>
            {React.Children.map(children, (child)=>{
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleCountries,
                    },
                });
            })}
        </div>
    );
};
export default ActionProvider;