import React from 'react';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import characterSheetActions from 'core/characterSheet/actions';
import styles from './CharacterSheet.styles';

const useStyles = createUseStyles(styles);

const CharacterSheet = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const stateCharacterSheetCharacter = useSelector((state) => state.characterSheet.character);
  const stateCharacterSheetShow = useSelector((state) => state.characterSheet.show);

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
        onClick={() => dispatch(characterSheetActions.toggle({}))}
      >
        X
      </button>
    </div>
  );
};

export default CharacterSheet;
