const actions = {
  SET_TEXT: 'TOOLTIP_SET_TEXT',
  SET_TEXT_SUCCESS: 'TOOLTIP_SET_TEXT_SUCCESS',
  SET_TEXT_FAILURE: 'TOOLTIP_SET_TEXT_FAILURE',
  setText: data => ({
    type: actions.SET_TEXT,
    payload: data,
  }),
};

export default actions;
