import React, { Component } from 'react';
import Close from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

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
        className={
          this.props.menuClicked ? 'aside-menu' : 'aside-menu--untoggled'
        }
      >
        <div className="aside-menu__header">
          <span>Search for an employee!</span>
          <Close onClick={this.unToggleMenu} className="aside-menu__close" />
        </div>
        <textarea placeholder="Search" className="aside-menu__search" />
      </aside>
    );
  }
}

AsideMenu.propTypes = {
  onMenuClose: PropTypes.func,
  menuClicked: PropTypes.bool,
};

export default AsideMenu;
