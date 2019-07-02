import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './Level.styles';

const useStyles = createUseStyles(styles);

const Level = () => {
  const classes = useStyles();

  return <div className={classes.level} />;
};

export default Level;
