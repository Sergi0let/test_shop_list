const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.value,
      };
    default:
      return state;
  }
};

export default reducer;
