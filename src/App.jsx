import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Store } from './Store';
import { StoreProvider } from './Store';

const MyApp = () => {
  const { state, dispatch } = useContext(Store);
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <h1>My app</h1>
      <p>Testing styles</p>
    </>
  );
};

const App = () => {
  return (
    <StoreProvider>
      <MyApp />
    </StoreProvider>
  );
};

App.propTypes = {};

export default App;
