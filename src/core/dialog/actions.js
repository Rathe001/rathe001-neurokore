const actions = {
  TOGGLE_DIALOG: 'UI_TOGGLE_DIALOG',
  TOGGLE_DIALOG_SUCCESS: 'UI_TOGGLE_DIALOG_SUCCESS',
  TOGGLE_DIALOG_FAILURE: 'UI_TOGGLE_DIALOG_FAILURE',
  toggleDialog: () => ({
    type: actions.TOGGLE_DIALOG,
  }),
};

export default actions;
