import ceilingTech1 from 'assets/textures/ceilingTech1.png';

export default {
  ceiling: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '300%',
    height: '100%',
    margin: '0 0 0 -100%',
    transformOrigin: 'top',
    transform: 'rotateX(-90deg)',
  },

  ceilingLeft: { width: '100%', height: '100%', display: 'flex', flexDirection: 'column' },
  ceilingTileAL: { width: '100%', height: '25%', zIndex: '5' },
  ceilingTileBL: { width: '100%', height: '100%', zIndex: '4' },
  ceilingTileCL: { width: '100%', height: '100%', zIndex: '3' },
  ceilingTileDL: { width: '100%', height: '100%', zIndex: '2' },
  ceilingTileEL: { width: '100%', height: '100%', zIndex: '1' },

  ceilingCenter: { width: '100%', height: '100%', display: 'flex', flexDirection: 'column' },
  ceilingTileA: { width: '100%', height: '25%', zIndex: '5' },
  ceilingTileB: { width: '100%', height: '100%', zIndex: '4' },
  ceilingTileC: { width: '100%', height: '100%', zIndex: '3' },
  ceilingTileD: { width: '100%', height: '100%', zIndex: '2' },
  ceilingTileE: { width: '100%', height: '100%', zIndex: '1' },

  ceilingRight: { width: '100%', height: '100%', display: 'flex', flexDirection: 'column' },
  ceilingTileAR: { width: '100%', height: '25%', zIndex: '5' },
  ceilingTileBR: { width: '100%', height: '100%', zIndex: '4' },
  ceilingTileCR: { width: '100%', height: '100%', zIndex: '3' },
  ceilingTileDR: { width: '100%', height: '100%', zIndex: '2' },
  ceilingTileER: { width: '100%', height: '100%', zIndex: '1' },

  ceilingTech1: {
    backgroundImage: `url(${ceilingTech1})`,
    backgroundSize: '100% 100%',
  },
};
