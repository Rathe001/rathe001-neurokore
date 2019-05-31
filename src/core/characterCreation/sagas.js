import { takeEvery, put, select } from 'redux-saga/effects';
import uuidv4 from 'uuid/v4';
import characterCreationActions from 'core/characterCreation/actions';
import partyActions from 'core/party/actions';

function* addCharacter(action) {
  const party = yield select(state => state.party.characters);
  const stats = {
    ...action.payload,
    id: uuidv4(),
    name: action.payload.name.charAt(0).toUpperCase() + action.payload.name.slice(1),
    HP_MAX: parseInt((50 + action.payload.STR * 3) / 2, 10),
    ENERGY_MAX: parseInt(action.payload.INT * 3, 10),
    buffs: [],
    debuffs: [],
    inventory: [],
  };
  stats.HP_CUR = stats.HP_MAX;
  stats.ENERGY_CUR = stats.ENERGY_MAX;

  try {
    if (party.length >= 5 || party.find(m => m.name === stats.name)) {
      return;
    }

    yield put(partyActions.addCharacter(stats));
    yield put(characterCreationActions.reset());
  } catch (e) {
    console.log(e);
  }
}

export default [takeEvery(characterCreationActions.ADD_CHARACTER, addCharacter)];
