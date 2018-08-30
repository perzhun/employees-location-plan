import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Clear from '@material-ui/icons/Clear';
import {
  openSelected,
  choseEmployee,
  deleteEmployee,
} from '../actions/mainGridRender';

Modal.defaultStyles.overlay.backgroundColor = 'none';

class SelectModal extends Component {
  state = {
    searchText: '',
  };
  HandleSearch = e => {
    this.setState({ searchText: e.target.value });
  };
  handleSelectClick = name => {
    this.props.dispatch(
      choseEmployee({
        name: name,
        id: this.props.cellId,
      }),
    );
    this.props.dispatch(
      openSelected({
        selectedOpened: false,
        selectX: 0,
        selectY: 0,
      }),
    );
    console.log('employee add');
  };

  handleEmployeeDelete = name => {
    this.props.dispatch(deleteEmployee(name));
    console.log('close');
  };

  render() {
    const customModal = {
      content: {
        left: this.props.selectX + 30,
        top: this.props.selectY,
        width: '200px',
        right: 'none',
        bottom: 'none',
        overflow: 'hidden',
        position: 'absolute',
        padding: 0,
      },
    };
    let employeeList;
    let filterById = [];
    if (this.props.chosenEmployee.length > 0) {
      filterById = this.props.chosenEmployee.filter(
        el => el.id === this.props.cellId,
      );
    }
    let filteredPerson;
    if (filterById.length > 0) {
      [filteredPerson] = filterById;
    }
    employeeList = this.props.dummyData.map((person, index) => {
      if (
        person.name.toUpperCase().indexOf(this.state.searchText.toUpperCase()) >
        -1
      ) {
        return (
          <li
            key={index}
            onClick={() => {
              this.handleSelectClick(person.name);
            }}
          >
            <span>{person.name}</span>
            {filterById.length > 0 && filteredPerson.name === person.name ? (
              <Clear
                onClick={e => {
                  e.stopPropagation();
                  this.handleEmployeeDelete(person.name);
                }}
              />
            ) : null}
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
        onRequestClose={() =>
          this.props.dispatch(
            openSelected({
              selectedOpened: false,
              selectX: 0,
              selectY: 0,
            }),
          )}
        contentLabel="Employee select"
      >
        <input
          type="text"
          className="modal__input"
          onChange={this.HandleSearch}
          value={this.state.searchText}
        />
        <ul className="modal__select">{employeeList}</ul>
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
};

const mapStateToProps = state => {
  return {
    dummyData: state.employees.employees,
    chosenEmployee: state.employees.chosenEmployee,
    selectedOpened: state.grid.modalProps.selectedOpened,
    selectX: state.grid.modalProps.selectX,
    selectY: state.grid.modalProps.selectY,
    cellId: state.grid.modalProps.cellId,
  };
};

export default connect(mapStateToProps)(SelectModal);
