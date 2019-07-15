import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './LeftWall.styles';

const useStyles = createUseStyles(styles);

/**
 * EL E ER
 * DL D DR
 * CL C CR
 * BL B BR
 * AL A AR
 */
const LeftWall = ({ A, B, C, D, E }) => {
  const classes = useStyles();

  return (
    <div className={classes.leftWall}>
      <div className={classes.leftWallCenter}>
        <div className={classnames(classes.leftWallTileA, { [classes[A]]: !!A })} />
        <div className={classnames(classes.leftWallTileB, { [classes[B]]: !!B })} />
        <div className={classnames(classes.leftWallTileC, { [classes[C]]: !!C })} />
        <div className={classnames(classes.leftWallTileD, { [classes[D]]: !!D })} />
        <div className={classnames(classes.leftWallTileE, { [classes[E]]: !!E })} />
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
