import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import uiActions from 'core/ui/actions';
import VARIABLES from 'config/variables';
import background from 'assets/img/bg-ui.png';

const styles = {
  '@global': {
    '*': {
      'box-sizing': 'border-box',
      'image-rendering': 'pixelated',
      'user-select': 'none',
    },
  },
  app: {
    background: `url(${background}) 0 0 no-repeat`,
    color: 'red',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: VARIABLES.ui.width,
    height: VARIABLES.ui.height,
    margin: [-100, 0, 0, -160],
  },
};

const getScaleRatio = () => {
  return window.innerWidth / window.innerHeight < VARIABLES.ui.width / VARIABLES.ui.height
    ? window.innerWidth / VARIABLES.ui.width
    : window.innerHeight / VARIABLES.ui.height;
};

const BareApp = ({ classes, splash, toggleSplash }) => {
  const [scaleRatio, setScaleRatio] = useState(getScaleRatio());

  useEffect(() => {
    window.addEventListener('resize', () => setScaleRatio(getScaleRatio()));

    return () => {
      window.removeEventListener('resize', () => setScaleRatio(getScaleRatio()));
    };
  }, []);
  return (
    <div className={classes.app} style={{ transform: `scale(${scaleRatio},${scaleRatio})` }}>
      <button type="button" onClick={toggleSplash}>
        TEST
      </button>
      {splash ? <span>SPLASH SCREEN!!!</span> : <span>Normal screen</span>}
    </div>
  );
};

BareApp.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  splash: PropTypes.bool.isRequired,
  toggleSplash: PropTypes.func.isRequired,
};

const mapStateToProps = ({ ui }) => ({
  splash: ui.splash,
});

const mapDispatchToProps = {
  toggleSplash: uiActions.toggleSplash,
};

const StyledApp = withStyles(styles)(BareApp);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledApp);
