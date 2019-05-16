import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uiActions from 'core/ui/actions';

const App = ({ splash, toggleSplash }) => {
  console.log(splash);
  return (
    <>
      <button type="button" onClick={toggleSplash}>
        TEST
      </button>
      {splash ? <span>SPLASH SCREEN!!!</span> : <span>Normal screen</span>}
    </>
  );
};

App.propTypes = {};

const mapStateToProps = ({ ui }) => ({
  splash: ui.splash,
});

const mapDispatchToProps = {
  toggleSplash: uiActions.toggleSplash,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
