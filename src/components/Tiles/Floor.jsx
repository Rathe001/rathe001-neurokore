import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Floor.styles';

const useStyles = createUseStyles(styles);

/**
 * EL E ER
 * DL D DR
 * CL C CR
 * BL B BR
 * AL A AR
 */
const Floor = ({ AL, A, AR, BL, B, BR, CL, C, CR, DL, D, DR, EL, E, ER }) => {
  const classes = useStyles();

  return (
    <div className={classes.floor}>
      <div className={classes.floorLeft}>
        <div className={classnames(classes.floorTileAL, { [classes[AL]]: !!AL })} />
        <div className={classnames(classes.floorTileBL, { [classes[BL]]: !!BL })} />
        <div className={classnames(classes.floorTileCL, { [classes[CL]]: !!CL })} />
        <div className={classnames(classes.floorTileDL, { [classes[DL]]: !!DL })} />
        <div className={classnames(classes.floorTileEL, { [classes[EL]]: !!EL })} />
      </div>

      <div className={classes.floorCenter}>
        <div className={classnames(classes.floorTileA, { [classes[A]]: !!A })} />
        <div className={classnames(classes.floorTileB, { [classes[B]]: !!B })} />
        <div className={classnames(classes.floorTileC, { [classes[C]]: !!C })} />
        <div className={classnames(classes.floorTileD, { [classes[D]]: !!D })} />
        <div className={classnames(classes.floorTileE, { [classes[E]]: !!E })} />
      </div>

      <div className={classes.floorRight}>
        <div className={classnames(classes.floorTileAR, { [classes[AR]]: !!AR })} />
        <div className={classnames(classes.floorTileBR, { [classes[BR]]: !!BR })} />
        <div className={classnames(classes.floorTileCR, { [classes[CR]]: !!CR })} />
        <div className={classnames(classes.floorTileDR, { [classes[DR]]: !!DR })} />
        <div className={classnames(classes.floorTileER, { [classes[ER]]: !!ER })} />
      </div>
    </div>
  );
};

Floor.propTypes = {
  AL: PropTypes.string,
  A: PropTypes.string,
  AR: PropTypes.string,
  BL: PropTypes.string,
  B: PropTypes.string,
  BR: PropTypes.string,
  CL: PropTypes.string,
  C: PropTypes.string,
  CR: PropTypes.string,
  DL: PropTypes.string,
  D: PropTypes.string,
  DR: PropTypes.string,
  EL: PropTypes.string,
  E: PropTypes.string,
  ER: PropTypes.string,
};

Floor.defaultProps = {
  AL: '',
  A: '',
  AR: '',
  BL: '',
  B: '',
  BR: '',
  CL: '',
  C: '',
  CR: '',
  DL: '',
  D: '',
  DR: '',
  EL: '',
  E: '',
  ER: '',
};

export default Floor;
