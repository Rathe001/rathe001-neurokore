import { all } from 'redux-saga/effects';
import uiSagas from 'core/ui/sagas';
import splashSagas from 'core/splash/sagas';
import dialogSagas from 'core/dialog/sagas';
import tooltipSagas from 'core/tooltip/sagas';
import characterCreationSagas from 'core/characterCreation/sagas';
import partySagas from 'core/party/sagas';

const combinedSagas = [
  ...uiSagas,
  ...splashSagas,
  ...dialogSagas,
  ...tooltipSagas,
  ...characterCreationSagas,
  ...partySagas,
];

export default function* sagas() {
  yield all(combinedSagas);
}
