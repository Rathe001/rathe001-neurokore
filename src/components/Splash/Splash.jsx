import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import splashActions from 'core/splash/actions';
import logo from 'assets/img/logo.png';
import styles from './Splash.styles';

const useStyles = createUseStyles(styles);

const Splash = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const stateSplashShow = useSelector(state => state.splash.show);

  return (
    <div
      onClick={() => dispatch(splashActions.toggle())}
      className={classnames(classes.splash, {
        [classes.hidden]: !stateSplashShow,
      })}
    >
      <img src={logo} className={classes.logo} alt="New Game+" />
      <span className={classes.start}>Click to start</span>
    </div>
  );
};

export default Splash;
