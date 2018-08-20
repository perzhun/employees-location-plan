import React, { Component } from 'react';
import { connect } from 'react-redux';
import Close from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import { MENU_UNTOGGLE } from '../actions/menu';

class AsideMenu extends Component {
  /*
  state = {
    toggled: this.props.menuClicked,
  };
 */
  unToggleMenu = () => {
    const { onMenuClose } = this.props;
    onMenuClose();
  };
  render() {
    return (
      <aside
        className={this.props.toggle ? 'aside-menu' : 'aside-menu--untoggled'}
      >
        <div className="aside-menu__header">
          <span>Search for an employee!</span>
          <Close
            onClick={this.props.MENU_UNTOGGLE}
            className="aside-menu__close"
          />
        </div>
        <textarea placeholder="Search" className="aside-menu__search" />
      </aside>
    );
  }
}

AsideMenu.propTypes = {
  MENU_UNTOGGLE: PropTypes.func,
  toggle: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    toggle: state.toggle,
  };
};

export default connect(mapStateToProps)(AsideMenu);
