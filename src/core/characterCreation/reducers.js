import actions from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.TOGGLE_CHARACTER_CREATION:
      return {
        ...state,
        show: !state.show,
      };

    default:
      return state;
  }
};

export default reducer;
