import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import PropTypes from 'prop-types';
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
        <div className={classnames(classes.rightWallTileA, { [classes[A]]: !!A })} />
        <div className={classnames(classes.rightWallTileB, { [classes[B]]: !!B })} />
        <div className={classnames(classes.rightWallTileC, { [classes[C]]: !!C })} />
        <div className={classnames(classes.rightWallTileD, { [classes[D]]: !!D })} />
        <div className={classnames(classes.rightWallTileE, { [classes[E]]: !!E })} />
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
