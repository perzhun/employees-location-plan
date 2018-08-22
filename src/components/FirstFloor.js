import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';
import Employee from './Employee';

/*
 first floor components , contains a plan for all the rooms inside . the rooms are clickable and will dispatch an action to render the room .
 the component is conencted to the store to get the room state and render the components accordingly
*/
const deleteItem = name => {
  console.log('dropping person:' + name);
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  };
};

const FirstFloor = props => {
  const { connectDropTarget, hovered, item } = props;
  return connectDropTarget(
    <div className="main-grid-grid">
      <div className="first-floor">
        <div className="first-floor__work-room1">
          {props.dummyData.map((person, index) => {
            return (
              <span key={index} className="first-floor__employee">
                <Employee
                  person={person}
                  handleDrop={name => {
                    deleteItem(name);
                  }}
                />
              </span>
            );
          })}
        </div>
        <div className="first-floor__work-room2">work 2</div>
      </div>
    </div>,
  );
};

export default flow(
  DropTarget('person', {}, collect),
  DragDropContext(HTML5Backend),
)(FirstFloor);
