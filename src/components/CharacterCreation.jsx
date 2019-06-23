import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import classnames from 'classnames';
import background from 'assets/img/bg-create-character.png';
import { STATS } from 'constants/stats';
import tooltipActions from 'core/tooltip/actions';
import characterCreationActions from 'core/characterCreation/actions';
import { VARIABLES } from 'constants/config';

const styles = {
  characterCreation: {
    position: 'absolute',
    padding: 5,
    fontSize: 13,
    background: `url(${background}) 100% 100% no-repeat`,
    top: 7,
    left: 10,
    width: 145,
    height: 145,
    transitionTimingFunction: `steps(${VARIABLES.ui.fps})`,
  },
  hidden: {
    display: 'none',
  },
  complete: {
    animation: `openDoor 2s steps(${VARIABLES.ui.fps})`,
    padding: 0,
    overflow: 'hidden',
    height: 0,
  },
  title: {
    textAlign: 'center',
  },
  stats: {
    position: 'relative',
    borderTop: '1px solid rgba(0, 0, 0, 0.2)',
    marginTop: 5,
    borderRadius: 3,
    padding: '3px',
    background: 'rgba(255, 255, 255, 0.3)',
  },
  sp: {
    position: 'absolute',
    top: 17,
    right: 5,
  },
  button: {
    border: 'none',
    cursor: 'pointer',
    margin: '0 0 1px 0',
    lineHeight: '6px',
    padding: '1px 4px 0 4px',
    background: '#031627',
    color: '#7da4f4',
    borderRadius: 2,
  },
  disabled: {
    background: '#555',
    color: '#fff',
  },
  add: {
    right: 45,
    bottom: 2,
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '3px 6px',
    borderRadius: 3,
    cursor: 'pointer',
    border: '1px solid black',
    position: 'absolute',
    '&:active, &:focus': {
      background: '#fff',
    },
  },
  current: {
    width: 12,
    textAlign: 'center',
    display: 'inline-block',
  },
  name: {
    padding: '0 0 0 5px',
  },
  charName: {
    width: 70,
    margin: '0 0 0 3px',
    border: '1px solid rgba(0, 0, 0, 0.4)',
  },
  hr: {
    border: 'none',
    height: 2,
    borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
    background: 'rgba(0, 0, 0, 0.4)',
    widh: '100%',
  },
  textLighter: {
    opacity: 0.3,
  },
  '@keyframes openDoor': {
    '0%': { height: 145 },
    '100%': { height: 0 },
  },
};

const CharacterCreation = ({
  classes,
  dispatchTooltipSetText,
  dispatchCharacterCreationSetAttr,
  dispatchCharacterCreationAddCharacter,
  stateCharacterCreation,
  statePartyCreationComplete,
}) => {
  const subtractAttr = stat => {
    if (stateCharacterCreation[stat.abbr] > 0) {
      dispatchCharacterCreationSetAttr(stat.abbr, stateCharacterCreation[stat.abbr] - 1);
      dispatchCharacterCreationSetAttr('remaining', stateCharacterCreation.remaining + stat.cost);
    }
  };

  const addAttr = stat => {
    if (stateCharacterCreation.remaining - stat.cost >= 0) {
      dispatchCharacterCreationSetAttr(stat.abbr, stateCharacterCreation[stat.abbr] + 1);
      dispatchCharacterCreationSetAttr('remaining', stateCharacterCreation.remaining - stat.cost);
    }
  };

  useEffect(() => {
    console.log(`Complete: ${statePartyCreationComplete}`);
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
              onChange={e => dispatchCharacterCreationSetAttr('name', e.target.value)}
              value={stateCharacterCreation.name}
            />
          </label>
          <br />
          <hr className={classes.hr} />
          {STATS.map(stat => (
            <div
              key={stat.id}
              onMouseOver={() => dispatchTooltipSetText(stat.desc)}
              onFocus={() => dispatchTooltipSetText(stat.desc)}
              onBlur={() => dispatchTooltipSetText('')}
              onMouseLeave={() => dispatchTooltipSetText('')}
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
            onClick={() => dispatchCharacterCreationAddCharacter(stateCharacterCreation)}
          >
            Add Character
          </button>
        )}
      </div>
    </div>
  );
};

CharacterCreation.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  dispatchTooltipSetText: PropTypes.func.isRequired,
  dispatchCharacterCreationSetAttr: PropTypes.func.isRequired,
  dispatchCharacterCreationAddCharacter: PropTypes.func.isRequired,
  stateCharacterCreation: PropTypes.shape({}).isRequired,
  statePartyCreationComplete: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ characterCreation, party }) => ({
  stateCharacterCreation: characterCreation,
  statePartyCreationComplete: party.creationComplete,
});
const mapDispatchToProps = {
  dispatchTooltipSetText: tooltipActions.setText,
  dispatchCharacterCreationSetAttr: characterCreationActions.setAttr,
  dispatchCharacterCreationAddCharacter: characterCreationActions.addCharacter,
};

const StyledCharacterCreation = withStyles(styles)(CharacterCreation);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledCharacterCreation);
