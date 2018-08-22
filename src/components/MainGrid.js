import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Menu from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { menuToggle } from '../actions/menu';
import { firstFloorRender, secondFloorRender } from '../actions/mainGridRender';
import FirstFloor from './FirstFloor';
import SecondFloor from './SecondFloor';

/*
The main grid where the office map will render.
the component that will render depends on the render state in the store , if the state is 'first floor' the FirstFloor component will render etc...
the  component is connected to the store to get the render state and dispatch actions to change it 
the buttons dispatch actinos to change the render state accordingly 
*/

const MainGrid = props => (
  <section className={props.menu.toggle ? 'main-grid' : 'main-grid--untoggled'}>
    <h1 className="main-grid__title">Exadel</h1>
    <Menu
      className={
        props.menu.toggle
          ? 'home__menu-button--hidden'
          : 'home__menu-button--active'
      }
      onClick={() => {
        props.dispatch(menuToggle());
      }}
    />
    <div className="main-grid-buttons">
      <Button
        variant="contained"
        color="secondary"
        className="main-grid__primary"
        onClick={() => {
          props.dispatch(firstFloorRender());
        }}
      >
        First Floor
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className="main-grid__primary"
        onClick={() => {
          props.dispatch(secondFloorRender());
        }}
      >
        Second Floor
      </Button>
    </div>
    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeave={false}
    >
      {props.render.render === 'first floor' ? (
        <FirstFloor key="first" />
      ) : (
        <SecondFloor key="second" />
      )}
    </ReactCSSTransitionGroup>
  </section>
);
// }
//}

MainGrid.propTypes = {
  toggle: PropTypes.bool,
  dispatch: PropTypes.func,
  menu: PropTypes.object,
  render: PropTypes.object,
  menuToggle: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    menu: state.menu,
    render: state.render,
  };
};

export default connect(mapStateToProps)(MainGrid);
