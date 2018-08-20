import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Menu from '@material-ui/icons/Menu';
import { menuToggle } from '../actions/menu';

//class MainGrid extends Component {
const MainGrid = props => (
  /*render() {
    return (*/
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
  </section>
);
// }
//}

MainGrid.propTypes = {
  toggle: PropTypes.bool,
  dispatch: PropTypes.func,
  menu: PropTypes.object,
  menuToggle: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    menu: state.menu,
  };
};

export default connect(mapStateToProps)(MainGrid);
