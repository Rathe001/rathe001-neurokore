import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import classnames from 'classnames';
import bgMember from 'assets/img/bg-member.png';

const styles = {
  member: {
    height: 24,
    width: 110,
    background: `url(${bgMember}) 0 0 no-repeat`,
  },
};

const Member = ({ classes, data }) => {
  return (
    <li className={classes.member}>
      <span className={classes.name}>{data.name}</span>
      <span className={classes.hp}>
        HP: {data.HP_CUR} / {data.HP_MAX}
      </span>
      {data.MP_MAX > 0 && <span className={classes.mp}>MP: {data.MP}</span>}
    </li>
  );
};

Member.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({}).isRequired,
};

const mapStateToProps = () => {};

const mapDispatchToProps = {};

const StyledMember = withStyles(styles)(Member);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledMember);
