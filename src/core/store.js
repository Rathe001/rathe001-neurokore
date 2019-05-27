import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import coreReducers from './reducers';
import coreSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const initialState = {
  splash: {
    show: true,
  },
  dialog: {
    show: true,
    prevText: '',
    text: '',
  },
  tooltip: {
    show: false,
    text: '',
  },
  characterCreation: {
    show: false,
    name: '',
    remaining: 50,
    STR: 0,
    DEX: 0,
    INT: 0,
    MAR: 0,
    PER: 0,
    ENE: 0,
    KIN: 0,
    LOT: 0,
    HIT: 0,
    LEA: 0,
  },
  party: {
    characters: [],
    buffs: [{}, {}, {}, {}, {}],
    debuffs: [],
  },
  inventory: {
    show: false,
    character: null,
  },
};

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  coreReducers,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(coreSagas);

export default store;
