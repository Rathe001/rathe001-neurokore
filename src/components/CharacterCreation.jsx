import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import classnames from 'classnames';
import background from 'assets/img/bg-create-character.png';
import { STATS } from 'constants/stats';
import tooltipActions from 'core/tooltip/actions';
import characterCreationActions from 'core/characterCreation/actions';

const styles = {
  characterCreation: {
    position: 'absolute',
    padding: 5,
    fontSize: 13,
    background: `url(${background}) 0 0 no-repeat`,
    backgroundSize: '100% 100%',
    top: 7,
    left: 10,
    width: 145,
    height: 145,
  },
  title: {
    textAlign: 'center',
  },
  stats: {
    borderTop: '1px solid rgba(0, 0, 0, 0.2)',
    marginTop: 5,
    paddingTop: 5,
  },
  sp: {
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
  button: {
    border: 'none',
    cursor: 'pointer',
    margin: '0 0 1px 0',
    lineHeight: '6px',
    padding: '2px 2px 0 2px',
    background: '#031627',
    color: '#7da4f4',
    borderRadius: 2,
  },
  disabled: {
    background: '#555',
    color: '#fff',
  },
  add: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    padding: 1,
    border: 'none',
  },
  current: {
    width: 12,
    textAlign: 'center',
    display: 'inline-block',
  },
  name: {
    padding: '0 0 0 5px',
  },
};

const CharacterCreation = ({ classes, setText, setAttr, addCharacter, stats, remaining }) => {
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

  return (
    <div className={classes.characterCreation}>
      <h1 className={classes.title}>Add a new character</h1>
      <span className={classes.sp}>SP: {remaining}</span>
      <label htmlFor="charName">
        Name:
        <input
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
      <div className={classes.stats}>
        {STATS.map(stat => (
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
        ))}
      </div>
      <button
        type="button"
        className={classes.add}
        disabled={remaining > 0 || stats.name === ''}
        onClick={() => addCharacter(stats)}
      >
        Add Character
      </button>
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
};

const mapStateToProps = ({ characterCreation }) => ({
  remaining: characterCreation.remaining,
  stats: characterCreation,
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
