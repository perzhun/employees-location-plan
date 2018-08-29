import React from 'react';
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

const FirstFloor = props => {
  const CustomGrid = styled.div`
    grid-template-rows: repeat(${props.gridRows}, 1fr);
    grid-template-columns: repeat(${props.gridCollums}, 1fr);
  `;
  let divCells = [];
  for (let i = 0; i < props.gridRows * props.gridCollums; i++) {
    divCells.push(
      <div
        className={props.gridEdit ? 'grid-cell' : 'grid-cell--unactive'}
        key={i}
        onClick={() => {
          if (props.settingsOptionEnabled === 'Work place settings') {
            props.dispatch(addWorkPlace(i));
          }
        }}
      >
        {props.workPlace.indexOf(i) !== -1 && (
          <div className="grid-cell--active">
            <Employee employeeKey={i} />
          </div>
        )}
      </div>,
    );
  }
  const customModal = {
    content: {
      left: props.selectX + 30,
      top: props.selectY,
      width: '100px',
      height: '20px',
      position: 'absolute',
      padding: 0,
    },
  };
  let employeeList;
  employeeList = props.dummyData.map((person, index) => (
    <option key={index} value={person.name}>
      {person.name}
    </option>
  ));
  return (
    <div className="main-grid-grid">
      <div className="main-grid-wrapper">
        <CustomGrid className="first-floor">{divCells}</CustomGrid>
      </div>
      <Modal
        isOpen={props.selectedOpened}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        style={customModal}
        onRequestClose={() =>
          props.dispatch(
            openSelected({
              selectedOpened: false,
              selectX: 0,
              selectY: 0,
            }),
          )
        }
        contentLabel="Employee select"
      >
        <select
          className="modal__select"
          onChange={e => {
            props.dispatch(
              choseEmployee({ name: e.target.value, id: props.cellId }),
            );
          }}
        >
          {employeeList}
        </select>
      </Modal>
    </div>
  );
};

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
