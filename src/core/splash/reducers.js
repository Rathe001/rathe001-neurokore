import splashActions from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case splashActions.TOGGLE_SPLASH:
      console.log(state);
      return {
        ...state,
        show: !state.show,
      };

    default:
      return state;
  }
};

export default reducer;
