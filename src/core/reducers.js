import { combineReducers } from 'redux';
import ui from 'core/ui/reducers';
import splash from 'core/splash/reducers';
import dialog from 'core/dialog/reducers';
import tooltip from 'core/tooltip/reducers';
import characterCreation from 'core/characterCreation/reducers';
import party from 'core/party/reducers';
import characterSheet from 'core/characterSheet/reducers';
import menu from 'core/menu/reducers';
import actions from './actions';

const appReducer = combineReducers({
  ui,
  splash,
  dialog,
  tooltip,
  characterCreation,
  party,
  characterSheet,
  menu,
});

export default (state, action) => {
  if (action.type === actions.SET_STATE_FROM_DATA) {
    // eslint-disable-next-line
    state = action.payload;
  }

  return appReducer(state, action);
};
