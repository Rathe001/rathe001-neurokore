import actions from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.SET_TEXT:
      return {
        ...state,
        text: action.payload,
        show: action.payload !== '',
      };

    default:
      return state;
  }
};

export default reducer;
