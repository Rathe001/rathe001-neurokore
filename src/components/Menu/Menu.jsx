import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import { useKeyPress } from 'hooks/keyboard';
import menuActions from 'core/menu/actions';
import styles from './Menu.styles';

const useStyles = createUseStyles(styles);

const Menu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const stateMenuShow = useSelector((state) => state.menu.show);

  const [showLoadMenu, setShowLoadMenu] = useState(false);
  const [showSaveMenu, setShowSaveMenu] = useState(false);
  const [showSaveName, setShowSaveName] = useState(false);
  const [saveIndex, setSaveIndex] = useState(null);

  const savedGames = (JSON.parse(localStorage.getItem('savedGames')) || [])
    .concat([{}, {}, {}, {}, {}])
    .slice(0, 5);

  const handleSaveGame = () => {
    setShowSaveMenu(true);
  };

  const handleLoadGame = () => {
    setShowLoadMenu(true);
  };

  const handleBack = () => {
    setShowLoadMenu(false);
    setShowSaveMenu(false);
    setShowSaveName(false);
  };

  const chooseFile = (i) => {
    handleBack();
    setSaveIndex(i);
    setShowSaveName(true);
  };

  useKeyPress('Escape', () => {
    setShowLoadMenu(false);
    setShowSaveMenu(false);
    setShowSaveName(false);
    dispatch(menuActions.toggle());
  });

  return (
    <>
      <div
        onClick={() => {
          handleBack();
          dispatch(menuActions.show());
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
            <button
              type="button"
              className={classes.menuItem}
              onClick={() => dispatch(menuActions.hide())}
            >
              Resume Game
            </button>
          </div>
        )}
        {showLoadMenu && (
          <div>
            {savedGames
              .filter((game) => game.name)
              .map((game) => (
                <div key={game.name}>
                  <button
                    type="button"
                    className={classes.menuItem}
                    onClick={() => {
                      dispatch(menuActions.loadGame(game.name));
                    }}
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
              onChange={(e) => {
                savedGames[saveIndex].name = e.target.value;
              }}
            />
            <button
              type="button"
              className={classes.menuItem}
              onClick={() => {
                dispatch(menuActions.saveGame(savedGames[saveIndex].name, saveIndex));
              }}
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

export default Menu;
