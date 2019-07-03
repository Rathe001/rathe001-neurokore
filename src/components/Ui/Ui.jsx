import React from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import CharacterCreation from 'components/CharacterCreation/CharacterCreation';
import Dialog from 'components/Dialog';
import Party from 'components/Party';
import Tooltip from 'components/Tooltip';
import CharacterSheet from 'components/CharacterSheet';
import Menu from 'components/Menu';
import Level from 'components/Level';
import Compass from 'components/Compass';
import styles from './Ui.styles';

const useStyles = createUseStyles(styles);

const Ui = () => {
  const classes = useStyles();

  const statePartyCreationComplete = useSelector(state => state.party.creationComplete);

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
      {statePartyCreationComplete && <Compass />}
    </div>
  );
};

export default Ui;
