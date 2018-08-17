import React, { Component } from 'react';
import AsideMenu from './AsideMenu';
import MainGrid from './MainGrid';

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="home">
          <AsideMenu />
          <MainGrid />
        </main>
      </React.Fragment>
    );
  }
}
