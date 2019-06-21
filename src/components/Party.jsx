import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import classnames from 'classnames';
import update from 'immutability-helper';
import Character from 'components/Character';
import partyActions from 'core/party/actions';

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

const Party = ({ classes, party, setCharacters }) => {
  const move = useCallback(
    (dragIndex, hoverIndex) => {
      const character = party.characters[dragIndex];
      setCharacters(
        update(party.characters, {
          $splice: [[dragIndex, 1], [hoverIndex, 0, character]],
        }),
      );
    },
    [party],
  );

  return (
    <ol className={classnames(classes.party)}>
      {party.characters.map((member, i) => (
        <Character key={member.id} id={member.id} data={member} move={move} index={i} />
      ))}
    </ol>
  );
};

Party.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  party: PropTypes.shape({}).isRequired,
  setCharacters: PropTypes.func.isRequired,
};

const mapStateToProps = ({ party }) => ({
  party,
});

const mapDispatchToProps = {
  setCharacters: partyActions.setCharacters,
};

const StyledParty = withStyles(styles)(Party);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledParty);
