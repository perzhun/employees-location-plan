import axios from 'axios';
import { choseEmployee, deleteEmployee } from '../actions/mainGridRender';

export const fetchEmployees = () => dispatch => {
  dispatch(fetchEmployeesBegin());
  axios
    .get('/employees')
    .then(res => dispatch(fetchEmployeesSuccess(res.data)));
};

// Handle HTTP errors since fetch won't.

export const FETCH_EMPLOYEES_BEGIN = 'FETCH_EMPLOYEES_BEGIN';
export const FETCH_EMPLOYEES_SUCCESS = 'FETCH_EMPLOYEES_SUCCESS';

export const fetchEmployeesBegin = () => ({
  type: FETCH_EMPLOYEES_BEGIN,
});

export const fetchEmployeesSuccess = employees => ({
  type: FETCH_EMPLOYEES_SUCCESS,
  payload: { employees },
});

export const createChosenEmployee = payload => dispatch => {
  dispatch(choseEmployee(payload));
  axios({
    method: 'post',
    url: '/createChosenEmployee',
    data: {
      name: payload.name,
      cellId: payload.cellId,
      floor: payload.floor,
    },
  });
};

export const deleteChosenEmployee = name => dispatch => {
  dispatch(deleteEmployee(name));
  axios({
    method: 'delete',
    url: `/deleteChosenEmployee?name=${name}`,
  });
};

export const getChosenEmployees = () => dispatch => {
  dispatch(getChosenEmployeesBegin());
  axios
    .get(`/getChosenEmployee`)
    .then(res => dispatch(getChosenEmployeesSuccess(res.data)));
};

export const GET_CHOSEN_EMPLOYEES_BEGIN = 'GET_CHOSEN_EMPLOYEES_BEGIN';
export const GET_CHOSEN_EMPLOYEES_SUCCESS = 'GET_CHOSEN_EMPLOYEES_SUCCESS';

export const getChosenEmployeesBegin = () => ({
  type: GET_CHOSEN_EMPLOYEES_BEGIN,
});

export const getChosenEmployeesSuccess = chosenEmployees => ({
  type: GET_CHOSEN_EMPLOYEES_SUCCESS,
  payload: { chosenEmployees },
});
