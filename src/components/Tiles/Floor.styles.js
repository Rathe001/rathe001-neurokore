import floorTech1 from 'assets/textures/floorTech1.png';

export default {
  floor: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '300%',
    height: '100%',
    margin: '0 0 0 -100%',
    transformOrigin: 'bottom',
    transform: 'rotateX(90deg)',
  },
  floorLeft: { width: '100%', height: '100%', display: 'flex', flexDirection: 'column-reverse' },
  floorTileAL: { width: '100%', height: '25%', zIndex: '5' },
  floorTileBL: { width: '100%', height: '100%', zIndex: '4' },
  floorTileCL: { width: '100%', height: '100%', zIndex: '3' },
  floorTileDL: { width: '100%', height: '100%', zIndex: '2' },
  floorTileEL: { width: '100%', height: '100%', zIndex: '1' },

  floorCenter: { width: '100%', height: '100%', display: 'flex', flexDirection: 'column-reverse' },
  floorTileA: { width: '100%', height: '25%', zIndex: '5' },
  floorTileB: { width: '100%', height: '100%', zIndex: '4' },
  floorTileC: { width: '100%', height: '100%', zIndex: '3' },
  floorTileD: { width: '100%', height: '100%', zIndex: '2' },
  floorTileE: { width: '100%', height: '100%', zIndex: '1' },

  floorRight: { width: '100%', height: '100%', display: 'flex', flexDirection: 'column-reverse' },
  floorTileAR: { width: '100%', height: '25%', zIndex: '5' },
  floorTileBR: { width: '100%', height: '100%', zIndex: '4' },
  floorTileCR: { width: '100%', height: '100%', zIndex: '3' },
  floorTileDR: { width: '100%', height: '100%', zIndex: '2' },
  floorTileER: { width: '100%', height: '100%', zIndex: '1' },

  floorTech1: {
    backgroundImage: `url(${floorTech1})`,
  },
};
