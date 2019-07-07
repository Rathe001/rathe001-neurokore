import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchLevel } from 'services/api';
import levelActions from 'core/level/actions';

function* loadData({ payload }) {
  try {
    const rs = yield call(fetchLevel, payload);
    yield put(levelActions.setData(rs.data));
    yield put(levelActions.setPosition(rs.data.startPosition));
    yield put(levelActions.exploreArea());
  } catch (e) {
    console.log(e);
  }
}

function* exploreArea() {
  try {
    yield put(levelActions.exploreArea());
  } catch (e) {
    console.log(e);
  }
}

export default [
  takeEvery(levelActions.LOAD_DATA, loadData),
  takeEvery(levelActions.MOVE_BACKWARD, exploreArea),
  takeEvery(levelActions.MOVE_FORWARD, exploreArea),
];
