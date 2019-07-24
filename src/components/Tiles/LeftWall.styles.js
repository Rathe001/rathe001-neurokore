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
    transform: 'rotateY(90deg) translateX(-3em)',
  },

  leftWallCenter: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  leftWallTileA: { width: '100%', height: '100%', backgroundSize: '100% 100%' },
  leftWallTileB: { width: '100%', height: '100%', backgroundSize: '100% 100%' },
  leftWallTileC: { width: '100%', height: '100%', backgroundSize: '100% 100%' },
  leftWallTileD: { width: '100%', height: '100%', backgroundSize: '100% 100%' },
  leftWallTileE: { width: '100%', height: '100%', backgroundSize: '100% 100%' },

  wallTech1: {
    backgroundImage: `url(${wallTech1})`,
    backgroundSize: '100% 100%',
  },
};
