import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import { JSS_RESET, JSS_GLOBAL } from 'constants/styles';
import { VARIABLES } from 'constants/config';
import uiActions from 'core/ui/actions';
import bodyBackground from 'assets/img/body-bg.jpg';

import Ui from 'components/Ui';
import Splash from 'components/Splash';

const styles = {
  '@global': {
    ...JSS_RESET,
    ...JSS_GLOBAL,
    body: {
      background: `url(${bodyBackground}) 0 0 no-repeat`,
      backgroundSize: '100%',
    },
  },
  app: {
    fontSize: `${VARIABLES.ui.width * 0.1}px`,
    background: `#000`,
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: VARIABLES.ui.width,
    height: VARIABLES.ui.height,
    margin: [-(VARIABLES.ui.height / 2), 0, 0, -(VARIABLES.ui.width / 2)],
    overflow: 'hidden',
    boxShadow: '0 0 30px #000',
    outline: '2px solid rgba(0, 0, 0, 0.3)',
  },
};

const getScaleRatio = () => {
  return window.innerWidth / window.innerHeight < VARIABLES.ui.width / VARIABLES.ui.height
    ? window.innerWidth / VARIABLES.ui.width
    : window.innerHeight / VARIABLES.ui.height;
};

const BareApp = ({ classes, dispatchUiSetScale, stateUiScale }) => {
  useEffect(() => {
    window.addEventListener('resize', () => dispatchUiSetScale(getScaleRatio()));
  }, [stateUiScale]);

  return (
    <div
      className={classes.app}
      style={{
        zoom: `${!stateUiScale ? getScaleRatio() : stateUiScale}`,
      }}
    >
      <Splash />
      <Ui />
    </div>
  );
};

BareApp.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  stateUiScale: PropTypes.number,
  dispatchUiSetScale: PropTypes.func.isRequired,
};

BareApp.defaultProps = {
  stateUiScale: getScaleRatio(),
};

const mapStateToProps = ({ ui }) => ({
  stateUiScale: ui.scale,
});

const mapDispatchToProps = {
  dispatchUiSetScale: uiActions.setScale,
};

const StyledApp = withStyles(styles)(BareApp);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledApp);
