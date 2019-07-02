import background from 'assets/img/bg-ui.png';
import logo from 'assets/img/logo-sm.png';

export default {
  ui: {
    background: `#000 url(${background}) 0 0 no-repeat`,
    backgroundSize: '100% 100%',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  logo: {
    top: 2,
    right: 12,
    position: 'absolute',
    height: 19,
    width: 95,
    background: `url(${logo}) 0 0 no-repeat`,
  },
};
