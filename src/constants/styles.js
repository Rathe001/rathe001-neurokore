export const JSS_RESET = {
  html: {
    boxSizing: 'border-box',
    fontSize: 5,
  },
  'html, body': {
    margin: 0,
    height: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
  },
  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },
  body: {
    overflow: 'hidden',
  },
  'body, h1, h2, h3, h4, h5, h6, p, ol, ul': {
    margin: 0,
    padding: 0,
    fontWeight: 'normal',
  },
  'ol, ul': {
    listStyle: 'none',
  },
  div: {
    userSelect: 'none',
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
};

export const JSS_GLOBAL = {
  '*': {
    boxSizing: 'border-box',
    fontFamily: "'Press Start 2P', monospace",
    letterSpacing: -0.25,
    wordSpacing: -1,
    lineHeight: '1.5em',
    fontSize: 4,
  },
  body: {
    background: '#000',
  },
  'input, textarea, button': {
    border: 'none',
    borderRadius: 0,
    background: 'rgba(255, 255, 255, 0.3)',
  },
  'input:focus, textarea:focus': {
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.5)',
  },
  'button:focus': {
    outline: 'none',
    background: 'black',
    color: 'white',
  },
  'button:disabled': {
    opacity: 0.3,
  },
};

export default { JSS_GLOBAL, JSS_RESET };
