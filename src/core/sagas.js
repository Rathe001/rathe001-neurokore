import { all } from 'redux-saga/effects';
import uiSagas from 'core/ui/sagas';
import splashSagas from 'core/splash/sagas';
import dialogSagas from 'core/dialog/sagas';
import tooltipSagas from 'core/tooltip/sagas';
import characterCreationSagas from 'core/characterCreation/sagas';
import characterSheetSagas from 'core/characterSheet/sagas';
import partySagas from 'core/party/sagas';
import menuSagas from 'core/menu/sagas';
import levelSagas from 'core/level/sagas';

const combinedSagas = [
  ...uiSagas,
  ...splashSagas,
  ...dialogSagas,
  ...tooltipSagas,
  ...characterCreationSagas,
  ...characterSheetSagas,
  ...partySagas,
  ...menuSagas,
  ...levelSagas,
];

export default function* sagas() {
  yield all(combinedSagas);
}
