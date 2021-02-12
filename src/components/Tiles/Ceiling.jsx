import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import textures from 'constants/textures';
import styles from './Ceiling.styles';

const useStyles = createUseStyles(styles);

/**
 * EL E ER
 * DL D DR
 * CL C CR
 * BL B BR
 * AL A AR
 */
const Ceiling = ({
  AL, A, AR, BL, B, BR, CL, C, CR, DL, D, DR, EL, E, ER,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.ceiling}>
      <div className={classes.ceilingLeft}>
        <div
          className={classes.ceilingTileAL}
          style={{
            backgroundImage: AL && textures[AL] ? `${textures.pCeilingA}, ${textures[AL]}` : 'none',
          }}
        />
        <div
          className={classes.ceilingTileBL}
          style={{
            backgroundImage: BL && textures[BL] ? `${textures.pCeilingB}, ${textures[BL]}` : 'none',
          }}
        />
        <div
          className={classes.ceilingTileCL}
          style={{
            backgroundImage: CL && textures[CL] ? `${textures.pCeilingC}, ${textures[CL]}` : 'none',
          }}
        />
        <div
          className={classes.ceilingTileDL}
          style={{
            backgroundImage: DL && textures[DL] ? `${textures.pCeilingD}, ${textures[DL]}` : 'none',
          }}
        />
        <div
          className={classes.ceilingTileEL}
          style={{
            backgroundImage: EL && textures[EL] ? `${textures.pCeilingE}, ${textures[EL]}` : 'none',
          }}
        />
      </div>

      <div className={classes.ceilingCenter}>
        <div
          className={classes.ceilingTileA}
          style={{
            backgroundImage: A && textures[A] ? `${textures.pCeilingA}, ${textures[A]}` : 'none',
          }}
        />
        <div
          className={classes.ceilingTileB}
          style={{
            backgroundImage: B && textures[B] ? `${textures.pCeilingB}, ${textures[B]}` : 'none',
          }}
        />
        <div
          className={classes.ceilingTileC}
          style={{
            backgroundImage: C && textures[C] ? `${textures.pCeilingC}, ${textures[C]}` : 'none',
          }}
        />
        <div
          className={classes.ceilingTileD}
          style={{
            backgroundImage: D && textures[D] ? `${textures.pCeilingD}, ${textures[D]}` : 'none',
          }}
        />
        <div
          className={classes.ceilingTileE}
          style={{
            backgroundImage: E && textures[E] ? `${textures.pCeilingE}, ${textures[E]}` : 'none',
          }}
        />
      </div>

      <div className={classes.ceilingRight}>
        <div
          className={classes.ceilingTileAR}
          style={{
            backgroundImage: AR && textures[AR] ? `${textures.pCeilingA}, ${textures[AR]}` : 'none',
          }}
        />
        <div
          className={classes.ceilingTileBR}
          style={{
            backgroundImage: BR && textures[BR] ? `${textures.pCeilingB}, ${textures[BR]}` : 'none',
          }}
        />
        <div
          className={classes.ceilingTileCR}
          style={{
            backgroundImage: CR && textures[CR] ? `${textures.pCeilingC}, ${textures[CR]}` : 'none',
          }}
        />
        <div
          className={classes.ceilingTileDR}
          style={{
            backgroundImage: DR && textures[DR] ? `${textures.pCeilingD}, ${textures[DR]}` : 'none',
          }}
        />
        <div
          className={classes.ceilingTileER}
          style={{
            backgroundImage: ER && textures[ER] ? `${textures.pCeilingE}, ${textures[ER]}` : 'none',
          }}
        />
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
