import React from 'react';
import PropTypes from 'prop-types';
/*import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';*/
import Employee from './Employee';

/*
 first floor components , contains a plan for all the rooms inside .
  the rooms are clickable and will dispatch an action to render the room .
 the component is conencted to the store to get the room state and render the components accordingly
*/

const FirstFloor = props => {
  const { dummyData } = props;
  dummyData.sort((a, b) => a.place - b.place);
  return (
    <div className="main-grid-grid">
      <div className="first-floor">
        <div className="first-floor__work-room1">
          {dummyData.map((person, index) => {
            return (
              <span key={index} className="first-floor__employee">
                <Employee person={person} />
              </span>
            );
          })}
        </div>
        <div className="first-floor__work-room2">work 2</div>
      </div>
    </div>
  );
};

FirstFloor.propTypes = {
  dummyData: PropTypes.array,
};

export default FirstFloor;
