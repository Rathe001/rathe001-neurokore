import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { useDrag, useDrop } from 'react-dnd';
import { DND_ITEM_TYPES } from 'constants/config';
import tooltipActions from 'core/tooltip/actions';
import characterSheetActions from 'core/characterSheet/actions';
import styles from './Character.styles';

const useStyles = createUseStyles(styles);

const Character = ({
  data, move, index, id,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: DND_ITEM_TYPES.CHARACTER,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      move(dragIndex, hoverIndex);
      // eslint-disable-next-line
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: DND_ITEM_TYPES.CHARACTER, id, index },
    type: 'CARD',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <li
      className={classes.character}
      ref={ref}
      style={{ opacity }}
      onClick={() => dispatch(characterSheetActions.show(data))}
    >
      <div className={classes.name}>{data.name}</div>
      <div
        className={classes.hp}
        onMouseEnter={() => dispatch(tooltipActions.setText(`Hit Points: ${data.HP_CUR} of ${data.HP_MAX}`))}
        onMouseLeave={() => dispatch(tooltipActions.setText(''))}
      >
        {data.HP_CUR}
        <div className={classes.barBg}>
          <div className={classes.barHp} />
        </div>
      </div>
      {data.ENERGY_MAX > 0 && (
        <span
          className={classes.resources}
          onMouseEnter={() => dispatch(tooltipActions.setText(`Energy: ${data.ENERGY_CUR} of ${data.ENERGY_MAX}`))}
          onMouseLeave={() => dispatch(tooltipActions.setText(''))}
        >
          {data.ENERGY_CUR}
        </span>
      )}
    </li>
  );
};

Character.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    HP_CUR: PropTypes.number,
    HP_MAX: PropTypes.number,
    ENERGY_MAX: PropTypes.number,
    ENERGY_CUR: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  move: PropTypes.func.isRequired,
};

export default Character;
