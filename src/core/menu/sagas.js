import {
  takeEvery, put, delay, select,
} from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import menuActions from 'core/menu/actions';
import dialogActions from 'core/dialog/actions';
import coreActions from 'core/actions';
import { initialState } from 'constants/initialState';

function* saveGame({ payload }) {
  try {
    const state = yield select();
    const data = JSON.parse(localStorage.getItem('savedGames')) || [{}, {}, {}, {}, {}];
    data[payload.index] = {
      ...initialState,
      ...data[payload.index],
    };
    data[payload.index].name = payload.name;
    data[payload.index].id = uuidv4();
    data[payload.index].data = state;

    yield localStorage.setItem('savedGames', JSON.stringify(data));
    yield put(menuActions.hide());
    yield delay(250);
    yield put(dialogActions.setText('Game saved successfully.'));
    yield delay(1500);
    yield put(dialogActions.undoSetText());
  } catch (e) {
    console.log(e);
  }
}

function* loadGame({ payload }) {
  try {
    const { data } = JSON.parse(localStorage.getItem('savedGames')).find(
      (game) => game.name === payload,
    );
    yield put(
      coreActions.setStateFromData({
        ...initialState,
        ...data,
      }),
    );
    yield put(menuActions.hide());
    yield delay(250);
    yield put(dialogActions.setText('Game loaded successfully.'));
    yield delay(1500);
    yield put(dialogActions.undoSetText());
  } catch (e) {
    console.log(e);
  }
}

export default [
  takeEvery(menuActions.SAVE_GAME, saveGame),
  takeEvery(menuActions.LOAD_GAME, loadGame),
];
