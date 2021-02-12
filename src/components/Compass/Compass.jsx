import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import styles from './Compass.styles';

const useStyles = createUseStyles(styles);

const Level = () => {
  const classes = useStyles();
  const statePosition = useSelector((state) => state.level.position);

  return (
    <>
      <div className={classes.compass}>
        <div className={classes.facing}>{statePosition.facing}</div>
      </div>
      <div className={classes.position}>
        X:{statePosition.x} Y:{statePosition.y}
      </div>
    </>
  );
};

export default Level;
