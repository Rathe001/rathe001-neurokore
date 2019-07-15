import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import styles from './Ceiling.styles';

const useStyles = createUseStyles(styles);

/**
 * EL E ER
 * DL D DR
 * CL C CR
 * BL B BR
 * AL A AR
 */
const Ceiling = ({ AL, A, AR, BL, B, BR, CL, C, CR, DL, D, DR, EL, E, ER }) => {
  const classes = useStyles();

  return (
    <div className={classes.ceiling}>
      <div className={classes.ceilingLeft}>
        <div className={classnames(classes.ceilingTileAL, { [classes[AL]]: !!AL })} />
        <div className={classnames(classes.ceilingTileBL, { [classes[BL]]: !!BL })} />
        <div className={classnames(classes.ceilingTileCL, { [classes[CL]]: !!CL })} />
        <div className={classnames(classes.ceilingTileDL, { [classes[DL]]: !!DL })} />
        <div className={classnames(classes.ceilingTileEL, { [classes[EL]]: !!EL })} />
      </div>

      <div className={classes.ceilingCenter}>
        <div className={classnames(classes.ceilingTileA, { [classes[A]]: !!A })} />
        <div className={classnames(classes.ceilingTileB, { [classes[B]]: !!B })} />
        <div className={classnames(classes.ceilingTileC, { [classes[C]]: !!C })} />
        <div className={classnames(classes.ceilingTileD, { [classes[D]]: !!D })} />
        <div className={classnames(classes.ceilingTileE, { [classes[E]]: !!E })} />
      </div>

      <div className={classes.ceilingRight}>
        <div className={classnames(classes.ceilingTileAR, { [classes[AR]]: !!AR })} />
        <div className={classnames(classes.ceilingTileBR, { [classes[BR]]: !!BR })} />
        <div className={classnames(classes.ceilingTileCR, { [classes[CR]]: !!CR })} />
        <div className={classnames(classes.ceilingTileDR, { [classes[DR]]: !!DR })} />
        <div className={classnames(classes.ceilingTileER, { [classes[ER]]: !!ER })} />
      </div>
    </div>
  );
};

Ceiling.propTypes = {
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

Ceiling.defaultProps = {
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

export default Ceiling;
