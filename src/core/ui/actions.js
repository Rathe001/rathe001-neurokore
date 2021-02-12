const actions = {
  SET_SCALE: 'UI_SET_SCALE',
  setScale: (data) => ({
    type: actions.SET_SCALE,
    payload: data,
  }),
};

export default actions;
