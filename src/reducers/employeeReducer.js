import dummyData from '../dummyData';

const employeeInitialState = {
  employees: dummyData,
};

export default (state = employeeInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
