import { takeEvery, put } from 'redux-saga/effects';
import menuActions from 'core/menu/actions';
import coreActions from 'core/actions';
import store from 'core/store';

function* saveGame() {
  try {
    yield localStorage.setItem('reduxState', JSON.stringify(store.getState()));
    yield put(menuActions.hide());
  } catch (e) {
    console.log(e);
  }
}

function* loadGame() {
  try {
    const data = JSON.parse(localStorage.getItem('reduxState'));
    yield put(coreActions.setStateFromData(data));
    yield put(menuActions.hide());
  } catch (e) {
    console.log(e);
  }
}

export default [
  takeEvery(menuActions.SAVE_GAME, saveGame),
  takeEvery(menuActions.LOAD_GAME, loadGame),
];
