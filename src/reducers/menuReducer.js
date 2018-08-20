const menuInitialState = {
  toggle: true,
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
    default:
      return state;
  }
};
