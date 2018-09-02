import dummyData from '../dummyData';

const employeeInitialState = {
  employees: dummyData,
  chosenEmployee: [],
  searchedEmployee: null,
  employeeModalProps: {
    modalOpened: false,
    employeeInfo: {},
    selectX: 0,
    selectY: 0,
  },
};

export default (state = employeeInitialState, action) => {
  switch (action.type) {
    case 'CHOSE_EMPLOYEE':
      return {
        ...state,
        chosenEmployee: [...state.chosenEmployee, action.payload],
      };
    case 'DELETE_EMPLOYEE':
      return {
        ...state,
        chosenEmployee: state.chosenEmployee.filter(
          employee => employee.name !== action.payload,
        ),
      };
    case 'SEARCH_EMPLOYEE':
      return {
        ...state,
        searchedEmployee: action.payload,
      };
    case 'OPEN_EMPLOYEE_MODAL':
      return {
        ...state,
        employeeModalProps: action.payload,
      };
    default:
      return state;
  }
};
