const actions = {
  TOGGLE: 'CHARACTER_SHEET_TOGGLE',
  toggle: (payload) => ({
    type: actions.TOGGLE,
    payload,
  }),

  SHOW: 'CHARACTER_SHEET_SHOW',
  show: (payload) => ({
    type: actions.SHOW,
    payload,
  }),
};

export default actions;
