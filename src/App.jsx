import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import classnames from 'classnames';

import uiActions from 'core/ui/actions';
import { VARIABLES } from 'config/common';
import Ui from 'components/Ui';
import Splash from 'components/Splash';

const styles = {
  '@global': {
    '*': {
      'box-sizing': 'border-box',
      'image-rendering': 'pixelated',
      'user-select': 'none',
    },
    body: {
      background: '#000',
    },
  },
  app: {
    fontSize: `${VARIABLES.ui.width * 0.1}px`,
    background: `#000`,
    fontFamily: 'VT323',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: VARIABLES.ui.width,
    height: VARIABLES.ui.height,
    margin: [-(VARIABLES.ui.height / 2), 0, 0, -(VARIABLES.ui.width / 2)],
  },
  hidden: {
    display: 'none',
  },
};

const getScaleRatio = () => {
  return window.innerWidth / window.innerHeight < VARIABLES.ui.width / VARIABLES.ui.height
    ? window.innerWidth / VARIABLES.ui.width
    : window.innerHeight / VARIABLES.ui.height;
};

const BareApp = ({ classes, showSplash, toggleSplash }) => {
  const [scaleRatio, setScaleRatio] = useState(getScaleRatio());

  useEffect(() => {
    window.addEventListener('resize', () => setScaleRatio(getScaleRatio()));

    return () => {
      window.removeEventListener('resize', () => setScaleRatio(getScaleRatio()));
    };
  }, []);
  return (
    <div className={classes.app} style={{ transform: `scale(${scaleRatio},${scaleRatio})` }}>
      <Splash onClick={toggleSplash} className={classnames({ [classes.hidden]: !showSplash })} />
      <Ui />
    </div>
  );
};

BareApp.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  showSplash: PropTypes.bool.isRequired,
  toggleSplash: PropTypes.func.isRequired,
};

const mapStateToProps = ({ ui }) => ({
  showSplash: ui.showSplash,
});

const mapDispatchToProps = {
  toggleSplash: uiActions.toggleSplash,
};

const StyledApp = withStyles(styles)(BareApp);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledApp);
