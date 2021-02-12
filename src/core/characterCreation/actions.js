const actions = {
  TOGGLE: 'CHARACTER_CREATION_TOGGLE',
  toggle: () => ({
    type: actions.TOGGLE,
  }),

  SETATTR: 'CHARACTER_CREATION_SETATTR',
  setAttr: (key, val) => ({
    type: actions.SETATTR,
    payload: {
      [key]: val,
    },
  }),

  ADD_CHARACTER: 'CHARACTER_CREATION_ADD_CHARACTER',
  addCharacter: (payload) => ({
    type: actions.ADD_CHARACTER,
    payload,
  }),

  RESET: 'CHARACTER_CREATION_RESET',
  reset: () => ({
    type: actions.RESET,
  }),
};

export default actions;
