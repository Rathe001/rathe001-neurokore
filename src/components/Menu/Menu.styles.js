import menuButtonBackground from 'assets/img/icon-menu.png';
import { VARIABLES } from 'constants/config';

export default {
  menu: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    background: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    margin: '0 auto',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    opacity: 1,
    transition: '0.25s all',
    transitionTimingFunction: `steps(${VARIABLES.ui.fps / 4})`,
  },
  menuList: {
    width: '30%',
    textAlign: 'center',
  },
  menuItem: {
    background: '#031627',
    color: '#7da4f4',
    border: '1px solid #7da4f4',
    padding: '3px 10px',
    margin: '0 0 3px',
    fontSize: 5,
    borderRadius: 3,
    width: '100%',
  },
  hidden: {
    opacity: 0,
    zIndex: -1,
  },
  menuButton: {
    background: `url(${menuButtonBackground}) 0 0 no-repeat`,
    width: 38,
    top: 149,
    right: 34,
    position: 'absolute',
    height: 11,
    cursor: 'pointer',
    boxShadow: '0 0 4px #000',
    outline: '2px solid rgba(0, 0, 0, 0.4)',

    '&:hover': {
      backgroundPosition: '-38px 0',
    },
  },
  saveNameInput: {
    background: '#000',
    color: '#fff',
    border: '1px solid #7da4f4',
    padding: '5px 10px 3px 10px',
    margin: '0 0 3px',
    fontSize: 5,
    borderRadius: 3,
    width: '100%',
    '&:focus': {
      background: 'black',
    },
  },
};
