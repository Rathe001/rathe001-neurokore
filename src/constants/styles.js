import eotFont from 'assets/fonts/ManaspaceReg.eot';
import woffFont from 'assets/fonts/ManaspaceReg.woff';
import ttfFont from 'assets/fonts/ManaspaceReg.ttf';
import svgFont from 'assets/fonts/ManaspaceReg.svg';

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

export const JSS_GLOBAL = {
  '*': {
    boxSizing: 'border-box',
    imageRendering: 'pixelated',
    userSelect: 'none',
    fontFamily: 'ManaspaceReg',
    letterSpacing: -0.25,
    fontSize: 6,
  },
  body: {
    background: '#000',
  },
  'input, textarea, button': {
    border: 'none',
    borderRadius: 0,
    background: 'rgba(255, 255, 255, 0.3)',
  },
  'input:focus, textarea:focus, button:focus': {
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.5)',
  },
  '@font-face': {
    fontFamily: 'ManaspaceReg',
    src: `url("${eotFont}?#iefix") format("embedded-opentype"), url("${woffFont}") format("woff"), url("${ttfFont}") format("truetype"), url("${svgFont}#ManaspaceReg") format("svg")`,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
};

export default { JSS_GLOBAL, JSS_RESET };
