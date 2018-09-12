import dummyData from '../dummyData';
import {
  FETCH_EMPLOYEES_BEGIN,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
} from '../actions/employees';

const employeeInitialState = {
  employees: [],
  loading: false,
  error: null,
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
    case FETCH_EMPLOYEES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        loading: false,
        employees: action.payload.employees,
      };
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
