import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import textures from 'constants/textures';
import styles from './Floor.styles';

const useStyles = createUseStyles(styles);

/**
 * EL E ER
 * DL D DR
 * CL C CR
 * BL B BR
 * AL A AR
 */
const Floor = ({
  AL, A, AR, BL, B, BR, CL, C, CR, DL, D, DR, EL, E, ER,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.floor}>
      <div className={classes.floorLeft}>
        <div
          className={classes.floorTileAL}
          style={{
            backgroundImage: AL && textures[AL] ? `${textures.pFloorA}, ${textures[AL]}` : 'none',
          }}
        />
        <div
          className={classes.floorTileBL}
          style={{
            backgroundImage: BL && textures[BL] ? `${textures.pFloorB}, ${textures[BL]}` : 'none',
          }}
        />
        <div
          className={classes.floorTileCL}
          style={{
            backgroundImage: CL && textures[CL] ? `${textures.pFloorC}, ${textures[CL]}` : 'none',
          }}
        />
        <div
          className={classes.floorTileDL}
          style={{
            backgroundImage: DL && textures[DL] ? `${textures.pFloorD}, ${textures[DL]}` : 'none',
          }}
        />
        <div
          className={classes.floorTileEL}
          style={{
            backgroundImage: EL && textures[EL] ? `${textures.pFloorE}, ${textures[EL]}` : 'none',
          }}
        />
      </div>

      <div className={classes.floorCenter}>
        <div
          className={classes.floorTileA}
          style={{
            backgroundImage: A && textures[A] ? `${textures.pFloorA}, ${textures[A]}` : 'none',
          }}
        />
        <div
          className={classes.floorTileB}
          style={{
            backgroundImage: B && textures[B] ? `${textures.pFloorB}, ${textures[B]}` : 'none',
          }}
        />
        <div
          className={classes.floorTileC}
          style={{
            backgroundImage: C && textures[C] ? `${textures.pFloorC}, ${textures[C]}` : 'none',
          }}
        />
        <div
          className={classes.floorTileD}
          style={{
            backgroundImage: D && textures[D] ? `${textures.pFloorD}, ${textures[D]}` : 'none',
          }}
        />
        <div
          className={classes.floorTileE}
          style={{
            backgroundImage: E && textures[E] ? `${textures.pFloorE}, ${textures[E]}` : 'none',
          }}
        />
      </div>

      <div className={classes.floorRight}>
        <div
          className={classes.floorTileAR}
          style={{
            background: AR && textures[AR] ? `${textures.pFloorA}, ${textures[AR]}` : 'none',
          }}
        />
        <div
          className={classes.floorTileBR}
          style={{
            backgroundImage: BR && textures[BR] ? `${textures.pFloorB}, ${textures[BR]}` : 'none',
          }}
        />
        <div
          className={classes.floorTileCR}
          style={{
            backgroundImage: CR && textures[CR] ? `${textures.pFloorC}, ${textures[CR]}` : 'none',
          }}
        />
        <div
          className={classes.floorTileDR}
          style={{
            backgroundImage: DR && textures[DR] ? `${textures.pFloorD}, ${textures[DR]}` : 'none',
          }}
        />
        <div
          className={classes.floorTileER}
          style={{
            backgroundImage: ER && textures[ER] ? `${textures.pFloorE}, ${textures[ER]}` : 'none',
          }}
        />
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
