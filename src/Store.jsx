import React from 'react';
import PropTypes from 'prop-types';

export const Store = React.createContext();

const initialState = {
  myStateParam: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'MY_ACTION':
      return {
        ...state,
        myStateParam: 'yes',
      };
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
