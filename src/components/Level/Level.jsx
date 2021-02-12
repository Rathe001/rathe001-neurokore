import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { useKeyPress } from 'hooks/keyboard';
import levelActions from 'core/level/actions';
import Tiles from 'components/Tiles';
import styles from './Level.styles';

const useStyles = createUseStyles(styles);

const Level = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const stateLevelData = useSelector((state) => state.level.levelData);
  const stateLevelPosition = useSelector((state) => state.level.position);

  function moveForward() {
    if (
      (stateLevelPosition.facing === 'n'
        && stateLevelData.data[stateLevelPosition.y + 1]
        && stateLevelData.data[stateLevelPosition.y + 1].cells[stateLevelPosition.x].open)
      || (stateLevelPosition.facing === 'e'
        && stateLevelData.data[stateLevelPosition.x + 1]
        && stateLevelData.data[stateLevelPosition.y].cells[stateLevelPosition.x + 1].open)
      || (stateLevelPosition.facing === 's'
        && stateLevelData.data[stateLevelPosition.y - 1]
        && stateLevelData.data[stateLevelPosition.y - 1].cells[stateLevelPosition.x].open)
      || (stateLevelPosition.facing === 'w'
        && stateLevelData.data[stateLevelPosition.x - 1]
        && stateLevelData.data[stateLevelPosition.y].cells[stateLevelPosition.x - 1].open)
    ) {
      dispatch(levelActions.moveForward());
    }
  }

  function moveBackward() {
    if (
      (stateLevelPosition.facing === 'n'
        && stateLevelData.data[stateLevelPosition.y - 1]
        && stateLevelData.data[stateLevelPosition.y - 1].cells[stateLevelPosition.x].open)
      || (stateLevelPosition.facing === 'e'
        && stateLevelData.data[stateLevelPosition.x - 1]
        && stateLevelData.data[stateLevelPosition.y].cells[stateLevelPosition.x - 1].open)
      || (stateLevelPosition.facing === 's'
        && stateLevelData.data[stateLevelPosition.y + 1]
        && stateLevelData.data[stateLevelPosition.y + 1].cells[stateLevelPosition.x].open)
      || (stateLevelPosition.facing === 'w'
        && stateLevelData.data[stateLevelPosition.x + 1]
        && stateLevelData.data[stateLevelPosition.y].cells[stateLevelPosition.x + 1].open)
    ) {
      dispatch(levelActions.moveBackward());
    }
  }

  useKeyPress('ArrowUp', () => moveForward());
  useKeyPress('ArrowRight', () => dispatch(levelActions.turnRight()));
  useKeyPress('ArrowDown', () => moveBackward());
  useKeyPress('ArrowLeft', () => dispatch(levelActions.turnLeft()));

  useEffect(() => {
    if (!stateLevelData.data) {
      dispatch(levelActions.loadData(1));
    }
  });

  return (
    <div className={classes.level}>
      <Tiles />

      <div className={classes.overlay} />

      <div className={classes.moveForward} onClick={() => moveForward()} />
      <div className={classes.turnRight} onClick={() => dispatch(levelActions.turnRight())} />
      <div className={classes.moveBackward} onClick={() => moveBackward()} />
      <div className={classes.turnLeft} onClick={() => dispatch(levelActions.turnLeft())} />
    </div>
  );
};

export default Level;
