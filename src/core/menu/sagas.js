import { takeEvery, put } from 'redux-saga/effects';
import menuActions from 'core/menu/actions';
import coreActions from 'core/actions';
import store from 'core/store';

function* saveGame({ payload }) {
  try {
    const data = JSON.parse(localStorage.getItem('savedGames')) || [{}, {}, {}, {}, {}];
    data[payload.index].name = payload.name;
    data[payload.index].data = store.getState();

    yield localStorage.setItem('savedGames', JSON.stringify(data));
    yield put(menuActions.hide());
  } catch (e) {
    console.log(e);
  }
}

function* loadGame({ payload }) {
  try {
    const { data } = JSON.parse(localStorage.getItem('savedGames')).find(
      game => game.name === payload,
    );
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
