import actions from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.ADD_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
