const actions = {
  SHOW: 'MENU_SHOW',
  show: () => {
    return {
      type: actions.SHOW,
    };
  },
  HIDE: 'MENU_HIDE',
  hide: () => {
    return {
      type: actions.HIDE,
    };
  },

  TOGGLE: 'MENU_TOGGLE',
  toggle: () => {
    return {
      type: actions.TOGGLE,
    };
  },

  SAVE_GAME: 'MENU_SAVE_GAME',
  saveGame: (name, index) => ({
    type: actions.SAVE_GAME,
    payload: {
      name,
      index,
    },
  }),

  LOAD_GAME: 'MENU_LOAD_GAME',
  loadGame: payload => ({
    type: actions.LOAD_GAME,
    payload,
  }),

  TOGGLE_SOUND: 'MENU_TOGGLE_SOUND',
  toggleSound: () => ({
    type: actions.TOGGLE_SOUND,
  }),

  TOGGLE_MUSIC: 'MENU_TOGGLE_MUSIC',
  toggleMusic: () => ({
    type: actions.TOGGLE_MUSIC,
  }),

  TOGGLE_HELP: 'MENU_TOGGLE_HELP',
  toggleHelp: () => ({
    type: actions.TOGGLE_HELP,
  }),
};

export default actions;
