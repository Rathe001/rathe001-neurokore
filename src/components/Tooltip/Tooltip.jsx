import React from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import styles from './Tooltip.styles';

const useStyles = createUseStyles(styles);

const Tooltip = () => {
  const classes = useStyles();

  const stateTooltipShow = useSelector((state) => state.tooltip.show);
  const stateTooltipText = useSelector((state) => state.tooltip.text);

  return (
    <div
      className={classnames(classes.tooltip, {
        [classes.hidden]: !stateTooltipShow,
      })}
      dangerouslySetInnerHTML={{ __html: stateTooltipText }}
    />
  );
};

export default Tooltip;
