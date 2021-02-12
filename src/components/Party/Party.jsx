import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import update from 'immutability-helper';
import Character from 'components/Character';
import partyActions from 'core/party/actions';
import styles from './Party.styles';

const useStyles = createUseStyles(styles);

const Party = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const stateParty = useSelector((state) => state.party);

  const move = useCallback(
    (dragIndex, hoverIndex) => {
      const character = stateParty.characters[dragIndex];
      dispatch(
        partyActions.setCharacters(
          update(stateParty.characters, {
            $splice: [[dragIndex, 1], [hoverIndex, 0, character]],
          }),
        ),
      );
    },
    [stateParty, dispatch],
  );

  return (
    <ol className={classnames(classes.party)}>
      {stateParty.characters.map((member, i) => (
        <Character key={member.id} id={member.id} data={member} move={move} index={i} />
      ))}
    </ol>
  );
};

export default Party;
