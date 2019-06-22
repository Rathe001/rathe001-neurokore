import { combineReducers } from 'redux';
import ui from 'core/ui/reducers';
import splash from 'core/splash/reducers';
import dialog from 'core/dialog/reducers';
import tooltip from 'core/tooltip/reducers';
import characterCreation from 'core/characterCreation/reducers';
import party from 'core/party/reducers';
import characterSheet from 'core/characterSheet/reducers';
import menu from 'core/menu/reducers';

export default combineReducers({
  ui,
  splash,
  dialog,
  tooltip,
  characterCreation,
  party,
  characterSheet,
  menu,
});
