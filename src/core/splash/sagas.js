import { takeEvery, put } from 'redux-saga/effects';
import characterCreationActions from 'core/characterCreation/actions';
import dialogActions from 'core/dialog/actions';
import splashActions from 'core/splash/actions';
import { DIALOG } from 'constants/locale';

function* splashToggle() {
  try {
    yield put(characterCreationActions.toggle());
    yield put(dialogActions.setText(DIALOG.characterCreation.intro));
  } catch (e) {
    console.log(e);
  }
}

export default [takeEvery(splashActions.TOGGLE, splashToggle)];
