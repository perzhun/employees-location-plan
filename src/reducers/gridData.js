import gridData from '../storedData/grid';

const gridDataInitialState = {
  grid: gridData,
  gridCollums: gridData.gridCollums,
  gridRows: gridData.gridRows,
  gridEdit: false,
  workPlace: [],
  secondFloorWorkPlace: [],
  modalProps: {
    selectedOpened: false,
    selectX: 0,
    selectY: 0,
    selectBottom: 0,
    selectRight: 0,
    cellId: 0,
  },
};

export default (state = gridDataInitialState, action) => {
  switch (action.type) {
    case 'RANGE_CHANGE':
      return {
        ...state,
        gridCollums: action.payload,
        gridRows: action.payload,
      };
    case 'ACTIVE_GRID':
      return {
        ...state,
        gridEdit: action.payload,
      };
    case 'ADD_WORK_PLACE':
      return {
        ...state,
        workPlace: [...state.workPlace, action.payload],
      };
    case 'REMOVE_WORK_PLACE':
      return {
        ...state,
        workPlace: state.workPlace.filter(place => place !== action.payload),
      };
    case 'ADD_WORK_PLACE_SECOND':
      return {
        ...state,
        secondFloorWorkPlace: [...state.secondFloorWorkPlace, action.payload],
      };
    case 'REMOVE_WORK_PLACE_SECOND':
      return {
        ...state,
        secondFloorWorkPlace: state.secondFloorWorkPlace.filter(
          place => place !== action.payload,
        ),
      };
    case 'OPEN_SELECT':
      return {
        ...state,
        modalProps: action.payload,
      };
    default:
      return state;
  }
};
