const actions = {
  SET_TEXT: 'TOOLTIP_SET_TEXT',
  setText: data => ({
    type: actions.SET_TEXT,
    payload: data,
  }),
};

export default actions;
