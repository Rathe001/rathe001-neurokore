const actions = {
  TOGGLE: 'DIALOG_TOGGLE',
  toggle: () => ({
    type: actions.TOGGLE,
  }),

  SET_TEXT: 'DIALOG_SET_TEXT',
  setText: (data) => ({
    type: actions.SET_TEXT,
    payload: data,
  }),

  UNDO_SET_TEXT: 'DIALOG_UNDO_SET_TEXT',
  undoSetText: () => ({
    type: actions.UNDO_SET_TEXT,
  }),
};

export default actions;
