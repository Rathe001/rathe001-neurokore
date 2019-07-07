const actions = {
  TURN_LEFT: 'LEVEL_TURN_LEFT',
  turnLeft: () => {
    return {
      type: actions.TURN_LEFT,
    };
  },

  TURN_RIGHT: 'LEVEL_TURN_RIGHT',
  turnRight: () => {
    return {
      type: actions.TURN_RIGHT,
    };
  },

  MOVE_FORWARD: 'LEVEL_MOVE_FORWARD',
  moveForward: () => {
    return {
      type: actions.MOVE_FORWARD,
    };
  },

  MOVE_BACKWARD: 'LEVEL_MOVE_BACKWARD',
  moveBackward: () => {
    return {
      type: actions.MOVE_BACKWARD,
    };
  },

  LOAD_DATA: 'LEVEL_LOAD_DATA',
  loadData: payload => {
    return {
      type: actions.LOAD_DATA,
      payload,
    };
  },

  SET_DATA: 'LEVEL_SET_DATA',
  setData: payload => {
    return {
      type: actions.SET_DATA,
      payload,
    };
  },

  SET_POSITION: 'LEVEL_SET_POSITION',
  setPosition: payload => {
    return {
      type: actions.SET_POSITION,
      payload,
    };
  },

  EXPLORE_AREA: 'LEVEL_EXPLORE_AREA',
  exploreArea: () => {
    return {
      type: actions.EXPLORE_AREA,
    };
  },
};

export default actions;
