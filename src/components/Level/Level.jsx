import React, { useEffect } from 'react';
import classnames from 'classnames';
import { createUseStyles } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { useKeyPress } from 'hooks/keyboard';
import levelActions from 'core/level/actions';
import styles from './Level.styles';

const useStyles = createUseStyles(styles);

const levelData = [
  {
    id: 0,
    cells: [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
    ],
  },
  {
    id: 1,
    cells: [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
    ],
  },
  {
    id: 2,
    cells: [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
    ],
  },
  {
    id: 3,
    cells: [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
    ],
  },
  {
    id: 4,
    cells: [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
    ],
  },
  {
    id: 5,
    cells: [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
    ],
  },
  {
    id: 6,
    cells: [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
    ],
  },
  {
    id: 7,
    cells: [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
    ],
  },
  {
    id: 8,
    cells: [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
    ],
  },
  {
    id: 9,
    cells: [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
    ],
  },
];

const Level = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const statePosX = useSelector(state => state.level.position.x);
  const statePosY = useSelector(state => state.level.position.y);
  const statePosFacing = useSelector(state => state.level.position.facing);

  useKeyPress('ArrowUp', () => dispatch(levelActions.moveForward()));
  useKeyPress('ArrowRight', () => dispatch(levelActions.turnRight()));
  useKeyPress('ArrowDown', () => dispatch(levelActions.moveBackward()));
  useKeyPress('ArrowLeft', () => dispatch(levelActions.turnLeft()));

  return (
    <div className={classes.level}>
      <div className={classes.viewport}>
        {levelData.map((row, y) => (
          <div
            key={row.id}
            className={classes.row}
            style={{
              height: `${100 / levelData.length}%`,
            }}
          >
            {row.cells.map((cell, x) => (
              <div
                key={cell.id}
                style={{
                  width: `${100 / levelData[0].cells.length}%`,
                }}
                className={classnames(classes.col, {
                  [classes.activeColN]:
                    y === statePosY && x === statePosX && statePosFacing === 'n',
                  [classes.activeColS]:
                    y === statePosY && x === statePosX && statePosFacing === 's',
                  [classes.activeColE]:
                    y === statePosY && x === statePosX && statePosFacing === 'e',
                  [classes.activeColW]:
                    y === statePosY && x === statePosX && statePosFacing === 'w',
                })}
              />
            ))}
          </div>
        ))}
      </div>
      <div className={classes.moveForward} onClick={() => dispatch(levelActions.moveForward())} />
      <div className={classes.turnRight} onClick={() => dispatch(levelActions.turnRight())} />
      <div className={classes.moveBackward} onClick={() => dispatch(levelActions.moveBackward())} />
      <div className={classes.turnLeft} onClick={() => dispatch(levelActions.turnLeft())} />
    </div>
  );
};

export default Level;
