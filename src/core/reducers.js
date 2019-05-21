import { combineReducers } from 'redux';
import splash from 'core/splash/reducers';
import dialog from 'core/dialog/reducers';
import characterCreation from 'core/characterCreation/reducers';

console.log(splash, dialog, characterCreation);

export default combineReducers({
  ui: {
    splash,
    dialog,
    characterCreation,
  },
});
