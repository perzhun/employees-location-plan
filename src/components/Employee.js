import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { openSelected } from '../actions/mainGridRender';
//import { DragSource } from 'react-dnd';

class Employee extends Component {
  render() {
    let chosenPerson = this.props.chosenEmployee.filter(
      el => el.id === this.props.employeeKey,
    );
    let [chosenPersonObject] = chosenPerson;

    let employeeArray = [];
    let personObject;
    if (chosenPersonObject) {
      employeeArray = this.props.dummyData.filter(
        el => el.name === chosenPersonObject.name,
      );
      [personObject] = employeeArray;
    }
    return (
      <div
        className="grid-cell__text"
        onClick={e => {
          if (
            this.props.settingsOptionEnabled === 'Employee location settings'
          ) {
            let eventX = e.clientX;
            let eventY = e.clientY;
            this.props.dispatch(
              openSelected({
                selectedOpened: true,
                selectX: eventX,
                selectY: eventY,
                cellId: this.props.employeeKey,
              }),
            );
          }
        }}
      >
        {personObject && (
          <img
            className="employee_circle"
            src={personObject.photo}
            alt="portrait"
          />
        )}
      </div>
    );
  }
}

Employee.propTypes = {
  person: PropTypes.object,
  name: PropTypes.string,
  selectedOpened: PropTypes.bool,
  selectX: PropTypes.number,
  selectY: PropTypes.number,
  chosenEmployee: PropTypes.array,
  settingsOptionEnabled: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    selectedOpened: state.grid.modalProps.selectedOpened,
    selectX: state.grid.modalProps.selectX,
    selectY: state.grid.modalProps.selectY,
    modalProps: state.grid.modalProps,
    dummyData: state.employees.employees,
    chosenEmployee: state.employees.chosenEmployee,
    settingsOptionEnabled: state.menu.settingsOptionEnabled,
  };
};

export default connect(mapStateToProps)(Employee);

/*
<img
        className="employee_circle"
        src={props.person.photo}
        alt="portrait"
      />*/
