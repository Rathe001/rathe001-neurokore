import sample from 'assets/levels/sample.png';
import turnLeft from 'assets/img/icon-turn-left.png';
import turnRight from 'assets/img/icon-turn-right.png';
import moveForward from 'assets/img/icon-move-forward.png';
import moveBackward from 'assets/img/icon-move-backward.png';

export default {
  level: {
    position: 'absolute',
    padding: 5,
    fontSize: 13,
    background: 'green',
    // background: `url(${sample}) 0 0 no-repeat`,
    backgroundSize: '100%',
    boxShadow: '0 0 10px #000 inset',
    top: 7,
    left: 10,
    width: 145,
    height: 145,
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

  viewport: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },

  row: {
    display: 'flex',
    width: '100%',
    margin: '0 0 1px 0',
  },

  col: {
    height: '100%',
    margin: '0 1px 0 0',
    background: 'black',
  },

  activeColN: {
    background: 'white',
    borderTop: '2px solid blue',
  },

  activeColS: {
    background: 'white',
    borderBottom: '2px solid blue',
  },

  activeColE: {
    background: 'white',
    borderRight: '2px solid blue',
  },

  activeColW: {
    background: 'white',
    borderLeft: '2px solid blue',
  },
};
