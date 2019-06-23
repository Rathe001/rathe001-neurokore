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

const CharacterSheet = ({
  classes,
  stateCharacterSheetCharacter,
  dispatchCharacterSheetToggle,
  stateCharacterSheetShow,
}) => {
  return (
    <div
      className={classnames(classes.characterSheet, {
        [classes.hidden]: !stateCharacterSheetShow,
      })}
    >
      <div className={classes.level}>
        <div className={classes.col}>
          <div className={classes.name}>{stateCharacterSheetCharacter.name}</div>
          Level: {stateCharacterSheetCharacter.level} SP: {stateCharacterSheetCharacter.remaining}
        </div>
        <div className={classes.col}>
          Health: {stateCharacterSheetCharacter.HP_CUR} of {stateCharacterSheetCharacter.HP_MAX}
          <br />
          Energy: {stateCharacterSheetCharacter.ENERGY_CUR} of{' '}
          {stateCharacterSheetCharacter.ENERGY_MAX}
        </div>
      </div>
      <hr className={classes.hr} />
      <div className={classes.stats}>
        <div className={classes.col}>
          STR: {stateCharacterSheetCharacter.STR}
          <br />
          DEX: {stateCharacterSheetCharacter.DEX}
          <br />
          INT: {stateCharacterSheetCharacter.INT}
        </div>
        <div className={classes.col}>
          MAR: {stateCharacterSheetCharacter.MAR}
          <br />
          ENE: {stateCharacterSheetCharacter.ENE}
          <br />
          KIN: {stateCharacterSheetCharacter.KIN}
        </div>
        <div className={classes.col}>
          LEA: {stateCharacterSheetCharacter.LEA}
          <br />
          LOT: {stateCharacterSheetCharacter.LOT}
          <br />
          HIT: {stateCharacterSheetCharacter.HIT}
        </div>
      </div>
      <button
        className={classes.btnClose}
        type="button"
        onClick={() => dispatchCharacterSheetToggle({})}
      >
        X
      </button>
    </div>
  );
};

CharacterSheet.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  stateCharacterSheetCharacter: PropTypes.shape({}).isRequired,
  stateCharacterSheetShow: PropTypes.bool.isRequired,
  dispatchCharacterSheetToggle: PropTypes.func.isRequired,
};

const mapStateToProps = ({ characterSheet }) => ({
  stateCharacterSheetCharacter: characterSheet.character,
  stateCharacterSheetShow: characterSheet.show,
});

const mapDispatchToProps = {
  dispatchCharacterSheetToggle: characterSheetActions.toggle,
};

const StyledCharacterSheet = withStyles(styles)(CharacterSheet);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledCharacterSheet);
