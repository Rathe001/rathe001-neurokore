import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import uiActions from 'core/ui/actions';

const styles = {
  app: {
    background: 'green',
    color: 'red',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 320,
    height: 200,
    margin: [-100, 0, 0, -160],
  },
};

const getScaleRatio = () => {
  const scaleRatio =
    window.innerWidth / window.innerHeight < styles.app.width / styles.app.height
      ? window.innerWidth / styles.app.width
      : window.innerHeight / styles.app.height;

  return scaleRatio;
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
