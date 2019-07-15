import wallTech1 from 'assets/textures/wallTech1.png';

export default {
  leftWall: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transformOrigin: 'left',
    transform: 'rotateY(90deg)',
  },

  leftWallCenter: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  leftWallTileA: { width: '25%', height: '100%', zIndex: '5' },
  leftWallTileB: { width: '100%', height: '100%', zIndex: '4' },
  leftWallTileC: { width: '100%', height: '100%', zIndex: '3' },
  leftWallTileD: { width: '100%', height: '100%', zIndex: '2' },
  leftWallTileE: { width: '100%', height: '100%', zIndex: '1' },

  wallTech1: {
    backgroundImage: `url(${wallTech1})`,
  },
};
