import iconInfo from 'assets/img/icon-info.png';

export default {
  tooltip: {
    position: 'absolute',
    minHeight: 16,
    bottom: 6,
    right: 6,
    width: 150,
    padding: '5px 4px 3px 7px',
    color: '#7da4f4',
    fontSize: 4,
    background: '#031627',
    border: '1px solid #333',
    boxShadow: '0 0 7px rgba(0, 0, 0, 1), 0 0 7px rgba(0, 0, 0, 1)',
    '&::before': {
      position: 'absolute',
      width: 9,
      height: 16,
      background: `#031627 url(${iconInfo}) 50% 50% no-repeat`,
      content: '""',
      top: -1,
      left: -9,
      border: '1px solid #333',
      borderRight: 'none',
    },
  },
  hidden: {
    display: 'none',
  },
};
