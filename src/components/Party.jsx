import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import classnames from 'classnames';
import Member from 'components/Character';

const styles = {
  party: {
    position: 'absolute',
    top: 28,
    right: 4,
    width: 108,
    height: 121,
    fontSize: 6,
  },
};

const Party = ({ classes, party }) => {
  return (
    <ol className={classnames(classes.party)}>
      {party.characters.map(member => (
        <Member key={member.id} data={member} />
      ))}
    </ol>
  );
};

Party.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  party: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ party }) => ({
  party,
});

const mapDispatchToProps = {};

const StyledParty = withStyles(styles)(Party);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledParty);
