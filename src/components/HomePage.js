import React, { Component } from 'react';
import AsideMenu from './AsideMenu';
import MainGrid from './MainGrid';

// the app's home page . contains a togglable menu to the side and a main grid in the middle

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="home">
          <AsideMenu onMenuClose={this.onMenuClose} />
          <MainGrid />
        </main>
      </React.Fragment>
    );
  }
}
