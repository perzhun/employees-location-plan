import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openSelected, openEmployeeModal } from '../actions/mainGridRender';

class Employee extends Component {
  render() {
    let chosenPerson = this.props.chosenEmployee.filter(
      el =>
        el.cellId === this.props.employeeKey && el.floor === this.props.floor,
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
              let differenceX = window.innerWidth < 600 ? 220 : 320;
              eventX =
                eventX -
                e.nativeEvent.target.parentNode.getBoundingClientRect().width -
                differenceX;
            }
            if (eventY + 300 > window.innerHeight) {
              let differenceY = window.innerHeight < 600 ? 150 : 300;
              eventY = eventY - differenceY;
            }
            this.props.openSelected({
              selectedOpened: true,
              selectX: eventX,
              selectY: eventY,
              selectBottom: eventBottom,
              selectRight: eventRight,
              cellId: this.props.employeeKey,
            });
          }
        }}
      >
        {personObject && (
          <div
            className="employee__div"
            onClick={e => {
              let selectX =
                e.nativeEvent.target.parentNode.getBoundingClientRect().left +
                e.nativeEvent.target.parentNode.getBoundingClientRect().width;
              let selectY = e.nativeEvent.target.parentNode.getBoundingClientRect()
                .top;
              if (selectX + 300 > window.innerWidth) {
                selectX =
                  selectX -
                  e.nativeEvent.target.parentNode.getBoundingClientRect()
                    .width -
                  320;
              }
              if (selectY + 300 > window.innerHeight) {
                selectY = selectY - 300;
              }
              this.props.editingEnabled === false
                ? this.props.openEmployeeModal({
                    modalOpened: true,
                    employeeInfo: personObject,
                    selectX: selectX,
                    selectY: selectY,
                    modalCellId: this.props.employeeKey,
                  })
                : null;
            }}
          >
            <div
              className="employee__img"
              style={{
                backgroundImage: `url(${personObject.photo})`,
              }}
            />
            {/*<span className="employee__name">{personObject.name}</span>*/}
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
  floor: PropTypes.string,
  openSelected: PropTypes.func,
  openEmployeeModal: PropTypes.func,
  dummyData: PropTypes.array,
  employeeKey: PropTypes.number,
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
    floor: state.render.render,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openEmployeeModal: payload => {
      dispatch(openEmployeeModal(payload));
    },
    openSelected: payload => {
      dispatch(openSelected(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
