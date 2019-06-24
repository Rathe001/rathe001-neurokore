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
    top: '4.7em',
    right: '0.5em',
    width: 110,
    height: 121,
    fontSize: 6,
  },
};

const Party = ({ classes, stateParty, dispatchPartySetCharacters }) => {
  const move = useCallback(
    (dragIndex, hoverIndex) => {
      const character = stateParty.characters[dragIndex];
      dispatchPartySetCharacters(
        update(stateParty.characters, {
          $splice: [[dragIndex, 1], [hoverIndex, 0, character]],
        }),
      );
    },
    [stateParty, dispatchPartySetCharacters],
  );

  return (
    <ol className={classnames(classes.party)}>
      {stateParty.characters.map((member, i) => (
        <Character key={member.id} id={member.id} data={member} move={move} index={i} />
      ))}
    </ol>
  );
};

Party.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  stateParty: PropTypes.shape({}).isRequired,
  dispatchPartySetCharacters: PropTypes.func.isRequired,
};

const mapStateToProps = ({ party }) => ({
  stateParty: party,
});

const mapDispatchToProps = {
  dispatchPartySetCharacters: partyActions.setCharacters,
};

const StyledParty = withStyles(styles)(Party);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledParty);
