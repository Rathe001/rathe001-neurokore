import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import textures from 'constants/textures';
import styles from './RightWall.styles';

const useStyles = createUseStyles(styles);

/**
 * EL E ER
 * DL D DR
 * CL C CR
 * BL B BR
 * AL A AR
 */
const RightWall = ({ A, B, C, D, E }) => {
  const classes = useStyles();

  return (
    <div className={classes.rightWall}>
      <div className={classes.rightWallCenter}>
        <div
          className={classes.rightWallTileA}
          style={{
            backgroundImage: A && textures[A] ? `${textures.pRightA}, ${textures[A]}` : 'none',
          }}
        />
        <div
          className={classes.rightWallTileB}
          style={{
            backgroundImage: B && textures[B] ? `${textures.pRightB}, ${textures[B]}` : 'none',
          }}
        />
        <div
          className={classes.rightWallTileC}
          style={{
            backgroundImage: C && textures[C] ? `${textures.pRightC}, ${textures[C]}` : 'none',
          }}
        />
        <div
          className={classes.rightWallTileD}
          style={{
            backgroundImage: D && textures[D] ? `${textures.pRightD}, ${textures[D]}` : 'none',
          }}
        />
        <div
          className={classes.rightWallTileE}
          style={{
            backgroundImage: E && textures[E] ? `${textures.pRightE}, ${textures[E]}` : 'none',
          }}
        />
      </div>
    </div>
  );
};

RightWall.propTypes = {
  A: PropTypes.string,
  B: PropTypes.string,
  C: PropTypes.string,
  D: PropTypes.string,
  E: PropTypes.string,
};

RightWall.defaultProps = {
  A: '',
  B: '',
  C: '',
  D: '',
  E: '',
};

export default RightWall;
