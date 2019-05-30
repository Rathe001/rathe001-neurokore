const actions = {
  TOGGLE: 'INVENTORY_TOGGLE',
  toggle: payload => ({
    type: actions.TOGGLE,
    payload,
  }),

  SHOW: 'INVENTORY_SHOW',
  show: payload => ({
    type: actions.SHOW,
    payload,
  }),
};

export default actions;
