/*
first floor reducer , returns changes to the room state based on the case type
*/

const FloorInitialState = {
  room: 'first floor',
};

export default (state = FloorInitialState, action) => {
  switch (action.type) {
    case 'RENDER_ROOM':
      return {
        ...state,
        room: action.payload,
      };
    case 'FIRST_FLOOR':
      return {
        ...state,
        room: action.room,
      };
    case 'SECOND_FLOOR':
      return {
        ...state,
        room: action.room,
      };
    default:
      return state;
  }
};
