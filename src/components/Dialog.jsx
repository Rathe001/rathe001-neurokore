import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import classnames from 'classnames';
import dialogActions from 'core/dialog/actions';

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
  },
};

const Dialog = ({ classes, showDialog }) => {
  return (
    <div
      className={classnames(classes.dialog, {
        [classes.hidden]: !showDialog,
      })}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis rhoncus sem quis
        facilisis. Vivamus eu tortor id purus rhoncus rhoncus. Morbi nec rhoncus felis. Aenean eu
        placerat metus. Nunc vitae ipsum congue, sagittis mauris eu, volutpat tortor. In tincidunt
        rutrum mi ac imperdiet. Fusce commodo placerat dolor ut lobortis. Maecenas ut nulla id lorem
        porttitor hendrerit sit amet nec dolor.
      </p>
    </div>
  );
};

Dialog.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  showDialog: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ dialog }) => ({
  showDialog: dialog.show,
});

const mapDispatchToProps = {};

const StyledDialog = withStyles(styles)(Dialog);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledDialog);
