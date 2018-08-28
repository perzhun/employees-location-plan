import React from 'react';
import { connect } from 'react-redux';
import { rangeChange } from '../../actions/menu';
import PropTypes from 'prop-types';

const RenderedSettings = props => {
  return (
    <div
      className={
        props.settingsOptionEnabled !== ''
          ? 'aside-menu__renderedSettings'
          : null
      }
    >
      {props.editingEnabled &&
      props.settingsOptionEnabled === 'Grid settings' ? (
        <div>
          <input
            min={2}
            max={20}
            type="range"
            defaultValue={props.grid}
            className="slider"
            onChange={event => props.rangeChange(event.target.value)}
          />
          <p>Use the slider to set the size of the grid</p>
        </div>
      ) : props.settingsOptionEnabled === 'Work place settings' ? (
        <p className="aside-menu-renderedSettings__message">
          Set working places by clicking on empty cells
        </p>
      ) : props.settingsOptionEnabled === 'Employee location settings' ? (
        <p className="aside-menu-renderedSettings__message">
          Assign employees to their working space by clicking on available
          working places
        </p>
      ) : null}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    rangeChange: value => {
      dispatch(rangeChange(value));
    },
  };
};

const mapStateToProps = state => {
  return {
    settingsOptionEnabled: state.menu.settingsOptionEnabled,
    grid: state.grid.gridCollums,
    editingEnabled: state.menu.editingEnabled,
  };
};

RenderedSettings.propTypes = {
  settingsOptionEnabled: PropTypes.string,
  grid: PropTypes.number,
  rangeChange: PropTypes.func,
  editingEnabled: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RenderedSettings);
