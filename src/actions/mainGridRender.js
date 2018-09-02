/* actions that will change the main grid render state , if the fristFloorRender is dispatched , the state changes to 'first floor' and in the main grid component
the first room component will render
*/

export const floorRender = floor => ({
  type: 'FIRST_FLOOR',
  payload: floor,
});

export const addWorkPlace = payload => ({
  type: 'ADD_WORK_PLACE',
  payload,
});

export const removeWorkPlace = payload => ({
  type: 'REMOVE_WORK_PLACE',
  payload,
});

export const openSelected = payload => ({
  type: 'OPEN_SELECT',
  payload,
});

export const choseEmployee = payload => ({
  type: 'CHOSE_EMPLOYEE',
  payload,
});

export const deleteEmployee = payload => ({
  type: 'DELETE_EMPLOYEE',
  payload,
});

export const searchEmployee = payload => ({
  type: 'SEARCH_EMPLOYEE',
  payload,
});

export const openEmployeeModal = payload => ({
  type: 'OPEN_EMPLOYEE_MODAL',
  payload,
});
