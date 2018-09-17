import axios from 'axios';
import {
  addWorkPlace,
  removeWorkPlace,
  removeWorkPlaceSecond,
  addWorkPlaceSecond,
} from '../actions/mainGridRender';

export const getGrid = floor => dispatch => {
  dispatch(fetchGridBegin());
  axios
    .get(`http://localhost:8081/grid?floor=${floor}`)
    .then(res => dispatch(fetchGridSuccess(res.data)));
};

export const setWorkPlaceFirst = payload => dispatch => {
  dispatch(addWorkPlace(payload));
  axios({
    method: 'post',
    url: 'http://localhost:8081/createWorkPlace',
    data: {
      cell: payload,
      floor: 'first',
    },
  });
};

export const setWorkPlaceSecond = payload => dispatch => {
  dispatch(addWorkPlaceSecond(payload));
  axios({
    method: 'post',
    url: 'http://localhost:8081/createWorkPlace',
    data: {
      cell: payload,
      floor: 'second',
    },
  });
};

export const deleteWorkPlace = (cell, floor) => dispatch => {
  if (floor === 'first') {
    dispatch(removeWorkPlace(cell));
  } else {
    dispatch(removeWorkPlaceSecond(cell));
  }
  axios({
    method: 'delete',
    url: `http://localhost:8081/deleteWorkPlace?cell=${cell}&floor=${floor}`,
  });
};

export const getWorkPlaceArray = floor => dispatch => {
  dispatch(fetchWorkPlaceBegin());
  axios
    .get(`http://localhost:8081/getWorkPlace?floor=${floor}`)
    .then(res =>
      dispatch(fetchWorkPlaceSuccess(res.data.map(place => place.cell), floor)),
    );
};

export const FETCH_GRID_BEGIN = 'FETCH_GRID_BEGIN';
export const FETCH_GRID_SUCCESS = 'FETCH_GRID_SUCCESS';
export const FETCH_WORK_PLACE_BEGIN = 'FETCH_WORK_PLACE_BEGIN';
export const FETCH_WORK_PLACE_SUCCESS = 'FETCH_WORK_PLACE_SUCCESS';

export const fetchGridBegin = () => ({
  type: FETCH_GRID_BEGIN,
});

export const fetchGridSuccess = grid => ({
  type: FETCH_GRID_SUCCESS,
  payload: { grid },
});

export const fetchWorkPlaceBegin = () => ({
  type: FETCH_WORK_PLACE_BEGIN,
});

export const fetchWorkPlaceSuccess = (workPlace, floor) => ({
  type: FETCH_WORK_PLACE_SUCCESS,
  payload: {
    workPlace,
    floor,
  },
});
