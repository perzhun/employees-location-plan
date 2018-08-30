import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import styled from 'styled-components';
//import classNames from 'classnames';
import Employee from './Employee';
import {
  addWorkPlace,
  openSelected,
  choseEmployee,
} from '../actions/mainGridRender';

/*
 first floor components , contains a plan for all the rooms inside .
  the rooms are clickable and will dispatch an action to render the room .
 the component is conencted to the store to get the room state and render the components accordingly
*/
Modal.defaultStyles.overlay.backgroundColor = 'none';

class FirstFloor extends Component {
  state = {
    searchText: '',
  };

  HandleSearch = e => {
    this.setState({ searchText: e.target.value });
  };
  handleSelectClick = e => {
    console.log(e.target.firstChild);
    this.props.dispatch(
      choseEmployee({
        name: e.target.firstChild.innerText,
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
  };

  render() {
    const CustomGrid = styled.div`
      grid-template-rows: repeat(${this.props.gridRows}, 1fr);
      grid-template-columns: repeat(${this.props.gridCollums}, 1fr);
    `;
    let divCells = [];
    for (let i = 0; i < this.props.gridRows * this.props.gridCollums; i++) {
      divCells.push(
        <div
          className={this.props.gridEdit ? 'grid-cell' : 'grid-cell--unactive'}
          key={i}
          onClick={() => {
            if (this.props.settingsOptionEnabled === 'Work place settings') {
              this.props.dispatch(addWorkPlace(i));
            }
          }}
        >
          {this.props.workPlace.indexOf(i) !== -1 && (
            <div
              className={
                this.props.selectedOpened && this.props.cellId === i
                  ? 'grid-cell--selected'
                  : 'grid-cell--active'
              }
            >
              <Employee employeeKey={i} />
            </div>
          )}
        </div>,
      );
    }
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
    //let filterById = (person,index) => person.id === index;
    employeeList = this.props.dummyData.map((person, index) => {
      if (
        person.name.toUpperCase().indexOf(this.state.searchText.toUpperCase()) >
        -1
      ) {
        return (
          <li key={index}>
            <span>{person.name}</span>
            {this.props.chosenEmployee.filter(el => el.id === person.id)
              .length > 0 ? (
              <p>test</p>
            ) : null}
          </li>
        );
      }
    });
    return (
      <div className="main-grid-grid">
        <div className="main-grid-wrapper">
          <CustomGrid className="first-floor">{divCells}</CustomGrid>
        </div>
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
            )
          }
          contentLabel="Employee select"
        >
          <input
            type="text"
            className="modal__input"
            onChange={this.HandleSearch}
            value={this.state.searchText}
          />
          <ul className="modal__select" onClick={this.handleSelectClick}>
            {employeeList}
          </ul>
        </Modal>
      </div>
    );
  }
}

FirstFloor.propTypes = {
  chosenEmployee: PropTypes.array,
  dummyData: PropTypes.array,
  gridCollums: PropTypes.number,
  gridRows: PropTypes.number,
  gridEdit: PropTypes.bool,
  dispatch: PropTypes.func,
  workPlace: PropTypes.array,
  selectedOpened: PropTypes.bool,
  selectX: PropTypes.number,
  selectY: PropTypes.number,
  cellId: PropTypes.number,
  settingsOptionEnabled: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    dummyData: state.employees.employees,
    chosenEmployee: state.employees.chosenEmployee,
    gridCollums: state.grid.gridCollums,
    gridRows: state.grid.gridRows,
    gridEdit: state.grid.gridEdit,
    workPlace: state.grid.workPlace,
    selectedOpened: state.grid.modalProps.selectedOpened,
    selectX: state.grid.modalProps.selectX,
    selectY: state.grid.modalProps.selectY,
    cellId: state.grid.modalProps.cellId,
    settingsOptionEnabled: state.menu.settingsOptionEnabled,
  };
};

export default connect(mapStateToProps)(FirstFloor);
