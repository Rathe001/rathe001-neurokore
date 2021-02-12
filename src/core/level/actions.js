const actions = {
  TURN_LEFT: 'LEVEL_TURN_LEFT',
  turnLeft: () => ({
    type: actions.TURN_LEFT,
  }),

  TURN_RIGHT: 'LEVEL_TURN_RIGHT',
  turnRight: () => ({
    type: actions.TURN_RIGHT,
  }),

  MOVE_FORWARD: 'LEVEL_MOVE_FORWARD',
  moveForward: () => ({
    type: actions.MOVE_FORWARD,
  }),

  MOVE_BACKWARD: 'LEVEL_MOVE_BACKWARD',
  moveBackward: () => ({
    type: actions.MOVE_BACKWARD,
  }),

  LOAD_DATA: 'LEVEL_LOAD_DATA',
  loadData: (payload) => ({
    type: actions.LOAD_DATA,
    payload,
  }),

  SET_DATA: 'LEVEL_SET_DATA',
  setData: (payload) => ({
    type: actions.SET_DATA,
    payload,
  }),

  SET_POSITION: 'LEVEL_SET_POSITION',
  setPosition: (payload) => ({
    type: actions.SET_POSITION,
    payload,
  }),

  EXPLORE_AREA: 'LEVEL_EXPLORE_AREA',
  exploreArea: () => ({
    type: actions.EXPLORE_AREA,
  }),
};

export default actions;
