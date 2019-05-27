import actions from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.TOGGLE:
      return {
        ...state,
        show: !state.show,
        character: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
