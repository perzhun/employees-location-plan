import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Clear from '@material-ui/icons/Clear';
import { openEmployeeModal } from '../actions/mainGridRender';

Modal.defaultStyles.overlay.backgroundColor = 'none';

class EmployeeModal extends Component {
  handleCloseEmployeeModal = () => {
    this.props.openEmployeeModal({
      modalOpened: false,
      employeeInfo: {},
      selectX: 0,
      selectY: 0,
    });
  };

  render() {
    const customModal = {
      content: {
        left: this.props.selectX + 10,
        top: this.props.selectY,
        width: '300px',
        right: 'none',
        bottom: 'none',
        overflow: 'hidden',
        position: 'absolute',
        padding: 0,
        boxShadow: '3px 3px 3px 3px #888888',
      },
    };
    return (
      <Modal
        isOpen={this.props.modalOpened}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        style={customModal}
        onRequestClose={this.handleCloseEmployeeModal}
        contentLabel="Employee modal"
      >
        <div className="employee-modal__header">
          <div
            className="employee-modal__img"
            style={{
              backgroundImage: `url(${this.props.modalOpened
                ? this.props.employeeInfo.photo
                : ''})`,
            }}
          />
          <div className="employee-modal__headings">
            <h4>{`${this.props.employeeInfo.name} ${this.props.employeeInfo
              .lastName}`}</h4>
            <h5>{this.props.employeeInfo.position}</h5>
          </div>
        </div>
        <Clear
          onClick={this.handleCloseEmployeeModal}
          className="employee-header__close-modal"
        />
        <div className="employee-modal__content">
          <p>{this.props.employeeInfo.note}</p>
        </div>
      </Modal>
    );
  }
}

EmployeeModal.propTypes = {
  dispatch: PropTypes.func,
  modalOpened: PropTypes.bool,
  selectX: PropTypes.number,
  selectY: PropTypes.number,
  employeeInfo: PropTypes.object,
  openEmployeeModal: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    modalOpened: state.employees.employeeModalProps.modalOpened,
    selectX: state.employees.employeeModalProps.selectX,
    selectY: state.employees.employeeModalProps.selectY,
    employeeInfo: state.employees.employeeModalProps.employeeInfo,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openEmployeeModal: payload => {
      dispatch(openEmployeeModal(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeModal);
