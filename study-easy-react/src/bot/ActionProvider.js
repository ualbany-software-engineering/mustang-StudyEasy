import React from "react";
import '../bot/custom.css';

const ActionProvider = ({ createChatBotMessage, setState, children}) => {
    const handleHello = () => {
        const botMessage = createChatBotMessage('hi how can I help you?');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage], 
        }));
    };
    const handleNull = () => {
        const botMessage = createChatBotMessage('Sorry I was unable to find what you are looking for..');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage], 
        }));
    };
    const handleCountries = () => {
        const botMessage = createChatBotMessage( <>Here is the link to the countries: 
        <br/>
        <a class="links" href="http://localhost:3000/mustang-StudyEasy/Univ/USA">List of Colleges in USA</a> 
        <br/> 
        <a class="links" href="http://localhost:3000/mustang-StudyEasy/Univ/IND">List of Colleges in INDIA</a>
        <br/>
        <a class="links" href="http://localhost:3000/mustang-StudyEasy/Univ/CHI">List of Colleges in CHINA</a>
        <br/>
        <a class="links" href="http://localhost:3000/mustang-StudyEasy/Univ/CAN">List of Colleges in CANADA</a>
        <br/>
        <a class="links" href="http://localhost:3000/mustang-StudyEasy/Univ/UK">List of Colleges in UK</a>
        <br/>
        <a class="links" href="http://localhost:3000/mustang-StudyEasy/Univ/AUS">List of Colleges in AUSTRALIA</a>
        </>)
       
    
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage], 
        }));
    };
    const handleResources = () => {
        const botMessage = createChatBotMessage(<>I have a list of study resources available for you: <br/>
        <a href="http://localhost:3000/mustang-StudyEasy/gre" class="links">GRE Study Materials</a>
        <br/>
        <a href="http://localhost:3000/mustang-StudyEasy/ielts" class="links">IELTS Study Materials</a>
        <br/>
        <a href="http://localhost:3000/mustang-StudyEasy/gmat" class="links">GMAT Study Materials</a>
        </>);
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage], 
        }));
    };
    const handleVisa = () => {
        const botMessage = createChatBotMessage(<>You want to get Visa Information for which country? <br/>
        <a href="http://localhost:3000/mustang-StudyEasy/usavisa" class="links">USA VISA INFORMATION</a>
        <br/>
        <a href="http://localhost:3000/mustang-StudyEasy/indiavisa" class="links">INDIAN VISA INFORMATION</a>
        <br/>
        <a href="http://localhost:3000/mustang-StudyEasy/chinavisa" class="links">CHINA VISA INFORMATION</a>
        <br/>
        <a href="http://localhost:3000/mustang-StudyEasy/canadavisa" class="links">CANADA VISA INFORMATION</a>
        <br/>
        <a href="http://localhost:3000/mustang-StudyEasy/ukvisa" class="links">UK VISA INFORMATION</a>
        <br/>
        <a href="http://localhost:3000/mustang-StudyEasy/canadavisa" class="links">AUSTRALIA VISA INFORMATION</a>
        </>);
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
                        handleResources,
                        handleVisa, 
                        handleNull
                    },
                });
            })}
        </div>
    );
};
export default ActionProvider;