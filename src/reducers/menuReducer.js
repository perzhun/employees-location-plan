import { MENU_TOGGLE, MENU_UNTOGGLE } from '../actions/menu';

const initialState = {
  toggle: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MENU_UNTOGGLE:
      return {
        ...state,
        toggle: action.toggle,
      };
    case MENU_TOGGLE:
      return {
        ...state,
        toggle: action.toggle,
      };
    default:
      return state;
  }
};
