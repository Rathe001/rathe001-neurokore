import { takeEvery, put } from 'redux-saga/effects';
import uiActions from './actions';

function* toggleSplash() {
  try {
    yield put(uiActions.toggleCharacterCreation());
  } catch (e) {
    console.log(e);
  }
}

function* toggleCharacterCreation() {
  try {
    yield console.log('character creation');
  } catch (e) {
    console.log(e);
  }
}

export default [
  takeEvery(uiActions.TOGGLE_SPLASH, toggleSplash),
  takeEvery(uiActions.TOGGLE_CHARACTER_CREATION, toggleCharacterCreation),
];
