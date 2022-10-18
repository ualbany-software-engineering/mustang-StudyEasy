class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse = (message) => {
      const lowerCase = message.toLowerCase();
  
      if (
        lowerCase.includes("country") ||
        lowerCase.includes("Country")
      ) {
        return this.actionProvider.handleMessageParserDocs();
      }
  
      if (lowerCase.includes("resources") || lowerCase.includes("Resources")) {
        return this.actionProvider.handleActionProviderDocs();
      }
  
      if (lowerCase.includes("visa")) {
        return this.actionProvider.handleConfigDocs();
      }
      if(lowerCase.includes("hi")||lowerCase.includes("hello")||lowerCase.includes("hey")){
        return this.actionProvider.handleHello();
      }
      
      return this.actionProvider.handleDefault();
    };
  }
  
  export default MessageParser;