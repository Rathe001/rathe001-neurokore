import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import classnames from 'classnames';
// import dialogActions from 'core/dialog/actions';

const styles = {
  dialog: {
    position: 'absolute',
    top: 159,
    left: 11,
    width: 299,
    padding: 5,
    height: 25,
    overflow: 'hidden',
    color: 'green',
    fontSize: 5,
  },
};

const Dialog = ({ classes, showDialog, text }) => {
  return (
    <div
      className={classnames(classes.dialog, {
        [classes.hidden]: !showDialog,
      })}
    >
      {text}
    </div>
  );
};

Dialog.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  showDialog: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

const mapStateToProps = ({ dialog }) => ({
  showDialog: dialog.show,
  text: dialog.text,
});

const mapDispatchToProps = {};

const StyledDialog = withStyles(styles)(Dialog);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledDialog);
