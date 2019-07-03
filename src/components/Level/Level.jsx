import React from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import levelActions from 'core/level/actions';
import styles from './Level.styles';

const useStyles = createUseStyles(styles);

const Level = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.level}>
      <div className={classes.moveForward} onClick={() => dispatch(levelActions.moveForward())} />
      <div className={classes.turnRight} onClick={() => dispatch(levelActions.turnRight())} />
      <div className={classes.moveBackward} onClick={() => dispatch(levelActions.moveBackward())} />
      <div className={classes.turnLeft} onClick={() => dispatch(levelActions.turnLeft())} />
    </div>
  );
};

export default Level;
