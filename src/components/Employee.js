import React from 'react';
import { DragSource } from 'react-dnd';

const personSource = {
  beginDrag(props) {
    return props.person;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    return props.handleDrop(props.person.name);
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

const Employee = props => {
  const { isDraggin, connectDragSource, person } = props;
  const opacity = isDraggin ? 0 : 1;
  return connectDragSource(
    <div style={{ opacity }}>
      <span>{props.person.name}</span>
    </div>,
  );
};

export default DragSource('person', personSource, collect)(Employee);
