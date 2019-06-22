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
  level: {
    display: 'flex',
  },
  stats: {
    display: 'flex',
    width: 125,
  },
  name: {
    fontSize: 8,
  },
  col: {
    flex: 1,
  },
  btnClose: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: '2px',
  },
  hr: {
    border: 'none',
    height: 2,
    borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
    background: 'rgba(0, 0, 0, 0.4)',
    widh: '100%',
  },
};

const CharacterSheet = ({ classes, character, toggleCharacterSheet, showCharacterSheet }) => {
  return (
    <div
      className={classnames(classes.characterSheet, {
        [classes.hidden]: !showCharacterSheet,
      })}
    >
      <div className={classes.level}>
        <div className={classes.col}>
          <div className={classes.name}>{character.name}</div>
          Level: {character.level} SP: {character.remaining}
        </div>
        <div className={classes.col}>
          Health: {character.HP_CUR} of {character.HP_MAX}
          <br />
          Energy: {character.ENERGY_CUR} of {character.ENERGY_MAX}
        </div>
      </div>
      <hr className={classes.hr} />
      <div className={classes.stats}>
        <div className={classes.col}>
          STR: {character.STR}
          <br />
          DEX: {character.DEX}
          <br />
          INT: {character.INT}
        </div>
        <div className={classes.col}>
          MAR: {character.MAR}
          <br />
          ENE: {character.ENE}
          <br />
          KIN: {character.KIN}
        </div>
        <div className={classes.col}>
          LEA: {character.LEA}
          <br />
          LOT: {character.LOT}
          <br />
          HIT: {character.HIT}
        </div>
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
