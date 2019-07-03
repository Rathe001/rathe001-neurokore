export const initialState = {
  ui: {
    scale: 0,
  },
  menu: {
    show: false,
  },
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
    creationComplete: false,
    characters: [],
    order: [],
    buffs: [{}, {}, {}, {}, {}],
    debuffs: [],
  },
  characterSheet: {
    show: false,
    character: {},
  },
  level: {
    position: {
      facing: 'n',
      x: 0,
      y: 0,
    },
  },
};

export default initialState;
