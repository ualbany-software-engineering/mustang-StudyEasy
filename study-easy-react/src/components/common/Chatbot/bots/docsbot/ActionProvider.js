class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    handleHello = () => {
      const messages = this.createChatBotMessage("Hey! Select a option.",
      {
        withAvatar: true,
        widget: "overview",});
        this.addMessageToBotState(messages);
    }
    handleMessageParserDocs = () => {
      const messages = this.createChatBotMessage(
        "Select a Country from the following link!",
        { widget: "messageParser", withAvatar: true }
      );
  
      this.addMessageToBotState(messages);
    };
  
    handleActionProviderDocs = () => {
      const messages = [
        this.createChatBotMessage(
          "Resources Available",
          { widget: "actionProviderDocs", withAvatar: true }
        ),
      ];
  
      this.addMessageToBotState(messages);
    };
    handleTrendingDocs = () => {
      const messages = [
        this.createChatBotMessage(
          "Clck here to view the Trending Colleges",
          { widget: "TrendingDocs", withAvatar: true }
        ),
      ];
  
      this.addMessageToBotState(messages);
    };
    handleConfigDocs = () => {
      const messages = this.createChatBotMessage(
        "Select a Country from the following link to view Visa Details",
        { widget: "config", withAvatar: true }
      );
      this.addMessageToBotState(messages);
    };
    
    handleLoginDocs=()=>{
      const messages=this.createChatBotMessage(
        "Click here to Login/SignUp!", 
        {widget: "LoginDocs", withAvatar:true}
      );
      this.addMessageToBotState(messages);
    };
  
  
    handleDefault = () => {
      const message = this.createChatBotMessage(
        "Sorry! cannot get you. You can try this options",
        {
          withAvatar: true,
          widget: "overview",
        }
      );
  
      this.addMessageToBotState(message);
    };
  
    addMessageToBotState = (messages, newState) => {
      if (Array.isArray(messages)) {
        this.setState((state) => ({
          ...state,
          ...newState,
          messages: [...state.messages, ...messages],
          gist: "",
          infoBox: "",
        }));
      } else {
        this.setState((state) => ({
          ...state,
          ...newState,
          messages: [...state.messages, messages],
          gist: "",
          infoBox: "",
        }));
      }
    };
  }
  
  export default ActionProvider;