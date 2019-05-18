import uiActions from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case uiActions.TOGGLE_SPLASH:
      return {
        ...state,
        splash: {
          ...state.splash,
          show: !state.splash.show,
        },
      };

    case uiActions.TOGGLE_CHARACTER_CREATION:
      return {
        ...state,
        showCharacterCreation: !state.showCharacterCreation,
      };

    default:
      return state;
  }
};

export default reducer;
