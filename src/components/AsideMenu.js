import React, { Component } from 'react';
//import AsideAppBar from './AppBar';

class AsideMenu extends Component {
  render() {
    return (
      <aside className="aside-menu">
        <h1>Search for an employee!</h1>
        <textarea placeholder="Search" />
      </aside>
    );
  }
}

export default AsideMenu;
