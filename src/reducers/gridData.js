import gridData from '../storedData/grid';

const gridDataInitialState = {
  grid: gridData,
  gridCollums: gridData.gridCollums,
  gridRows: gridData.gridRows,
  gridEdit: 'grid-cell--unactive',
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
    default:
      return state;
  }
};
