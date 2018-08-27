import React from 'react';

/*
 second floor components , contains a plan for all the rooms inside . the rooms are clickable and will dispatch an action to render the room .
 the component is conencted to the store to get the room state and render the components accordingly 
*/

const SecondFloor = () => (
  <div className="main-grid-grid">
    <div className={'second-floor'}>floor 2</div>
  </div>
);

export default SecondFloor;
