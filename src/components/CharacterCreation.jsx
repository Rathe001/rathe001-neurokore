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
    transition: '1s all',
    transitionTimingFunction: `steps(${VARIABLES.ui.fps})`,
  },
  hidden: {
    display: 'none',
  },
  complete: {
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
};

const CharacterCreation = ({
  classes,
  setText,
  setAttr,
  addCharacter,
  stats,
  remaining,
  showCharacterCreation,
  creationComplete,
}) => {
  const subtractAttr = stat => {
    if (stats[stat.abbr] > 0) {
      setAttr(stat.abbr, stats[stat.abbr] - 1);
      setAttr('remaining', remaining + stat.cost);
    }
  };

  const addAttr = stat => {
    if (remaining - stat.cost >= 0) {
      setAttr(stat.abbr, stats[stat.abbr] + 1);
      setAttr('remaining', remaining - stat.cost);
    }
  };

  useEffect(() => {
    console.log(`Complete: ${creationComplete}`);
  }, [creationComplete]);

  return (
    <div
      className={classnames(classes.characterCreation, {
        [classes.complete]: creationComplete,
      })}
    >
      <div
        className={classnames({
          [classes.hidden]: !showCharacterCreation || creationComplete,
        })}
      >
        <div className={classes.stats}>
          <h1 className={classes.title}>
            <span className={classes.textLighter}>-=[</span> Add a new character{' '}
            <span className={classes.textLighter}>]=-</span>
          </h1>
          <br />
          <span className={classes.sp}>SP: {remaining}</span>
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
              onChange={e => setAttr('name', e.target.value)}
              value={stats.name}
            />
          </label>
          <br />
          <hr className={classes.hr} />
          {STATS.map(stat => (
            <>
              <div
                key={stat.id}
                onMouseOver={() => setText(stat.desc)}
                onFocus={() => setText(stat.desc)}
                onBlur={() => setText('')}
                onMouseLeave={() => setText('')}
              >
                <button
                  className={classnames(classes.button, {
                    [classes.disabled]: stats[stat.abbr] === 0,
                  })}
                  type="button"
                  onClick={() => subtractAttr(stat)}
                  disabled={stats[stat.abbr] === 0}
                >
                  -
                </button>
                <span className={classes.current}>{stats[stat.abbr]}</span>
                <button
                  className={classnames(classes.button, {
                    [classes.disabled]: remaining === 0,
                  })}
                  type="button"
                  onClick={() => addAttr(stat)}
                  disabled={remaining === 0}
                >
                  +
                </button>
                <span className={classes.name}>
                  {stat.name} ({stat.cost})
                </span>
              </div>
              {stat.abbr === 'INT' && <hr className={classes.hr} />}
            </>
          ))}
        </div>
        {remaining === 0 && !!stats.name && (
          <button type="button" className={classes.add} onClick={() => addCharacter(stats)}>
            Add Character
          </button>
        )}
      </div>
    </div>
  );
};

CharacterCreation.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  setText: PropTypes.func.isRequired,
  setAttr: PropTypes.func.isRequired,
  addCharacter: PropTypes.func.isRequired,
  remaining: PropTypes.number.isRequired,
  stats: PropTypes.shape({}).isRequired,
  showCharacterCreation: PropTypes.bool.isRequired,
  creationComplete: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ characterCreation, party }) => ({
  remaining: characterCreation.remaining,
  stats: characterCreation,
  showCharacterCreation: characterCreation.show,
  creationComplete: party.creationComplete,
});
const mapDispatchToProps = {
  setText: tooltipActions.setText,
  setAttr: characterCreationActions.setAttr,
  addCharacter: characterCreationActions.addCharacter,
};

const StyledCharacterCreation = withStyles(styles)(CharacterCreation);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledCharacterCreation);
