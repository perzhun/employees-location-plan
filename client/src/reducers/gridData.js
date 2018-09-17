import {
  FETCH_GRID_BEGIN,
  FETCH_GRID_SUCCESS,
  FETCH_WORK_PLACE_BEGIN,
  FETCH_WORK_PLACE_SUCCESS,
} from '../actions/apiCalls';

const gridDataInitialState = {
  gridLoading: false,
  gridError: null,
  gridCollums: 8,
  gridRows: 8,
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
    case FETCH_GRID_BEGIN:
      return {
        ...state,
        gridLoading: true,
        griddError: null,
      };
    case FETCH_GRID_SUCCESS:
      return {
        ...state,
        gridLoading: false,
        gridCollums: action.payload.grid.collumsAndRows,
        gridRows: action.payload.grid.collumsAndRows,
      };
    case FETCH_WORK_PLACE_BEGIN:
      return {
        ...state,
        workPlaceloading: true,
      };
    case FETCH_WORK_PLACE_SUCCESS:
      if (action.payload.floor === 'first') {
        return {
          ...state,
          workPlaceloading: false,
          workPlace: action.payload.workPlace,
        };
      } else {
        return {
          ...state,
          workPlaceloading: false,
          secondFloorWorkPlace: action.payload.workPlace,
        };
      }
    default:
      return state;
  }
};
