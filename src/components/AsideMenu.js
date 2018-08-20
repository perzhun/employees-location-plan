import React from 'react';
import { connect } from 'react-redux';
import Close from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import { menuUntoggle } from '../actions/menu';

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
  </aside>
);

AsideMenu.propTypes = {
  menu: PropTypes.object,
  menuUntoggle: PropTypes.func,
  toggle: PropTypes.bool,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    menu: state.menu,
  };
};

export default connect(mapStateToProps)(AsideMenu);
