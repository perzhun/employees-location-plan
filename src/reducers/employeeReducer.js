import dummyData from '../dummyData';

const employeeInitialState = {
  employees: dummyData,
  chosenEmployee: [],
};

export default (state = employeeInitialState, action) => {
  switch (action.type) {
    case 'CHOSE_EMPLOYEE':
      return {
        ...state,
        chosenEmployee: [...state.chosenEmployee, action.payload],
      };
    default:
      return state;
  }
};
