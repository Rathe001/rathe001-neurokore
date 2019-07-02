import React, { useEffect } from 'react';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { STATS } from 'constants/stats';
import tooltipActions from 'core/tooltip/actions';
import characterCreationActions from 'core/characterCreation/actions';
import dialogActions from 'core/dialog/actions';
import styles from './CharacterCreation.styles';

const useStyles = createUseStyles(styles);

const CharacterCreation = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const stateCharacterCreation = useSelector(state => state.characterCreation);
  const statePartyCreationComplete = useSelector(state => state.party.creationComplete);

  const subtractAttr = stat => {
    if (stateCharacterCreation[stat.abbr] > 0) {
      dispatch(characterCreationActions.setAttr(stat.abbr, stateCharacterCreation[stat.abbr] - 1));
      dispatch(
        characterCreationActions.setAttr('remaining', stateCharacterCreation.remaining + stat.cost),
      );
    }
  };

  const addAttr = stat => {
    if (stateCharacterCreation.remaining - stat.cost >= 0) {
      dispatch(characterCreationActions.setAttr(stat.abbr, stateCharacterCreation[stat.abbr] + 1));
      dispatch(
        characterCreationActions.setAttr('remaining', stateCharacterCreation.remaining - stat.cost),
      );
    }
  };

  useEffect(() => {
    dispatch(
      dialogActions.setText(
        'Your cell door crackles with electricity, and then opens unexpectedly.',
      ),
    );
  }, [statePartyCreationComplete]);

  return (
    <div
      className={classnames(classes.characterCreation, {
        [classes.complete]: statePartyCreationComplete,
      })}
    >
      <div
        className={classnames({
          [classes.hidden]: !stateCharacterCreation.show || statePartyCreationComplete,
        })}
      >
        <div className={classes.stats}>
          <h1 className={classes.title}>
            <span className={classes.textLighter}>-=[</span> Add a new character{' '}
            <span className={classes.textLighter}>]=-</span>
          </h1>
          <br />
          <span className={classes.sp}>SP: {stateCharacterCreation.remaining}</span>
          <label htmlFor="charName">
            Name:
            <input
              className={classes.charName}
              id="charName"
              name="charName"
              type="text"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              onChange={e => dispatch(characterCreationActions.setAttr('name', e.target.value))}
              value={stateCharacterCreation.name}
            />
          </label>
          <br />
          <hr className={classes.hr} />
          {STATS.map(stat => (
            <div
              key={stat.id}
              onMouseOver={() => dispatch(tooltipActions.setText(stat.desc))}
              onFocus={() => dispatch(tooltipActions.setText(stat.desc))}
              onBlur={() => dispatch(tooltipActions.setText(''))}
              onMouseLeave={() => dispatch(tooltipActions.setText(''))}
            >
              <button
                className={classes.button}
                type="button"
                onClick={() => subtractAttr(stat)}
                disabled={stateCharacterCreation[stat.abbr] === 0}
              >
                -
              </button>
              <span className={classes.current}>{stateCharacterCreation[stat.abbr]}</span>
              <button
                className={classes.button}
                type="button"
                onClick={() => addAttr(stat)}
                disabled={stateCharacterCreation.remaining === 0}
              >
                +
              </button>
              <span className={classes.name}>
                {stat.name} ({stat.cost})
              </span>
              {stat.abbr === 'INT' && <hr className={classes.hr} />}
            </div>
          ))}
        </div>
        {stateCharacterCreation.remaining === 0 && !!stateCharacterCreation.name && (
          <button
            type="button"
            className={classes.add}
            onClick={() => dispatch(characterCreationActions.addCharacter(stateCharacterCreation))}
          >
            Add Character
          </button>
        )}
      </div>
    </div>
  );
};

export default CharacterCreation;
