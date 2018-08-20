import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MainGrid extends Component {
  render() {
    return (
      <section
        className={this.props.toggle ? 'main-grid' : 'main-grid--untoggled'}
      >
        <h1>Exadel</h1>
      </section>
    );
  }
}

MainGrid.propTypes = {
  toggle: PropTypes.bool,
};

export default MainGrid;
