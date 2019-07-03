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
};

export default actions;
