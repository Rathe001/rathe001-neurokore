import actions from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.SET_SCALE:
      return {
        ...state,
        scale: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
