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
    transform: 'rotateY(-90deg) translateX(3em)',
  },

  rightWallCenter: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  rightWallTileA: { width: '100%', height: '100%', backgroundSize: '100% 100%' },
  rightWallTileB: { width: '100%', height: '100%', backgroundSize: '100% 100%' },
  rightWallTileC: { width: '100%', height: '100%', backgroundSize: '100% 100%' },
  rightWallTileD: { width: '100%', height: '100%', backgroundSize: '100% 100%' },
  rightWallTileE: { width: '100%', height: '100%', backgroundSize: '100% 100%' },

  wallTech1: {
    backgroundImage: `url(${wallTech1})`,
    backgroundSize: '100% 100%',
  },
};
