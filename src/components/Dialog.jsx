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
    padding: '5px',
    height: 33,
    overflow: 'hidden',
    color: '#fff',
    fontSize: 6,
  },
};

const Dialog = ({ classes, stateDialogShow, stateDialogText }) => {
  return (
    <div
      className={classnames(classes.dialog, {
        [classes.hidden]: !stateDialogShow,
      })}
      dangerouslySetInnerHTML={{ __html: stateDialogText }}
    />
  );
};

Dialog.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  stateDialogShow: PropTypes.bool.isRequired,
  stateDialogText: PropTypes.node.isRequired,
};

const mapStateToProps = ({ dialog }) => ({
  stateDialogShow: dialog.show,
  stateDialogText: dialog.text,
});

const mapDispatchToProps = {};

const StyledDialog = withStyles(styles)(Dialog);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledDialog);
