import { VARIABLES } from 'constants/config';
import { JSS_RESET, JSS_GLOBAL } from 'constants/styles';
import bodyBackground from 'assets/img/body-bg.jpg';

export default {
  '@global': {
    ...JSS_RESET,
    ...JSS_GLOBAL,
    body: {
      background: `url(${bodyBackground}) 0 0 no-repeat`,
      backgroundSize: '100%',
    },
  },
  app: {
    fontSize: `${VARIABLES.ui.width * 0.1}px`,
    background: `#000`,
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: VARIABLES.ui.width,
    height: VARIABLES.ui.height,
    margin: [-(VARIABLES.ui.height / 2), 0, 0, -(VARIABLES.ui.width / 2)],
    overflow: 'hidden',
    boxShadow: '0 0 30px #000',
    outline: '2px solid rgba(0, 0, 0, 0.3)',
  },
};
