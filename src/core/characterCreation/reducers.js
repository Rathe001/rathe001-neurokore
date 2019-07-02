import actions from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.TOGGLE:
      return {
        ...state,
        show: !state.show,
      };

    case actions.SETATTR:
      return {
        ...state,
        ...action.payload,
      };

    case actions.RESET:
      return {
        ...state,
        name: '',
        remaining: 50,
        STR: 0,
        DEX: 0,
        INT: 0,
        MAR: 0,
        ENE: 0,
        KIN: 0,
        LOT: 0,
        HIT: 0,
        LEA: 0,
      };

    default:
      return state;
  }
};

export default reducer;
