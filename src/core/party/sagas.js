import { takeEvery, put } from 'redux-saga/effects';
import characterCreationActions from 'core/characterCreation/actions';

function* partyAddCharacter() {
  try {
    yield console.log('HIT');
    // yield put(characterCreationActions.toggle());
  } catch (e) {
    console.log(e);
  }
}

export default [takeEvery(characterCreationActions.ADD_CHARACTER, partyAddCharacter)];
