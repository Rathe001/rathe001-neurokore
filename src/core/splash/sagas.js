import { takeEvery, put } from 'redux-saga/effects';
import characterCreationActions from 'core/characterCreation/actions';
import splashActions from './actions';

function* toggleSplash() {
  try {
    yield put(characterCreationActions.toggleCharacterCreation());
  } catch (e) {
    console.log(e);
  }
}

export default [takeEvery(splashActions.TOGGLE_SPLASH, toggleSplash)];
