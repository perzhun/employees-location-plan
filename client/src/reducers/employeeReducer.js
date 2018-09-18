import {
  FETCH_EMPLOYEES_BEGIN,
  FETCH_EMPLOYEES_SUCCESS,
  GET_CHOSEN_EMPLOYEES_BEGIN,
  GET_CHOSEN_EMPLOYEES_SUCCESS,
} from '../actions/employees';

const employeeInitialState = {
  employees: [],
  loading: false,
  chosenLoading: false,
  error: null,
  chosenEmployee: [],
  searchedEmployee: null,
  employeeModalProps: {
    modalOpened: false,
    modalCellId: 0,
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
    case GET_CHOSEN_EMPLOYEES_BEGIN:
      return {
        ...state,
        chosenLoading: true,
      };
    case GET_CHOSEN_EMPLOYEES_SUCCESS:
      return {
        ...state,
        chosenLoading: false,
        chosenEmployee: action.payload.chosenEmployees,
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
