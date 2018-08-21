/* actions that will change the main grid render state , if the fristFloorRender is dispatched , the state changes to 'first floor' and in the main grid component
the first room component will render
*/

export const firstFloorRender = () => ({
  type: 'FIRST_FLOOR',
  render: 'first floor',
  room: 'first floor',
});

export const secondFloorRender = () => ({
  type: 'SECOND_FLOOR',
  render: 'second floor',
});
