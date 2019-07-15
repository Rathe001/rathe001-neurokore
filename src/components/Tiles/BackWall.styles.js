import wallTech1 from 'assets/textures/wallTech1.png';

export default {
  backWall: {},

  backWallA: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '300%',
    height: '100%',
    margin: '0 0 0 -100%',
    transformOrigin: 'top',
    transform: 'translateZ(-3.6rem)',
    zIndex: '5',

    '& div': {
      width: '100%',
      height: '100%',
    },
  },

  backWallB: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '300%',
    height: '100%',
    margin: '0 0 0 -100%',
    transformOrigin: 'top',
    transform: 'translateZ(-17.9rem)',

    '& div': {
      width: '100%',
      height: '100%',
    },
  },

  backWallC: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '300%',
    height: '100%',
    margin: '0 0 0 -100%',
    transformOrigin: 'top',
    transform: 'translateZ(-32rem)',

    '& div': {
      width: '100%',
      height: '100%',
    },
  },

  backWallD: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '300%',
    height: '100%',
    margin: '0 0 0 -100%',
    transformOrigin: 'top',
    transform: 'translateZ(-46.1rem)',

    '& div': {
      width: '100%',
      height: '100%',
    },
  },

  backWallE: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '300%',
    height: '100%',
    margin: '0 0 0 -100%',
    transformOrigin: 'top',
    transform: 'translateZ(-61.3rem)',

    '& div': {
      width: '100%',
      height: '100%',
    },
  },

  wallTech1: {
    backgroundImage: `url(${wallTech1})`,
  },
};
