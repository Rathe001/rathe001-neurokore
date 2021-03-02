import { VARIABLES } from 'constants/config';
import splashBg from 'assets/img/bg-splash.png';

export default {
  splash: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'blue',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 9999,
    opacity: 1,
    transition: '1s all',
    transitionTimingFunction: `steps(${VARIABLES.ui.fps})`,
    background: `url(${splashBg}) 0 0 no-repeat`,
    backgroundSize: 'auto 100%',
  },
  hidden: {
    opacity: 0,
    zIndex: -1,
    transform: 'scale(1.3)',
  },
  logo: {
    margin: '0 auto',
    height: 50,
  },
  start: {
    textShadow: '0 0 6px rgba(0, 0, 0, 0.9)',
    opacity: 1,
    animation: `flickerAnimation 2s infinite steps(${VARIABLES.ui.fps})`,
    fontSize: 12,
    display: 'block',
  },
  '@global': {
    '@keyframes flickerAnimation': {
      '0%': { opacity: 1 },
      '50%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
  },
};
