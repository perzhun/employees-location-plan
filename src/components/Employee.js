import React from 'react';
import PropTypes from 'prop-types';
//import { DragSource } from 'react-dnd';

const Employee = props => {
  console.log(props.person.photo);
  return (
    <React.Fragment>
      <img
        className="employee_circle"
        src={require(props.person.photo)}
        alt="portrait"
      />
    </React.Fragment>
  );
};

Employee.propTypes = {
  person: PropTypes.object,
  name: PropTypes.string,
};

export default Employee;
