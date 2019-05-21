import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import classnames from 'classnames';
import uiActions from 'core/ui/actions';

const styles = {
  dialog: {
    position: 'absolute',
    width: 100,
    height: 100,
    background: 'red',
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
  toggleSplash: uiActions.toggleSplash,
};

const StyledSplash = withStyles(styles)(Splash);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledSplash);
