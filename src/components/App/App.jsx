import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { VARIABLES } from 'constants/config';
import uiActions from 'core/ui/actions';
import Ui from 'components/Ui';
import Splash from 'components/Splash';
import styles from './App.styles';

const useStyles = createUseStyles(styles);

const getScaleRatio = () => (
  window.innerWidth / window.innerHeight < VARIABLES.ui.width / VARIABLES.ui.height
    ? window.innerWidth / VARIABLES.ui.width
    : window.innerHeight / VARIABLES.ui.height);

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const stateUiScale = useSelector((state) => state.ui.scale);

  useEffect(() => {
    window.addEventListener('resize', () => dispatch(uiActions.setScale(getScaleRatio())));
  }, [stateUiScale, dispatch]);

  return (
    <div
      className={classes.app}
      style={{
        zoom: `${!stateUiScale ? getScaleRatio() : stateUiScale}`,
      }}
    >
      <Splash />
      <Ui />
    </div>
  );
};

export default App;
