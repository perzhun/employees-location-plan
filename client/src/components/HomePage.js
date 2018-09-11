import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AsideMenu from './AsideMenu';
import MainGrid from './MainGrid';
import { fetchEmployees } from '../actions/employees';

// the app's home page . contains a togglable menu to the side and a main grid in the middle

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchEmployees());
  }
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

HomePage.propTypes = {
  employees: PropTypes.array,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  employees: state.employees.employees,
});

export default connect(mapStateToProps)(HomePage);
