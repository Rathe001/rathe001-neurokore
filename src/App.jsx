import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import { JSS_RESET, JSS_GLOBAL } from 'constants/styles';
import { VARIABLES } from 'constants/config';
import uiActions from 'core/ui/actions';

import Ui from 'components/Ui';
import Splash from 'components/Splash';

const styles = {
  '@global': {
    ...JSS_RESET,
    ...JSS_GLOBAL,
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
  },
};

const getScaleRatio = () => {
  return window.innerWidth / window.innerHeight < VARIABLES.ui.width / VARIABLES.ui.height
    ? window.innerWidth / VARIABLES.ui.width
    : window.innerHeight / VARIABLES.ui.height;
};

const BareApp = ({ classes, setScale, scale }) => {
  useEffect(() => {
    window.addEventListener('resize', () => setScale(getScaleRatio()));
  }, [scale]);

  return (
    <div
      className={classes.app}
      style={{
        zoom: `${!scale ? getScaleRatio() : scale}`,
      }}
    >
      <Splash />
      <Ui />
    </div>
  );
};

BareApp.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  setScale: PropTypes.func.isRequired,
  scale: PropTypes.number,
};

BareApp.defaultProps = {
  scale: getScaleRatio(),
};

const mapStateToProps = ({ ui }) => ({
  scale: ui.scale,
});

const mapDispatchToProps = {
  setScale: uiActions.setScale,
};

const StyledApp = withStyles(styles)(BareApp);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledApp);
