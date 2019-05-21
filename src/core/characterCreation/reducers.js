import characterCreationActions from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case characterCreationActions.TOGGLE_CHARACTER_CREATION:
      return {
        ...state,
        show: !state.show,
      };

    default:
      return state;
  }
};

export default reducer;
