export const VARIABLES = {
  ui: {
    height: 200,
    width: 320,
    fps: 12,
  },
};

export const JSS_RESET = {
  html: {
    boxSizing: 'border-box',
    fontSize: 6,
  },
  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },
  'body, h1, h2, h3, h4, h5, h6, p, ol, ul': {
    margin: 0,
    padding: 0,
    fontWeight: 'normal',
  },
  'ol, ul': {
    listStyle: 'none',
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
};

export default { VARIABLES, JSS_RESET };
