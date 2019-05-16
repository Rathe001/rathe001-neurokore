import uiActions from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case uiActions.TOGGLE_SPLASH:
      return {
        ...state,
        splash: !state.splash,
      };

    default:
      return state;
  }
};

export default reducer;
