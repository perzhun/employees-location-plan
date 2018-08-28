/*
menu reducer , returns changes to the menu toggle state based on the case type
*/
const menuInitialState = {
  toggle: true,
  editingEnabled: false,
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
        editingEnabled: action.toggle,
      };
    default:
      return state;
  }
};
