class ActionCreator {
  getIrcLog() {
    return {
      type: 'GET_IRC_LOG',
    };
  }
}

export default new ActionCreator();
