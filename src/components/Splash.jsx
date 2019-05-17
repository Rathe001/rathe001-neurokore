import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import classnames from 'classnames';

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
  },
};

const Splash = ({ classes, onClick, className }) => {
  return (
    <div onClick={onClick} className={classnames(classes.splash, className)}>
      Click to start
    </div>
  );
};

Splash.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {};

const StyledSplash = withStyles(styles)(Splash);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledSplash);
