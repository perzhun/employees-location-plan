import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { openSelected } from '../actions/mainGridRender';
//import { DragSource } from 'react-dnd';

class Employee extends Component {
  render() {
    const CustomSelect = styled.select`
      display: ${this.props.selectedOpened ? 'inline' : 'none'};
    `;
    return (
      <div
        className="grid-cell__text"
        onClick={() => {
          this.props.dispatch(openSelected(true));
        }}
      >
        <CustomSelect>
          <option value="test">test</option>
          <option value="test1">test1</option>
          <option value="test2">test2</option>
        </CustomSelect>
      </div>
    );
  }
}

Employee.propTypes = {
  person: PropTypes.object,
  name: PropTypes.string,
  selectedOpened: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    selectedOpened: state.grid.selectedOpened,
  };
};

export default connect(mapStateToProps)(Employee);

/*
<img
        className="employee_circle"
        src={props.person.photo}
        alt="portrait"
      />*/
