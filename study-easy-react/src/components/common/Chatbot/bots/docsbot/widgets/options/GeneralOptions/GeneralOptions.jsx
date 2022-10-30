import React from "react";
import Options from "../Options/Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "Country",
      handler: props.actionProvider.handleMessageParserDocs,
      id: 1,
    },
    // {
    //   name: "Visa",
    //   handler: props.actionProvider.handleParserDocs,
    //   id: 2,
    // },
    {
      name: "Trending Colleges",
      handler: props.actionProvider.handleTrendingDocs,
      id:5,
    },
    {
      name: "Resources",
      handler: props.actionProvider.handleActionProviderDocs,
      id: 3,
    },
    {
      name: "Login/Signup",
      handler: props.actionProvider.handleLoginDocs,
      id: 4,
    },
    
   
  ];

  return <Options options={options} />;
};

export default GeneralOptions;