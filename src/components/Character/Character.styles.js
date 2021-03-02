import bgMember from 'assets/img/bg-member.png';
import bgBar from 'assets/img/bg-bar.png';
import barHp from 'assets/img/bg-barHp.png';
import iconLightning from 'assets/img/icon-lightning.png';

export default {
  character: {
    position: 'relative',
    height: 24,
    width: 110,
    background: `url(${bgMember}) 0 0 no-repeat`,
  },
  name: {
    position: 'absolute',
    width: 70,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: 5,
    top: 3,
    left: 2,
    color: '#fff',
  },
  hp: {
    position: 'absolute',
    textAlign: 'right',
    padding: '2px 20px 0 0',
    fontSize: 5,
    color: 'green',
    top: 1,
    right: 2,
    width: '50%',
  },
  resources: {
    position: 'absolute',
    textAlign: 'right',
    color: 'yellow',
    fontSize: 5,
    bottom: 2,
    right: 4,
    '&:before': {
      position: 'absolute',
      top: 0,
      left: 0,
      content: '""',
      background: `url(${iconLightning}) 0 0 no-repeat`,
      height: 9,
      width: 6,
      margin: '-1px 0 0 -7px',
    },
  },
  barBg: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 19,
    height: 11,
    background: `url(${bgBar}) 0 0 no-repeat`,
  },
  barHp: {
    width: '100%',
    height: 10,
    background: `url(${barHp}) 0 0 no-repeat`,
  },
};
