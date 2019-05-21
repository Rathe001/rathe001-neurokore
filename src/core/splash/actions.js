const actions = {
  TOGGLE_SPLASH: 'UI_TOGGLE_SPLASH',
  TOGGLE_SPLASH_SUCCESS: 'UI_TOGGLE_SPLASH_SUCCESS',
  TOGGLE_SPLASH_FAILURE: 'UI_TOGGLE_SPLASH_FAILURE',
  toggleSplash: () => ({
    type: actions.TOGGLE_SPLASH,
  }),
};

export default actions;
