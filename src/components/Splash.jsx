import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import classnames from 'classnames';
import uiActions from 'core/ui/actions';

const styles = {
  splash: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
    background: `#333`,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 9999,
    opacity: 1,
    transition: '1s all',
  },
  hidden: {
    opacity: 0,
    zIndex: -1,
    transform: 'scale(1.3)',
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
      Click to start
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
  toggleSplash: uiActions.toggleSplash,
};

const StyledSplash = withStyles(styles)(Splash);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledSplash);
