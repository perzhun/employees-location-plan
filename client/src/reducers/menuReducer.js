/*
menu reducer , returns changes to the menu toggle state based on the case type
*/
const menuInitialState = {
  toggle: true,
  editingEnabled: false,
  settingsOptionEnabled: '',
  adminAuthenticated: false,
};

export default (state = menuInitialState, action) => {
  switch (action.type) {
    case 'MENU_UNTOGGLE':
      return {
        ...state,
        toggle: action.toggle,
      };
    case 'MENU_TOGGLE':
      return {
        ...state,
        toggle: action.toggle,
      };
    case 'ENABLE_EDITING':
      return {
        ...state,
        editingEnabled: action.payload,
      };
    case 'SETTINGS_OPTION':
      return {
        ...state,
        settingsOptionEnabled: action.payload,
      };
    case 'ADMIN_AUTH':
      return {
        ...state,
        adminAuthenticated: action.payload,
      };
    default:
      return state;
  }
};
