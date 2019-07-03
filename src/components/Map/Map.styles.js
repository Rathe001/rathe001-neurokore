export default {
  map: {
    position: 'absolute',
    fontSize: 13,
    background: 'green',
    backgroundSize: '100%',
    boxShadow: '0 0 10px #000 inset',
    top: 58,
    left: 155,
    width: 45,
    height: 45,
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
    height: '100%',
    width: '100%',
    background: 'white',
    borderTop: '1px solid blue',
  },

  activeColS: {
    height: '100%',
    width: '100%',
    background: 'white',
    borderBottom: '1px solid blue',
  },

  activeColE: {
    height: '100%',
    width: '100%',
    background: 'white',
    borderRight: '1px solid blue',
  },

  activeColW: {
    height: '100%',
    width: '100%',
    background: 'white',
    borderLeft: '1px solid blue',
  },
};
