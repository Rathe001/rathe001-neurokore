import wallTech1 from 'assets/textures/wallTech1.png';

export default {
  rightWall: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    transformOrigin: 'right',
    transform: 'rotateY(-90deg)',
  },

  rightWallCenter: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  rightWallTileA: { width: '25%', height: '100%', zIndex: '5' },
  rightWallTileB: { width: '100%', height: '100%', zIndex: '4' },
  rightWallTileC: { width: '100%', height: '100%', zIndex: '3' },
  rightWallTileD: { width: '100%', height: '100%', zIndex: '2' },
  rightWallTileE: { width: '100%', height: '100%', zIndex: '1' },

  wallTech1: {
    backgroundImage: `url(${wallTech1})`,
  },
};
