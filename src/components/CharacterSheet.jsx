import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import characterSheetActions from 'core/characterSheet/actions';
import { VARIABLES } from 'constants/config';
import inventoryBg from 'assets/img/bg-inventory.png';

const styles = {
  characterSheet: {
    position: 'absolute',
    padding: 5,
    fontSize: 13,
    color: '#fff',
    background: `#000 url(${inventoryBg}) 100% 100% no-repeat`,
    top: 7,
    left: 10,
    width: 190,
    height: 145,
    zIndex: 9999,
    opacity: 1,
    transition: '0.25s all',
    transitionTimingFunction: `steps(${VARIABLES.ui.fps / 4})`,
  },
  hidden: {
    opacity: 0,
    zIndex: -1,
  },
  btnClose: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: '2px',
  },
};

const CharacterSheet = ({ classes, character, toggleCharacterSheet, showCharacterSheet }) => {
  return (
    <div
      className={classnames(classes.characterSheet, {
        [classes.hidden]: !showCharacterSheet,
      })}
    >
      {character.name}
      <div className={classes.stats}>
        Remaining SP: {character.remaining}
        <hr />
        Health: {character.HP_CUR} of {character.HP_MAX}
        <br />
        Energy: {character.ENERGY_CUR} of {character.ENERGY_MAX}
        <br />
        <br />
        STR: {character.STR}
        <br />
        DEX: {character.DEX}
        <br />
        INT: {character.INT}
        <br />
        MAR: {character.MAR}
        <br />
        PER: {character.PER}
        <br />
        ENE: {character.ENE}
        <br />
        KIN: {character.KIN}
        <br />
        LOT: {character.LOT}
        <br />
        HIT: {character.HIT}
        <br />
        LEA: {character.LEA}
        <br />
      </div>
      <button className={classes.btnClose} type="button" onClick={() => toggleCharacterSheet({})}>
        X
      </button>
    </div>
  );
};

CharacterSheet.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  character: PropTypes.shape({}).isRequired,
  toggleCharacterSheet: PropTypes.func.isRequired,
  showCharacterSheet: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ characterSheet }) => ({
  character: characterSheet.character,
  showCharacterSheet: characterSheet.show,
});

const mapDispatchToProps = {
  toggleCharacterSheet: characterSheetActions.toggle,
};

const StyledCharacterSheet = withStyles(styles)(CharacterSheet);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledCharacterSheet);
