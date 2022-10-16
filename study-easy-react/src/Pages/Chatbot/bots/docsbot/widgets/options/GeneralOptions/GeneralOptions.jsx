import React from "react";
import Options from "../Options/Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "Country",
      handler: props.actionProvider.handleMessageParserDocs,
      id: 1,
    },
    {
      name: "Visa",
      handler: props.actionProvider.handleConfigDocs,
      id: 2,
    },
    {
      name: "Resources",
      handler: props.actionProvider.handleActionProviderDocs,
      id: 3,
    },
   
  ];

  return <Options options={options} />;
};

export default GeneralOptions;
