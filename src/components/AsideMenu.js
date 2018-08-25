import React from 'react';
import { connect } from 'react-redux';
import Close from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { menuUntoggle, rangeChange, activateGrid } from '../actions/menu';
//import '/react-input-range/lib/css/index.css';

// toggable aside menu that contains a search function and a close button
// the components is connected to the store to get the state of the toggle , it will then toggle accordingly
// the close button dispatches an action to change the state to untoggled

const AsideMenu = props => (
  <aside className={props.menu.toggle ? 'aside-menu' : 'aside-menu--untoggled'}>
    <div className="aside-menu__header">
      <span>Search for an employee!</span>
      <Close
        onClick={() => {
          props.dispatch(menuUntoggle());
        }}
        className="aside-menu__close"
      />
    </div>
    <textarea placeholder="Search" className="aside-menu__search" />
    <Button
      variant="contained"
      color="primary"
      //className="main-grid__primary"
      onClick={() => {
        props.dispatch(activateGrid(true));
      }}
    >
      enable editing
    </Button>
    <input
      min={2}
      max={20}
      type="range"
      defaultValue={props.grid}
      onChange={event => props.dispatch(rangeChange(event.target.value))}
    />
    <Button
      variant="contained"
      color="primary"
      //className="main-grid__primary"
      onClick={() => {
        props.dispatch(activateGrid(false));
      }}
    >
      disable editing
    </Button>
  </aside>
);

AsideMenu.propTypes = {
  menu: PropTypes.object,
  menuUntoggle: PropTypes.func,
  toggle: PropTypes.bool,
  dispatch: PropTypes.func,
  grid: PropTypes.number,
};

const mapStateToProps = state => {
  return {
    menu: state.menu,
    grid: state.grid.gridCollums,
  };
};

export default connect(mapStateToProps)(AsideMenu);
