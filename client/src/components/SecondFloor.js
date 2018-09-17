import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import styled from 'styled-components';
import Employee from './Employee';
import SelectModal from './SelectModal';
import EmployeeModal from './EmployeeModal';
import {
  getGrid,
  setWorkPlaceSecond,
  deleteWorkPlace,
  getWorkPlaceArray,
} from '../actions/apiCalls';

/*
 second floor components , contains a plan for all the rooms inside .
  the rooms are clickable and will dispatch an action to render the room .
 the component is conencted to the store to get the room state and render the components accordingly
*/
Modal.defaultStyles.overlay.backgroundColor = 'none';

class SecondFloor extends Component {
  componentDidMount() {
    this.props.getGrid('second');
    this.props.getWorkPlaceArray('second');
  }
  render() {
    const CustomGrid = styled.div`
      grid-template-rows: repeat(${this.props.gridRows}, 1fr);
      grid-template-columns: repeat(${this.props.gridCollums * 3}, 1fr);
      grid-gap: calc(2.5em * (1 / ${this.props.gridRows}));
    `;

    let divCells = [];
    for (
      let i = 0;
      i < this.props.gridRows * (this.props.gridCollums * 3);
      i++
    ) {
      divCells.push(
        <div
          className={this.props.gridEdit ? 'grid-cell' : 'grid-cell--unactive'}
          key={i}
          onClick={() => {
            if (this.props.settingsOptionEnabled === 'Work place settings') {
              this.props.workPlace.indexOf(i) !== -1
                ? this.props.deleteWorkPlace(i, 'second')
                : this.props.setWorkPlaceSecond(i);
            }
          }}
        >
          {this.props.workPlace.indexOf(i) !== -1 && (
            <div
              className={
                (this.props.selectedOpened && this.props.cellId === i) ||
                this.props.searchedEmployee === i ? (
                  'grid-cell--selected'
                ) : (
                  'grid-cell--active'
                )
              }
            >
              <Employee employeeKey={i} />
            </div>
          )}
        </div>,
      );
    }
    return (
      <div className="main-grid-grid">
        <div className="main-grid-wrapper">
          <CustomGrid className="second-floor">{divCells}</CustomGrid>
        </div>
        <SelectModal />
        <EmployeeModal />
      </div>
    );
  }
}

SecondFloor.propTypes = {
  gridCollums: PropTypes.number,
  gridRows: PropTypes.number,
  gridEdit: PropTypes.bool,
  dispatch: PropTypes.func,
  workPlace: PropTypes.array,
  selectedOpened: PropTypes.bool,
  cellId: PropTypes.number,
  settingsOptionEnabled: PropTypes.string,
  searchedEmployee: PropTypes.number,
  addWorkPlaceSecond: PropTypes.func,
  removeWorkPlaceSecond: PropTypes.func,
  getGrid: PropTypes.func,
  setWorkPlaceSecond: PropTypes.func,
  deleteWorkPlace: PropTypes.func,
  getWorkPlaceArray: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    gridCollums: state.grid.gridCollums,
    gridRows: state.grid.gridRows,
    gridEdit: state.grid.gridEdit,
    workPlace: state.grid.secondFloorWorkPlace,
    selectedOpened: state.grid.modalProps.selectedOpened,
    selectX: state.grid.modalProps.selectX,
    selectY: state.grid.modalProps.selectY,
    cellId: state.grid.modalProps.cellId,
    settingsOptionEnabled: state.menu.settingsOptionEnabled,
    searchedEmployee: state.employees.searchedEmployee,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGrid: floor => {
      dispatch(getGrid(floor));
    },
    setWorkPlaceSecond: place => {
      dispatch(setWorkPlaceSecond(place));
    },
    deleteWorkPlace: (cell, floor) => {
      dispatch(deleteWorkPlace(cell, floor));
    },
    getWorkPlaceArray: floor => {
      dispatch(getWorkPlaceArray(floor));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondFloor);
