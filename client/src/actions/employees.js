import axios from 'axios';

export const fetchEmployees = () => dispatch => {
  dispatch(fetchEmployeesBegin());
  axios
    .get('http://localhost:8081/employees')
    .then(res => dispatch(fetchEmployeesSuccess(res.data)));
};

// Handle HTTP errors since fetch won't.

export const FETCH_EMPLOYEES_BEGIN = 'FETCH_EMPLOYEES_BEGIN';
export const FETCH_EMPLOYEES_SUCCESS = 'FETCH_EMPLOYEES_SUCCESS';
export const FETCH_EMPLOYEES_FAILURE = 'FETCH_EMPLOYEES_FAILURE';

export const fetchEmployeesBegin = () => ({
  type: FETCH_EMPLOYEES_BEGIN,
});

export const fetchEmployeesSuccess = employees => ({
  type: FETCH_EMPLOYEES_SUCCESS,
  payload: { employees },
});

export const fetchEmployeesError = error => ({
  type: FETCH_EMPLOYEES_FAILURE,
  payload: { error },
});
