import React, { Component } from 'react';
import Menu from '@material-ui/icons/Menu';
import AsideMenu from './AsideMenu';
import MainGrid from './MainGrid';

export default class HomePage extends Component {
  state = {
    toggle: true,
  };
  onMenuClick = () => {
    this.setState({ toggle: true });
  };
  onMenuClose = () => {
    this.setState({ toggle: false });
  };
  render() {
    return (
      <React.Fragment>
        <main className="home">
          <AsideMenu onMenuClose={this.onMenuClose} />
          <Menu
            className={
              this.state.toggle
                ? 'home__menu-button--hidden'
                : 'home__menu-button--active'
            }
            onClick={this.onMenuClick}
          />
          <MainGrid toggle={this.state.toggle} />
        </main>
      </React.Fragment>
    );
  }
}
