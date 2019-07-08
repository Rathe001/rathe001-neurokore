import turnLeft from 'assets/img/icon-turn-left.png';
import turnRight from 'assets/img/icon-turn-right.png';
import moveForward from 'assets/img/icon-move-forward.png';
import moveBackward from 'assets/img/icon-move-backward.png';
import levelOverlay from 'assets/img/overlay-level.png';

import stone1 from 'assets/textures/stone1.png';
import wallTech1 from 'assets/textures/wallTech1.png';
import floorTech1 from 'assets/textures/floorTech1.png';
import ceilingTech1 from 'assets/textures/ceilingTech1.png';

export default {
  level: {
    position: 'absolute',
    fontSize: 13,
    boxShadow: '0 0 10px #000 inset',
    top: 7,
    left: 10,
    width: 145,
    height: 145,
  },

  overlay: {
    background: `url(${levelOverlay}) 0 0 no-repeat`,
    backgroundSize: '100% 100%',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    opacity: '0.8',
  },

  perspective: {
    width: '100%',
    height: '100%',
    position: 'relative',
    transformStyle: 'preserve-3d',
    perspective: 85,
    overflow: 'hidden',
  },

  ceiling: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '102%',
    height: '100%',
    margin: '0 0 0 -1%',
    transformOrigin: 'top',
    transform: 'rotateX(-90deg)',
  },

  ceilingForeground: {
    width: '100%',
    height: '25%',
    backgroundSize: '100% auto',
    backgroundPosition: '0 100%',
  },

  ceilingBackground: {
    width: '100%',
    height: '100%',
    backgroundSize: '100% auto',
  },

  floor: {
    display: 'flex',
    flexDirection: 'column-reverse',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '102%',
    height: '100%',
    margin: '0 0 0 -1%',
    transformOrigin: 'bottom',
    transform: 'rotateX(90deg)',
  },

  floorForeground: {
    width: '100%',
    height: '25%',
    backgroundSize: '100% auto',
    backgroundPosition: '0 100%',
  },

  floorBackground: {
    width: '100%',
    height: '100%',
    backgroundSize: '100% auto',
  },

  backWall: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },

  backWallForeground: {
    width: '100%',
    height: '100%',
    display: 'none',
    backgroundSize: '100%',
    transform: 'translateZ(-29px)',
  },

  backWallBackground: {
    width: '100%',
    height: '100%',
    backgroundSize: '100%',
    background: 'blue',
    transform: 'translateZ(-144px)',
  },

  rightWall: {
    display: 'flex',
    flexDirection: 'row-reverse',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    transformOrigin: 'right',
    transform: 'rotateY(-90deg)',
  },

  rightWallForeground: {
    width: '25%',
    height: '100%',
    backgroundSize: 'auto 100%',
    backgroundPosition: '100% 0',
  },

  rightWallBackground: {
    width: '100%',
    height: '100%',
    backgroundSize: 'auto 100%',
  },

  leftWall: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transformOrigin: 'left',
    transform: 'rotateY(90deg)',
  },

  leftWallForeground: {
    width: '25%',
    height: '100%',
    backgroundSize: 'auto 100%',
    backgroundPosition: '100% 0',
  },

  leftWallBackground: {
    width: '100%',
    height: '100%',
    backgroundSize: 'auto 100%',
  },

  moveForward: {
    position: 'absolute',
    top: 0,
    left: '25%',
    height: '25%',
    width: '50%',
    '&:hover': {
      background: `url(${moveForward}) 50% 50% no-repeat`,
    },
  },

  turnRight: {
    position: 'absolute',
    top: '25%',
    right: 0,
    height: '50%',
    width: '25%',
    '&:hover': {
      background: `url(${turnRight}) 50% 50% no-repeat`,
    },
  },

  moveBackward: {
    position: 'absolute',
    bottom: 0,
    left: '25%',
    height: '25%',
    width: '50%',
    '&:hover': {
      background: `url(${moveBackward}) 50% 50% no-repeat`,
    },
  },

  turnLeft: {
    position: 'absolute',
    bottom: '25%',
    left: 0,
    height: '50%',
    width: '25%',
    '&:hover': {
      background: `url(${turnLeft}) 50% 50% no-repeat`,
    },
  },

  stone1: {
    backgroundImage: `url(${stone1})`,
  },

  wallTech1: {
    backgroundImage: `url(${wallTech1})`,
  },

  floorTech1: {
    backgroundImage: `url(${floorTech1})`,
  },

  ceilingTech1: {
    backgroundImage: `url(${ceilingTech1})`,
  },
};
