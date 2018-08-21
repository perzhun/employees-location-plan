/*
first floor reducer , returns changes to the room state based on the case type
*/

const firstFloorInitialState = {
  room: 'first floor',
};

export default (state = firstFloorInitialState, action) => {
  switch (action.type) {
    case 'WORK_ROOM_TWO':
      return {
        ...state,
        room: action.room,
      };
    case 'WORK_ROOM_ONE':
      return {
        ...state,
        room: action.room,
      };
    case 'FIRST_FLOOR_LOBBY':
      return {
        ...state,
        room: action.room,
      };
    case 'FIRST_FLOOR':
      return {
        ...state,
        room: action.room,
      };
    default:
      return state;
  }
};
