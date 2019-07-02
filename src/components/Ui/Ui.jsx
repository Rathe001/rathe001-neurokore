import React from 'react';
import { createUseStyles } from 'react-jss';
import CharacterCreation from 'components/CharacterCreation/CharacterCreation';
import Dialog from 'components/Dialog';
import Party from 'components/Party';
import Tooltip from 'components/Tooltip';
import CharacterSheet from 'components/CharacterSheet';
import Menu from 'components/Menu';
import Level from 'components/Level';
import styles from './Ui.styles';

const useStyles = createUseStyles(styles);

const Ui = () => {
  const classes = useStyles();

  return (
    <div className={classes.ui}>
      <div className={classes.logo} />
      <Level />
      <CharacterCreation />
      <CharacterSheet />
      <Dialog />
      <Tooltip />
      <Party />
      <Menu />
    </div>
  );
};

export default Ui;
