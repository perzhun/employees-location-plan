import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import styled from 'styled-components';
//import classNames from 'classnames';
import Employee from './Employee';
import SelectModal from './SelectModal';
import { addWorkPlace } from '../actions/mainGridRender';

/*
 first floor components , contains a plan for all the rooms inside .
  the rooms are clickable and will dispatch an action to render the room .
 the component is conencted to the store to get the room state and render the components accordingly
*/
Modal.defaultStyles.overlay.backgroundColor = 'none';

class FirstFloor extends Component {
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
                this.props.selectedOpened && this.props.cellId === i ? (
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
          <CustomGrid className="first-floor">{divCells}</CustomGrid>
        </div>
        <SelectModal />
      </div>
    );
  }
}

FirstFloor.propTypes = {
  dummyData: PropTypes.array,
  gridCollums: PropTypes.number,
  gridRows: PropTypes.number,
  gridEdit: PropTypes.bool,
  dispatch: PropTypes.func,
  workPlace: PropTypes.array,
  selectedOpened: PropTypes.bool,
  cellId: PropTypes.number,
  settingsOptionEnabled: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    dummyData: state.employees.employees,
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
