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
