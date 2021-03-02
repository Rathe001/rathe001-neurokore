import { VARIABLES } from 'constants/config';
import inventoryBg from 'assets/img/bg-inventory.png';

export default {
  characterSheet: {
    position: 'absolute',
    padding: 5,
    fontSize: 13,
    color: '#fff',
    background: `#000 url(${inventoryBg}) 100% 100% no-repeat`,
    top: 7,
    left: 10,
    width: 190,
    height: 145,
    zIndex: 9999,
    opacity: 1,
    transition: '0.25s all',
    transitionTimingFunction: `steps(${VARIABLES.ui.fps / 4})`,
  },
  hidden: {
    opacity: 0,
    zIndex: -1,
  },
  level: {
    display: 'flex',
  },
  stats: {
    display: 'flex',
    width: 125,
  },
  name: {
    fontSize: 5,
  },
  col: {
    flex: 1,
  },
  btnClose: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: '2px',
  },
  hr: {
    border: 'none',
    height: 2,
    borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
    background: 'rgba(0, 0, 0, 0.4)',
    widh: '100%',
  },
};
