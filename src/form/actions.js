const actions = {
  increment: payload => ({
    type: 'increment',
    data: payload,
  }),
  decrement: payload => ({
    type: 'decrement',
    data: payload,
  }),
};

export default actions;
