const actions = {
  TOGGLE: 'MENU_TOGGLE',
  TOGGLE_SUCCESS: 'MENU_TOGGLE_SUCCESS',
  TOGGLE_FAILURE: 'MENU_TOGGLE_FAILURE',
  toggle: () => ({
    type: actions.TOGGLE,
  }),
};

export default actions;
