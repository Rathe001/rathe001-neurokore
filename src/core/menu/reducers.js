import actions from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.SHOW:
      return {
        ...state,
        show: true,
      };
    case actions.HIDE:
      return {
        ...state,
        show: false,
      };
    case actions.TOGGLE_MUSIC:
      return {
        ...state,
        music: !state.music,
      };
    case actions.TOGGLE_SOUND:
      return {
        ...state,
        sound: !state.sound,
      };
    case actions.TOGGLE_HELP:
      return {
        ...state,
        help: !state.help,
      };

    default:
      return state;
  }
};

export default reducer;
