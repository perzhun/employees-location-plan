/*
actions that will change the aside menu toggle state , if true the menu is toggled  
*/

export const menuToggle = () => ({
  type: 'MENU_TOGGLE',
  toggle: true,
});

export const menuUntoggle = () => ({
  type: 'MENU_UNTOGGLE',
  toggle: false,
});

export const rangeChange = value => ({
  type: 'RANGE_CHANGE',
  payload: parseInt(value),
});

export const activateGrid = payload => ({
  type: 'ACTIVE_GRID',
  payload,
});

export const EnableEditing = payload => ({
  type: 'ENABLE_EDITING',
  payload,
});

export const settingsOption = payload => ({
  type: 'SETTINGS_OPTION',
  payload,
});

export const adminAuth = payload => ({
  type: 'ADMIN_AUTH',
  payload,
});
