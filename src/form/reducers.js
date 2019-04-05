export const initialState = {
  firstCount: 0,
  secondCount: 100,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        secondCount: state.secondCount + action.data,
      };
    case 'decrement':
      return {
        ...state,
        secondCount: state.secondCount - action.data,
      };
    case 'reset':
      return 0;
    default:
      console.log(action);
      throw new Error('Unexpected action');
  }
};

export default { initialState, reducer };
