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
      "Choose the Country",
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

  handleConfigDocs = () => {
    const messages = this.createChatBotMessage(
      "Visa Details",
      { widget: "config", withAvatar: true }
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
