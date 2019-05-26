import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import bgMember from 'assets/img/bg-member.png';
import bgBar from 'assets/img/bg-bar.png';
import barHp from 'assets/img/bg-barHp.png';

const styles = {
  member: {
    position: 'relative',
    height: 24,
    width: 110,
    background: `url(${bgMember}) 0 0 no-repeat`,
  },
  name: {
    position: 'absolute',
    maxWidth: '50%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: 9,
    top: 2,
    left: 3,
    color: '#fff',
  },
  hp: {
    position: 'absolute',
    textAlign: 'right',
    padding: '2px 20px 0 0',
    fontSize: 8,
    color: 'green',
    top: 1,
    right: 2,
    width: '50%',
  },
  mp: {
    position: 'absolute',
    textAlign: 'right',
    color: 'blue',
    fontSize: 8,
    bottom: 2,
    right: 4,
    width: '25%',
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

const Member = ({ classes, data }) => {
  return (
    <li className={classes.member}>
      <div className={classes.name}>{data.name}</div>
      <div className={classes.hp}>
        {data.HP_CUR}
        <div className={classes.barBg}>
          <div className={classes.barHp} />
        </div>
      </div>
      {data.MP_MAX > 0 && <span className={classes.mp}>{data.MP_CUR}</span>}
    </li>
  );
};

Member.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({}).isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const StyledMember = withStyles(styles)(Member);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledMember);
