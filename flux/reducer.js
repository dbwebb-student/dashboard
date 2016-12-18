const reducer = function reducer(state, action) {
  switch (action.type) {
    case 'GET_IRC_LOG':
      console.log('test');
      return Object.assign({}, state, {
        hej: 'hej',
      });

    default:
      return state;
  };
};

export default reducer;
