import { all } from 'redux-saga/effects';
import uiSagas from 'core/ui/sagas';

const combinedSagas = [...uiSagas];

export default function* sagas() {
  yield all(combinedSagas);
}
