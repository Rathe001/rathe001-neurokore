import { VARIABLES } from 'constants/config';
import background from 'assets/img/bg-create-character.png';

export default {
  characterCreation: {
    position: 'absolute',
    padding: 5,
    fontSize: 13,
    background: `url(${background}) 100% 100% no-repeat`,
    top: 7,
    left: 10,
    width: 145,
    height: 145,
    transitionTimingFunction: `steps(${VARIABLES.ui.fps})`,
  },
  hidden: {
    display: 'none',
  },
  complete: {
    animation: `openDoor 2s steps(${VARIABLES.ui.fps})`,
    padding: 0,
    overflow: 'hidden',
    height: 0,
  },
  title: {
    textAlign: 'center',
  },
  stats: {
    position: 'relative',
    borderTop: '1px solid rgba(0, 0, 0, 0.2)',
    marginTop: 5,
    borderRadius: 3,
    padding: '3px',
    background: 'rgba(255, 255, 255, 0.3)',
  },
  sp: {
    position: 'absolute',
    top: 17,
    right: 5,
  },
  button: {
    border: 'none',
    cursor: 'pointer',
    margin: '0 0 1px 0',
    lineHeight: '6px',
    padding: '1px 4px 0 4px',
    background: '#031627',
    color: '#7da4f4',
    borderRadius: 2,
  },
  disabled: {
    background: '#555',
    color: '#fff',
  },
  add: {
    right: 45,
    bottom: 2,
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '3px 6px',
    borderRadius: 3,
    cursor: 'pointer',
    border: '1px solid black',
    position: 'absolute',
    '&:active, &:focus': {
      background: '#fff',
    },
  },
  current: {
    width: 12,
    textAlign: 'center',
    display: 'inline-block',
  },
  name: {
    padding: '0 0 0 5px',
  },
  charName: {
    width: 70,
    margin: '0 0 0 3px',
    border: '1px solid rgba(0, 0, 0, 0.4)',
  },
  hr: {
    border: 'none',
    height: 2,
    borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
    background: 'rgba(0, 0, 0, 0.4)',
    widh: '100%',
  },
  textLighter: {
    opacity: 0.3,
  },
  '@keyframes openDoor': {
    '0%': { height: 145 },
    '100%': { height: 0 },
  },
};
