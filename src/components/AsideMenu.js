import React, { Component } from 'react';
import { connect } from 'react-redux';
import Close from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import { menuUntoggle } from '../actions/menu';
import CustomizedSwitches from './asideMenu/EditSwitchButton';
import RadioButtonsGroup from './asideMenu/EditRadioButtons';
import RenderedSettings from './asideMenu/RenderedSettings';
import AdminMode from './asideMenu/AdminMode';
import { floorRender, searchEmployee } from '../actions/mainGridRender';
//import '/react-input-range/lib/css/index.css';

// toggable aside menu that contains a search function and a close button
// the components is connected to the store to get the state of the toggle , it will then toggle accordingly
// the close button dispatches an action to change the state to untoggled

class AsideMenu extends Component {
  state = {
    inputText: '8',
  };

  HandleSearch = e => {
    this.setState({ inputText: e.target.value });
  };

  handleEmployeeClick = (employee, floor) => {
    this.props.floorRender(floor);
    this.props.searchEmployee(employee);
  };

  render() {
    let employeeSearch;
    this.state.inputText === ''
      ? null
      : (employeeSearch = this.props.dummyData.map((person, index) => {
          if (
            person.name
              .toUpperCase()
              .indexOf(this.state.inputText.toUpperCase()) > -1
          ) {
            return (
              <li
                key={index}
                className="aside-menu__item"
                onClick={() => {
                  let [matchedEmployee] = this.props.chosenEmployee.filter(
                    el => el.name === person.name,
                  );
                  this.handleEmployeeClick(matchedEmployee.id, 'first floor');
                }}
              >
                <span className="aside-menu__item__name">{person.name}</span>
                <span
                  className="aside-menu__photo"
                  style={{ backgroundImage: `url(${person.photo})` }}
                />
              </li>
            );
          }
        }));

    return (
      <aside
        className={
          this.props.menu.toggle ? 'aside-menu' : 'aside-menu--untoggled'
        }
      >
        <div className="aside-menu__header">
          <span>Search for an employee!</span>
          <Close
            onClick={() => {
              this.props.menuUntoggle();
            }}
            className="aside-menu__close"
          />
        </div>
        <textarea
          onChange={this.HandleSearch}
          value={this.state.searchText}
          className="aside-menu__search"
        />
        <ul className="aside-menu__list">{employeeSearch}</ul>
        <AdminMode />
        {this.props.adminAuthenticated && (
          <div>
            <CustomizedSwitches />
            <RadioButtonsGroup />
            <RenderedSettings />
          </div>
        )}
      </aside>
    );
  }
}

AsideMenu.propTypes = {
  menu: PropTypes.object,
  menuUntoggle: PropTypes.func,
  toggle: PropTypes.bool,
  dispatch: PropTypes.func,
  adminAuthenticated: PropTypes.bool,
  dummyData: PropTypes.array,
  floorRender: PropTypes.func,
  searchEmployee: PropTypes.func,
  chosenEmployee: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    menu: state.menu,
    adminAuthenticated: state.menu.adminAuthenticated,
    dummyData: state.employees.employees,
    chosenEmployee: state.employees.chosenEmployee,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    floorRender: floor => {
      dispatch(floorRender(floor));
    },
    menuUntoggle: () => {
      dispatch(menuUntoggle());
    },
    searchEmployee: employee => {
      dispatch(searchEmployee(employee));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AsideMenu);
