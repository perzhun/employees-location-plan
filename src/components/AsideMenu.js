import React from 'react';
import { connect } from 'react-redux';
import Close from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import { menuUntoggle } from '../actions/menu';
import CustomizedSwitches from './asideMenu/EditSwitchButton';
import RadioButtonsGroup from './asideMenu/EditRadioButtons';
import RenderedSettings from './asideMenu/RenderedSettings';
import AdminMode from './asideMenu/AdminMode';
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
    <AdminMode />
    {props.adminAuthenticated && (
      <div>
        <CustomizedSwitches />
        <RadioButtonsGroup />
        <RenderedSettings />
      </div>
    )}
  </aside>
);

AsideMenu.propTypes = {
  menu: PropTypes.object,
  menuUntoggle: PropTypes.func,
  toggle: PropTypes.bool,
  dispatch: PropTypes.func,
  adminAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    menu: state.menu,
    adminAuthenticated: state.menu.adminAuthenticated,
  };
};

export default connect(mapStateToProps)(AsideMenu);
