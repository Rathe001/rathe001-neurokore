import actions from './actions';

function getFacing(direction, current) {
  switch (current) {
    case 'n':
      return direction === 'left' ? 'w' : 'e';
    case 'e':
      return direction === 'left' ? 'n' : 's';
    case 's':
      return direction === 'left' ? 'e' : 'w';
    case 'w':
      return direction === 'left' ? 's' : 'n';
    default:
      return current;
  }
}

function getPosition(direction, facing, x, y) {
  switch (facing) {
    case 'n':
      return direction === 'forward' ? { x, y: y + 1 } : { x, y: y - 1 };
    case 'e':
      return direction === 'forward' ? { x: x + 1, y } : { x: x - 1, y };
    case 's':
      return direction === 'forward' ? { x, y: y - 1 } : { x, y: y + 1 };
    case 'w':
      return direction === 'forward' ? { x: x - 1, y } : { x: x + 1, y };
    default:
      return { x, y };
  }
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.TURN_LEFT:
      return {
        ...state,
        position: {
          ...state.position,
          facing: getFacing('left', state.position.facing),
        },
      };
    case actions.TURN_RIGHT:
      return {
        ...state,
        position: {
          ...state.position,
          facing: getFacing('right', state.position.facing),
        },
      };
    case actions.MOVE_FORWARD:
      return {
        ...state,
        position: {
          ...state.position,
          ...getPosition('forward', state.position.facing, state.position.x, state.position.y),
        },
      };
    case actions.MOVE_BACKWARD:
      return {
        ...state,
        position: {
          ...state.position,
          ...getPosition('backward', state.position.facing, state.position.x, state.position.y),
        },
      };
    case actions.SET_DATA:
      return {
        ...state,
        levelData: action.payload,
      };
    case actions.SET_POSITION:
      return {
        ...state,
        position: {
          x: action.payload.x,
          y: action.payload.y,
          facing: action.payload.facing,
        },
      };
    case actions.EXPLORE_AREA:
      return {
        ...state,
        levelData: {
          ...state.levelData,
          data: state.levelData.data.map((row, rowIndex) => {
            return {
              ...row,
              cells: row.cells.map((cell, cellIndex) => {
                return {
                  ...cell,
                  explored: cell.explored
                    ? cell.explored
                    : Math.abs(rowIndex - state.position.y) <= 1 &&
                      Math.abs(cellIndex - state.position.x) <= 1 &&
                      !(
                        Math.abs(rowIndex - state.position.y) === 1 &&
                        Math.abs(cellIndex - state.position.x) === 1
                      ),
                };
              }),
            };
          }),
        },
      };

    default:
      return state;
  }
};

export default reducer;
