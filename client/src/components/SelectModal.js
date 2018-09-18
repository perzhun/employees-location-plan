import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Clear from '@material-ui/icons/Clear';
import { openSelected } from '../actions/mainGridRender';
import {
  createChosenEmployee,
  deleteChosenEmployee,
} from '../actions/employees';

Modal.defaultStyles.overlay.backgroundColor = 'none';

class SelectModal extends Component {
  state = {
    searchText: '',
  };
  HandleSearch = e => {
    this.setState({ searchText: e.target.value });
  };
  handleCloseModal = () => {
    this.props.openSelected({
      selectedOpened: false,
      selectX: 0,
      selectY: 0,
      selectBottom: 0,
      selectright: 0,
    });
  };
  handleSelectClick = name => {
    this.props.createChosenEmployee({
      name: name,
      cellId: this.props.cellId,
      floor: this.props.floor,
    });
    this.handleCloseModal();
  };

  handleEmployeeDelete = name => {
    this.props.deleteChosenEmployee(name);
  };

  render() {
    let modalLeft;
    let modalTop;
    let modalTransform;
    if ((window.innerWidth || window.innerHeight) < 600) {
      modalLeft = '50%';
      modalTop = '50%';
      modalTransform = 'translate(-50%, -50%)';
    } else {
      modalLeft = this.props.selectX + 10;
      modalTop = this.props.selectY;
      modalTransform = 'none';
    }

    const customModal = {
      content: {
        left: modalLeft,
        top: modalTop,
        width: '300px',
        right: 'none',
        bottom: 'none',
        overflow: 'hidden',
        position: 'absolute',
        padding: 0,
        boxShadow: '3px 3px 3px 3px #888888',
        zIndex: 3,
        transform: modalTransform,
      },
    };
    let employeeList;
    let filterById = [];
    if (this.props.chosenEmployee.length > 0) {
      filterById = this.props.chosenEmployee.filter(
        el => el.cellId === this.props.cellId && el.floor === this.props.floor,
      );
    }
    let filteredPerson;
    if (filterById.length > 0) {
      [filteredPerson] = filterById;
    }
    let filtered = this.props.dummyData.filter(remainingEmployees => {
      return !this.props.chosenEmployee.some(obj => {
        return remainingEmployees.name === obj.name;
      });
    });
    let assignedEmployee = this.props.dummyData.filter(person => {
      if (filterById.length > 0 && filteredPerson.name === person.name) {
        return person;
      }
    });
    let [assignedEmployeeObj] = assignedEmployee;
    employeeList = filtered.map((person, index) => {
      if (
        person.name.toUpperCase().indexOf(this.state.searchText.toUpperCase()) >
        -1
      ) {
        return (
          <li
            key={index}
            className="employee-list__item"
            onClick={() => {
              this.handleSelectClick(person.name);
            }}
          >
            <span className="employee-list__item__name">{person.name}</span>
            <span
              className="employee-list__photo"
              style={{ backgroundImage: `url(${person.photo})` }}
            />
          </li>
        );
      }
    });
    return (
      <Modal
        isOpen={this.props.selectedOpened}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        style={customModal}
        onRequestClose={this.handleCloseModal}
        contentLabel="Employee select"
      >
        <div className="modal__header">
          <h4>Assign an employee to this working place</h4>
        </div>
        <div className="modal__content">
          <Clear
            onClick={this.handleCloseModal}
            className="header__close-modal"
          />
          <input
            type="text"
            className="modal__input"
            onChange={this.HandleSearch}
            value={this.state.searchText}
          />
          <ul className="modal__select">
            {assignedEmployee.length > 0 && (
              <li className="select__assigned">
                <span>{assignedEmployeeObj.name}</span>
                <Clear
                  onClick={e => {
                    e.stopPropagation();
                    this.handleEmployeeDelete(assignedEmployeeObj.name);
                  }}
                />
              </li>
            )}
            {employeeList}
          </ul>
        </div>
      </Modal>
    );
  }
}

SelectModal.propTypes = {
  chosenEmployee: PropTypes.array,
  dummyData: PropTypes.array,
  dispatch: PropTypes.func,
  selectedOpened: PropTypes.bool,
  selectX: PropTypes.number,
  selectY: PropTypes.number,
  cellId: PropTypes.number,
  selectBottom: PropTypes.number,
  selectRight: PropTypes.number,
  floor: PropTypes.string,
  deleteEmployee: PropTypes.func,
  openSelected: PropTypes.func,
  choseEmployee: PropTypes.func,
  createChosenEmployee: PropTypes.func,
  deleteChosenEmployee: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    dummyData: state.employees.employees,
    chosenEmployee: state.employees.chosenEmployee,
    selectedOpened: state.grid.modalProps.selectedOpened,
    selectX: state.grid.modalProps.selectX,
    selectY: state.grid.modalProps.selectY,
    selectBottom: state.grid.modalProps.selectBottom,
    selectRight: state.grid.modalProps.selectRight,
    cellId: state.grid.modalProps.cellId,
    floor: state.render.render,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openSelected: payload => {
      dispatch(openSelected(payload));
    },
    createChosenEmployee: payload => {
      dispatch(createChosenEmployee(payload));
    },
    deleteChosenEmployee: name => {
      dispatch(deleteChosenEmployee(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectModal);
