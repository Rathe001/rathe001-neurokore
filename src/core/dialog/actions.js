const actions = {
  TOGGLE: 'DIALOG_TOGGLE',
  TOGGLE_SUCCESS: 'DIALOG_TOGGLE_SUCCESS',
  TOGGLE_FAILURE: 'DIALOG_TOGGLE_FAILURE',
  toggle: () => ({
    type: actions.TOGGLE,
  }),

  SET_TEXT: 'DIALOG_SET_TEXT',
  SET_TEXT_SUCCESS: 'DIALOG_SET_TEXT_SUCCESS',
  SET_TEXT_FAILURE: 'DIALOG_SET_TEXT_FAILURE',
  setText: data => ({
    type: actions.SET_TEXT,
    payload: data,
  }),

  UNDO_SET_TEXT: 'DIALOG_UNDO_SET_TEXT',
  UNDO_SET_TEXT_SUCCESS: 'DIALOG_UNDO_SET_TEXT_SUCCESS',
  UNDO_SET_TEXT_FAILURE: 'DIALOG_UNDO_SET_TEXT_FAILURE',
  undoSetText: () => ({
    type: actions.UNDO_SET_TEXT,
  }),
};

export default actions;
