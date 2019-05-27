const actions = {
  TOGGLE: 'INVENTORY_TOGGLE',
  toggle: payload => ({
    type: actions.TOGGLE,
    payload,
  }),
};

export default actions;
