import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import classnames from 'classnames';
import menuActions from 'core/menu/actions';
import menuButtonBackground from 'assets/img/icon-menu.png';
import { VARIABLES } from 'constants/config';

const styles = {
  menu: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    background: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    margin: '0 auto',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    opacity: 1,
    transition: '0.25s all',
    transitionTimingFunction: `steps(${VARIABLES.ui.fps / 4})`,
  },
  menuList: {
    width: '30%',
    textAlign: 'center',
  },
  menuItem: {
    background: '#031627',
    color: '#7da4f4',
    border: '1px solid #7da4f4',
    padding: '5px 10px 3px 10px',
    margin: '0 0 3px',
    fontSize: 8,
    borderRadius: 3,
    width: '100%',
  },
  hidden: {
    opacity: 0,
    zIndex: -1,
  },
  menuButton: {
    background: `url(${menuButtonBackground}) 0 0 no-repeat`,
    width: 38,
    top: 149,
    right: 34,
    position: 'absolute',
    height: 11,
    cursor: 'pointer',
    boxShadow: '0 0 4px #000',
    outline: '2px solid rgba(0, 0, 0, 0.4)',

    '&:hover': {
      backgroundPosition: '-38px 0',
    },
  },
  saveNameInput: {
    background: '#000',
    color: '#fff',
    border: '1px solid #7da4f4',
    padding: '5px 10px 3px 10px',
    margin: '0 0 3px',
    fontSize: 8,
    borderRadius: 3,
    width: '100%',
    '&:focus': {
      background: 'black',
    },
  },
};

const Menu = ({
  classes,
  dispatchShowMenu,
  dispatchHideMenu,
  stateMenuShow,
  dispatchSaveGame,
  dispatchLoadGame,
}) => {
  const [showLoadMenu, setShowLoadMenu] = useState(false);
  const [showSaveMenu, setShowSaveMenu] = useState(false);
  const [showSaveName, setShowSaveName] = useState(false);
  const [saveIndex, setSaveIndex] = useState(null);

  const savedGames = (JSON.parse(localStorage.getItem('savedGames')) || [])
    .concat([{}, {}, {}, {}, {}])
    .slice(0, 5);

  const handleSaveGame = () => {
    setShowSaveMenu(true);
    // dispatchSaveGame();
  };

  const handleLoadGame = () => {
    setShowLoadMenu(true);
    // dispatchLoadGame();
  };

  const handleBack = () => {
    setShowLoadMenu(false);
    setShowSaveMenu(false);
    setShowSaveName(false);
  };

  const chooseFile = i => {
    handleBack();
    setSaveIndex(i);
    setShowSaveName(true);
  };

  return (
    <>
      <div
        onClick={() => {
          handleBack();
          dispatchShowMenu();
        }}
        className={classes.menuButton}
      />
      <div
        className={classnames(classes.menu, {
          [classes.hidden]: !stateMenuShow,
        })}
      >
        {!showLoadMenu && !showSaveMenu && !showSaveName && (
          <div className={classes.menuList}>
            <button type="button" className={classes.menuItem} onClick={handleSaveGame}>
              Save Game
            </button>
            <button type="button" className={classes.menuItem} onClick={handleLoadGame}>
              Load Game
            </button>
            <button disabled type="button" className={classes.menuItem}>
              Disable Sound
            </button>
            <button disabled type="button" className={classes.menuItem}>
              Disable Music
            </button>
            <button disabled type="button" className={classes.menuItem}>
              Disable Help
            </button>
            <button type="button" className={classes.menuItem} onClick={dispatchHideMenu}>
              Resume Game
            </button>
          </div>
        )}
        {showLoadMenu && (
          <div>
            {savedGames
              .filter(game => game.name)
              .map((game, i) => (
                <div key={i}>
                  <button
                    type="button"
                    className={classes.menuItem}
                    onClick={() => dispatchLoadGame(game.name)}
                  >
                    {game.name}
                  </button>
                </div>
              ))}
            <br />
            <button type="button" onClick={handleBack} className={classes.menuItem}>
              &lt; Back
            </button>
          </div>
        )}
        {showSaveMenu && (
          <div>
            SAVE GAME
            {savedGames.map((game, i) => (
              // eslint-disable-next-line
              <div key={i}>
                <button type="button" className={classes.menuItem} onClick={() => chooseFile(i)}>
                  {game.name || '(empty)'}
                </button>
              </div>
            ))}
            <br />
            <button type="button" onClick={handleBack} className={classes.menuItem}>
              &lt; Back
            </button>
          </div>
        )}
        {showSaveName && (
          <div className={classes.saveName}>
            <input
              className={classes.saveNameInput}
              type="text"
              defaultValue={savedGames[saveIndex].name}
              onChange={e => {
                savedGames[saveIndex].name = e.target.value;
              }}
            />
            <button
              type="button"
              className={classes.menuItem}
              onClick={() => dispatchSaveGame(savedGames[saveIndex].name, saveIndex)}
            >
              Save
            </button>
            <br />
            <br />
            <button type="button" onClick={handleBack} className={classes.menuItem}>
              &lt; Back
            </button>
          </div>
        )}
      </div>
    </>
  );
};

Menu.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  stateMenuShow: PropTypes.bool.isRequired,
  dispatchShowMenu: PropTypes.func.isRequired,
  dispatchHideMenu: PropTypes.func.isRequired,
  dispatchSaveGame: PropTypes.func.isRequired,
  dispatchLoadGame: PropTypes.func.isRequired,
};

const mapStateToProps = ({ menu }) => ({
  stateMenuShow: menu.show,
});

const mapDispatchToProps = {
  dispatchShowMenu: menuActions.show,
  dispatchHideMenu: menuActions.hide,
  dispatchSaveGame: menuActions.saveGame,
  dispatchLoadGame: menuActions.loadGame,
};

const StyledMenu = withStyles(styles)(Menu);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledMenu);
