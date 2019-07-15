import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './BackWall.styles';

const useStyles = createUseStyles(styles);

/**
 * EL E ER
 * DL D DR
 * CL C CR
 * BL B BR
 * AL A AR
 */
const BackWall = ({ AL, A, AR, BL, B, BR, CL, C, CR, DL, D, DR, EL, E, ER }) => {
  const classes = useStyles();

  return (
    <div className={classes.backWall}>
      <div className={classes.backWallA}>
        <div className={classnames(classes.backWallTileAL, { [classes[AL]]: !!AL })} />
        <div className={classnames(classes.backWallTileA, { [classes[A]]: !!A })} />
        <div className={classnames(classes.backWallTileAR, { [classes[AR]]: !!AR })} />
      </div>

      <div className={classes.backWallB}>
        <div className={classnames(classes.backWallTileBL, { [classes[BL]]: !!BL })} />
        <div className={classnames(classes.backWallTileB, { [classes[B]]: !!B })} />
        <div className={classnames(classes.backWallTileBR, { [classes[BR]]: !!BR })} />
      </div>

      <div className={classes.backWallC}>
        <div className={classnames(classes.backWallTileCL, { [classes[CL]]: !!CL })} />
        <div className={classnames(classes.backWallTileC, { [classes[C]]: !!C })} />
        <div className={classnames(classes.backWallTileCR, { [classes[CR]]: !!CR })} />
      </div>

      <div className={classes.backWallD}>
        <div className={classnames(classes.backWallTileDL, { [classes[DL]]: !!DL })} />
        <div className={classnames(classes.backWallTileD, { [classes[D]]: !!D })} />
        <div className={classnames(classes.backWallTileDR, { [classes[DR]]: !!DR })} />
      </div>
      <div className={classes.backWallE}>
        <div className={classnames(classes.backWallTileEL, { [classes[EL]]: !!EL })} />
        <div className={classnames(classes.backWallTileE, { [classes[E]]: !!E })} />
        <div className={classnames(classes.backWallTileER, { [classes[ER]]: !!ER })} />
      </div>
    </div>
  );
};

BackWall.propTypes = {
  A: PropTypes.string,
  B: PropTypes.string,
  C: PropTypes.string,
  D: PropTypes.string,
  E: PropTypes.string,
};

BackWall.defaultProps = {
  A: '',
  B: '',
  C: '',
  D: '',
  E: '',
};

export default BackWall;
