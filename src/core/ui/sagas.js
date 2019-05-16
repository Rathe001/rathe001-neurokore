import { takeEvery } from 'redux-saga/effects';
import uiActions from './actions';

function* toggleSplash() {
  try {
    yield console.log('Show splash');
  } catch (e) {
    console.log(e);
  }
}

export default [takeEvery(uiActions.TOGGLE_SPLASH, toggleSplash)];
