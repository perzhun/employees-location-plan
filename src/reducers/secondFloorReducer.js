/*
second floor reducer , returns changes to the room state based on the case type
*/

const secondFloorInitialState = {
  secondRoom: 'second floor',
};

export default (state = secondFloorInitialState, action) => {
  switch (action.type) {
    case 'SECOND_ROOM':
      return {
        ...state,
        secondRoom: action.secondRoom,
      };
    case 'SECOND_ROOM_ONE':
      return {
        ...state,
        secondRoom: action.secondRoom,
      };
    case 'SECOND_ROOM_TWO':
      return {
        ...state,
        secondRoom: action.secondRoom,
      };
    case 'SECOND_ROOM_THREE':
      return {
        ...state,
        secondRoom: action.secondRoom,
      };
    case 'SECOND_ROOM_FOUR':
      return {
        ...state,
        secondRoom: action.secondRoom,
      };
    case 'SECOND_CABINET_ONE':
      return {
        ...state,
        secondRoom: action.secondRoom,
      };
    case 'SECOND_CABINET_TWO':
      return {
        ...state,
        secondRoom: action.secondRoom,
      };
    case 'SECOND_CABINET_THREE':
      return {
        ...state,
        secondRoom: action.secondRoom,
      };
    case 'SECOND_FLOOR':
      return {
        ...state,
        secondRoom: action.secondRoom,
      };
    default:
      return state;
  }
};
