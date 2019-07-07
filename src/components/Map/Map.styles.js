export default {
  map: {
    position: 'absolute',
    fontSize: 13,
    background: 'black',
    backgroundSize: '100%',
    boxShadow: '0 0 10px #000 inset',
    overflow: 'hidden',
    top: 57,
    left: 155,
    width: 45,
    height: 45,
  },

  viewport: {
    display: 'flex',
    flexDirection: 'column-reverse',
    position: 'absolute',
    left: '45%',
    bottom: '45%',
    height: '100%',
  },

  row: {
    display: 'flex',
    width: '100%',
    margin: '0 0 1px 0',
    minHeight: 4,
  },

  col: {
    height: '100%',
    margin: '0 1px 0 0',
    minWidth: 4,
  },

  cellOpen: {
    background: '#222',
  },

  activeColN: {
    height: '100%',
    width: '100%',
    background: 'white',
    borderTop: '2px solid green',
  },

  activeColS: {
    height: '100%',
    width: '100%',
    background: 'white',
    borderBottom: '2px solid green',
  },

  activeColE: {
    height: '100%',
    width: '100%',
    background: 'white',
    borderRight: '2px solid green',
  },

  activeColW: {
    height: '100%',
    width: '100%',
    background: 'white',
    borderLeft: '2px solid green',
  },
};
