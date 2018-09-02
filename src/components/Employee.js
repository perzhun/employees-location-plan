import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openSelected, openEmployeeModal } from '../actions/mainGridRender';

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
        //ref={circle => this.getposition(circle)}
        ref={React.createRef()}
        className="grid-cell__text"
        onClick={e => {
          if (
            this.props.settingsOptionEnabled === 'Employee location settings'
          ) {
            let eventX =
              e.nativeEvent.target.parentNode.getBoundingClientRect().left +
              e.nativeEvent.target.parentNode.getBoundingClientRect().width;
            let eventY = e.nativeEvent.target.parentNode.getBoundingClientRect()
              .top;
            let eventRight = e.nativeEvent.target.parentNode.getBoundingClientRect()
              .right;
            let eventBottom = e.nativeEvent.target.parentNode.getBoundingClientRect()
              .bottom;
            //let rect = ReactDOM.findDomNode().getBoundingClientRect();
            if (eventX + 300 > window.innerWidth) {
              eventX =
                eventX -
                e.nativeEvent.target.parentNode.getBoundingClientRect().width -
                320;
            }
            if (eventY + 300 > window.innerHeight) {
              eventY = eventY - 300;
            }
            this.props.dispatch(
              openSelected({
                selectedOpened: true,
                selectX: eventX,
                selectY: eventY,
                selectBottom: eventBottom,
                selectRight: eventRight,
                cellId: this.props.employeeKey,
              }),
            );
          }
        }}
      >
        {personObject && (
          <div
            className="employee__div"
            onClick={e => {
              this.props.editingEnabled === false
                ? this.props.dispatch(
                    openEmployeeModal({
                      modalOpened: true,
                      employeeInfo: personObject,
                      selectX:
                        e.nativeEvent.target.parentNode.getBoundingClientRect()
                          .left +
                        e.nativeEvent.target.parentNode.getBoundingClientRect()
                          .width,
                      selectY: e.nativeEvent.target.parentNode.getBoundingClientRect()
                        .top,
                    }),
                  )
                : null;
            }}
          >
            <img
              className="employee__img"
              src={personObject.photo}
              alt="portrait"
            />
            <span className="employee__name">{personObject.name}</span>
          </div>
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
  selectRight: PropTypes.number,
  selectBottom: PropTypes.number,
  chosenEmployee: PropTypes.array,
  settingsOptionEnabled: PropTypes.string,
  editingEnabled: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    selectedOpened: state.grid.modalProps.selectedOpened,
    selectX: state.grid.modalProps.selectX,
    selectY: state.grid.modalProps.selectY,
    selectRight: state.grid.modalProps.selectRight,
    selectBottom: state.grid.modalProps.selectBottom,
    modalProps: state.grid.modalProps,
    dummyData: state.employees.employees,
    chosenEmployee: state.employees.chosenEmployee,
    settingsOptionEnabled: state.menu.settingsOptionEnabled,
    editingEnabled: state.menu.editingEnabled,
  };
};

export default connect(mapStateToProps)(Employee);
