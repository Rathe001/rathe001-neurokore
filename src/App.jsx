import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import { VARIABLES, JSS_RESET } from 'config/common';

import eotFont from 'assets/fonts/ManaspaceReg.eot';
import woffFont from 'assets/fonts/ManaspaceReg.woff';
import ttfFont from 'assets/fonts/ManaspaceReg.ttf';
import svgFont from 'assets/fonts/ManaspaceReg.svg';

import Ui from 'components/Ui';
import Splash from 'components/Splash';
import Dialog from 'components/Dialog';

const styles = {
  '@global': {
    ...JSS_RESET,
    '*': {
      boxSizing: 'border-box',
      imageRendering: 'pixelated',
      userSelect: 'none',
      fontFamily: 'ManaspaceReg',
      fontSize: 6,
    },
    body: {
      background: '#000',
    },
    '@font-face': {
      fontFamily: 'ManaspaceReg',
      src: `url("${eotFont}?#iefix") format("embedded-opentype"), url("${woffFont}") format("woff"), url("${ttfFont}") format("truetype"), url("${svgFont}#ManaspaceReg") format("svg")`,
      fontWeight: 'normal',
      fontStyle: 'normal',
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
  },
};

const getScaleRatio = () => {
  return window.innerWidth / window.innerHeight < VARIABLES.ui.width / VARIABLES.ui.height
    ? window.innerWidth / VARIABLES.ui.width
    : window.innerHeight / VARIABLES.ui.height;
};

const BareApp = ({ classes }) => {
  const [scaleRatio, setScaleRatio] = useState(getScaleRatio());

  useEffect(() => {
    window.addEventListener('resize', () => setScaleRatio(getScaleRatio()));

    return () => {
      window.removeEventListener('resize', () => setScaleRatio(getScaleRatio()));
    };
  }, []);
  return (
    <div className={classes.app} style={{ transform: `scale(${scaleRatio},${scaleRatio})` }}>
      <Splash />
      <Ui />
      <Dialog />
    </div>
  );
};

BareApp.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const StyledApp = withStyles(styles)(BareApp);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledApp);
