import React from "react";
const MessageParser = ({ children, actions}) => {
    const parse = (message) => {
       if(message.toLowerCase().includes('hello')){
       // console.log('hi how can I help you?');
       actions.handleHello();
       } 
       else if(message.includes('1')){
        
        actions.handleCountries();
        } 
    };
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse, 
                    actions: {},
                });
            })}
        </div>
    );
};
export default MessageParser;