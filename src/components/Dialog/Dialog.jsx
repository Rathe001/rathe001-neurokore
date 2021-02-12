import React from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import styles from './Dialog.styles';

const useStyles = createUseStyles(styles);

const Dialog = () => {
  const classes = useStyles();
  const stateDialogShow = useSelector((state) => state.dialog.show);
  const stateDialogText = useSelector((state) => state.dialog.text);

  return (
    <div
      className={classnames(classes.dialog, {
        [classes.hidden]: !stateDialogShow,
      })}
      dangerouslySetInnerHTML={{ __html: stateDialogText }}
    />
  );
};
export default Dialog;
