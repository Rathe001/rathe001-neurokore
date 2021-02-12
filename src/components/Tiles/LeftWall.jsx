import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import textures from 'constants/textures';
import styles from './LeftWall.styles';

const useStyles = createUseStyles(styles);

/**
 * EL E ER
 * DL D DR
 * CL C CR
 * BL B BR
 * AL A AR
 */
const LeftWall = ({
  A, B, C, D, E,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.leftWall}>
      <div className={classes.leftWallCenter}>
        <div
          className={classes.leftWallTileA}
          style={{
            backgroundImage: A && textures[A] ? `${textures.pLeftA}, ${textures[A]}` : 'none',
          }}
        />
        <div
          className={classes.leftWallTileB}
          style={{
            backgroundImage: B && textures[B] ? `${textures.pLeftB}, ${textures[B]}` : 'none',
          }}
        />
        <div
          className={classes.leftWallTileC}
          style={{
            backgroundImage: C && textures[C] ? `${textures.pLeftC}, ${textures[C]}` : 'none',
          }}
        />
        <div
          className={classes.leftWallTileD}
          style={{
            backgroundImage: D && textures[D] ? `${textures.pLeftD}, ${textures[D]}` : 'none',
          }}
        />
        <div
          className={classes.leftWallTileE}
          style={{
            backgroundImage: E && textures[E] ? `${textures.pLeftE}, ${textures[E]}` : 'none',
          }}
        />
      </div>
    </div>
  );
};

LeftWall.propTypes = {
  A: PropTypes.string,
  B: PropTypes.string,
  C: PropTypes.string,
  D: PropTypes.string,
  E: PropTypes.string,
};

LeftWall.defaultProps = {
  A: '',
  B: '',
  C: '',
  D: '',
  E: '',
};

export default LeftWall;
