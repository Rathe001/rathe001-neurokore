import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import classnames from 'classnames';
import splashActions from 'core/splash/actions';
import splashBg from 'assets/img/bg-splash.png';

const styles = {
  splash: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 9999,
    opacity: 1,
    transition: '1s all',
    background: `url(${splashBg}) 0 0 no-repeat`,
    backgroundSize: 'auto 100%',
  },
  hidden: {
    opacity: 0,
    zIndex: -1,
    transform: 'scale(1.3)',
  },
  logo: {
    fontSize: 24,
  },
  start: {
    textShadow: '0 0 6px rgba(0, 0, 0, 0.9)',
    opacity: 1,
    animation: 'flickerAnimation 1s infinite',
    fontSize: 16,
    display: 'block',
  },

  '@keyframes flickerAnimation': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
};

const Splash = ({ classes, toggleSplash, showSplash }) => {
  return (
    <div
      onClick={toggleSplash}
      className={classnames(classes.splash, {
        [classes.hidden]: !showSplash,
      })}
    >
      <span className={classes.logo}>[Insert Title Here]</span>
      <span className={classes.start}>Click to start</span>
    </div>
  );
};

Splash.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  toggleSplash: PropTypes.func.isRequired,
  showSplash: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ ui }) => ({
  showSplash: ui.splash.show,
});

const mapDispatchToProps = {
  toggleSplash: splashActions.toggleSplash,
};

const StyledSplash = withStyles(styles)(Splash);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledSplash);
