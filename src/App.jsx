import React, { useReducer } from 'react';
import './App.css';

import { initialState, reducer } from './form/reducers';
import actions from './form/actions';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { firstCount, secondCount } = state;

  const handleButtonAddClick = () => {
    dispatch(actions.increment(5));
  };

  const handleButtonSubtractClick = () => {
    dispatch(actions.decrement(10));
  };
  // Use the Consumer to grab the value from context
  // Notice this component didn't get any props!
  return (
    <>
      <p>
        total is {firstCount} {secondCount}
      </p>
      <button type="button" onClick={handleButtonAddClick}>
        Add
      </button>
      <button type="button" onClick={handleButtonSubtractClick}>
        Subtract
      </button>
    </>
  );
};

export default App;
