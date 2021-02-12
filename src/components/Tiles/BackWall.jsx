import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import textures from 'constants/textures';
import styles from './BackWall.styles';

const useStyles = createUseStyles(styles);

/**
 * EL E ER
 * DL D DR
 * CL C CR
 * BL B BR
 * AL A AR
 */
const BackWall = ({
  AL, A, AR, BL, B, BR, CL, C, CR, DL, D, DR, EL, E, ER,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.backWall}>
      <div className={classes.backWallA}>
        <div
          className={classes.backWallTileAL}
          style={{
            backgroundSize: '100% 100%',
            backgroundImage:
              AL && textures[AL] ? `${textures.pBackWallA}, ${textures[AL]}` : 'none',
          }}
        />
        <div
          className={classes.backWallTileA}
          style={{
            backgroundSize: '100% 100%',
            backgroundImage: A && textures[A] ? `${textures.pBackWallA}, ${textures[A]}` : 'none',
          }}
        />
        <div
          className={classes.backWallTileAR}
          style={{
            backgroundSize: '100% 100%',
            backgroundImage:
              AR && textures[AR] ? `${textures.pBackWallA}, ${textures[AR]}` : 'none',
          }}
        />
      </div>
      <div className={classes.backWallB}>
        <div
          className={classes.backWallTileBL}
          style={{
            backgroundSize: '100% 100%',
            backgroundImage:
              BL && textures[BL] ? `${textures.pBackWallB}, ${textures[BL]}` : 'none',
          }}
        />
        <div
          className={classes.backWallTileB}
          style={{
            backgroundSize: '100% 100%',
            backgroundImage: B && textures[B] ? `${textures.pBackWallB}, ${textures[B]}` : 'none',
          }}
        />
        <div
          className={classes.backWallTileBR}
          style={{
            backgroundSize: '100% 100%',
            backgroundImage:
              BR && textures[BR] ? `${textures.pBackWallB}, ${textures[BR]}` : 'none',
          }}
        />
      </div>

      <div className={classes.backWallC}>
        <div
          className={classes.backWallTileCL}
          style={{
            backgroundSize: '100% 100%',
            backgroundImage:
              CL && textures[CL] ? `${textures.pBackWallC}, ${textures[CL]}` : 'none',
          }}
        />
        <div
          className={classes.backWallTileC}
          style={{
            backgroundSize: '100% 100%',
            backgroundImage: C && textures[C] ? `${textures.pBackWallC}, ${textures[C]}` : 'none',
          }}
        />
        <div
          className={classes.backWallTileCR}
          style={{
            backgroundSize: '100% 100%',
            backgroundImage:
              CR && textures[CR] ? `${textures.pBackWallC}, ${textures[CR]}` : 'none',
          }}
        />
      </div>

      <div className={classes.backWallD}>
        <div
          className={classes.backWallTileDL}
          style={{
            backgroundSize: '100% 100%',
            backgroundImage:
              DL && textures[DL] ? `${textures.pBackWallD}, ${textures[DL]}` : 'none',
          }}
        />
        <div
          className={classes.backWallTileD}
          style={{
            backgroundSize: '100% 100%',
            backgroundImage: D && textures[D] ? `${textures.pBackWallD}, ${textures[D]}` : 'none',
          }}
        />
        <div
          className={classes.backWallTileDR}
          style={{
            backgroundSize: '100% 100%',
            backgroundImage:
              DR && textures[DR] ? `${textures.pBackWallD}, ${textures[DR]}` : 'none',
          }}
        />
      </div>
      <div className={classes.backWallE}>
        <div
          className={classes.backWallTileEL}
          style={{
            backgroundSize: '100% 100%',
            backgroundImage:
              EL && textures[EL] ? `${textures.pBackWallE}, ${textures[EL]}` : 'none',
          }}
        />
        <div
          className={classes.backWallTileE}
          style={{
            backgroundSize: '100% 100%',
            background: E && textures[E] ? `${textures.pBackWallE}, ${textures[E]}` : 'none',
          }}
        />
        <div
          className={classes.backWallTileER}
          style={{
            backgroundSize: '100% 100%',
            backgroundImage:
              ER && textures[ER] ? `${textures.pBackWallE}, ${textures[ER]}` : 'none',
          }}
        />
      </div>
    </div>
  );
};

BackWall.propTypes = {
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

BackWall.defaultProps = {
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

export default BackWall;
