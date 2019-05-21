import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import classnames from 'classnames';
import dialogActions from 'core/dialog/actions';

const styles = {
  dialog: {
    position: 'absolute',
    width: 100,
    height: 100,
    background: 'red',
  },
};

const Dialog = ({ classes, toggleSplash, showSplash }) => {
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

Dialog.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  toggleSplash: PropTypes.func.isRequired,
  showSplash: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ ui }) => ({
  showDialog: ui.dialog.show,
});

const mapDispatchToProps = {
  toggleDialog: dialogActions.toggleDialog,
};

const StyledSplash = withStyles(styles)(Dialog);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledSplash);
