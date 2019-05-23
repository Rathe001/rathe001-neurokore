import actions from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.TOGGLE:
      return {
        ...state,
        show: !state.show,
      };

    case actions.SET_TEXT:
      return {
        ...state,
        prevText: state.text,
        text: action.payload,
      };

    case actions.UNDO_SET_TEXT:
      return {
        ...state,
        prevText: state.text,
        text: state.prevText,
      };

    default:
      return state;
  }
};

export default reducer;
