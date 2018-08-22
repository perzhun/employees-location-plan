import React from 'react';
import PropTypes from 'prop-types';
//import { DragSource } from 'react-dnd';

const Employee = props => {
  return (
    <React.Fragment>
      <span className="employee_circle">{props.person.name}</span>
    </React.Fragment>
  );
};

Employee.propTypes = {
  person: PropTypes.object,
  name: PropTypes.string,
};

export default Employee;
