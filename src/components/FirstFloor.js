import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
//import classNames from 'classnames';
import { addWorkPlace } from '../actions/mainGridRender';

/*
 first floor components , contains a plan for all the rooms inside .
  the rooms are clickable and will dispatch an action to render the room .
 the component is conencted to the store to get the room state and render the components accordingly
*/

const FirstFloor = props => {
  const CustomGrid = styled.div`
    grid-template-rows: repeat(${props.gridRows}, 1fr);
    grid-template-columns: repeat(${props.gridCollums}, 1fr);
  `;
  let divCells = [];
  for (let i = 0; i < props.gridRows * props.gridCollums; i++) {
    divCells.push(
      <div
        className={props.gridEdit ? 'grid-cell' : 'grid-cell--unactive'}
        key={i}
        onClick={e => {
          e.target.className = 'grid-cell--active';
          //e.target.style.borderColor = 'green';
          //return <div className="grid-cell--active" />;
          props.dispatch(addWorkPlace(i));
        }}
      >
        {/*props.workPlace && <div className='grid-cell--active' />*/}
        {props.workPlace.indexOf(i) !== -1 && (
          <div className="grid-cell--active">
            <span className="grid-cell__text"> bima </span>
          </div>
        )}
      </div>,
    );
  }
  return (
    <div className="main-grid-grid">
      <CustomGrid className="first-floor">{divCells}</CustomGrid>
    </div>
  );
};

FirstFloor.propTypes = {
  dummyData: PropTypes.array,
  gridCollums: PropTypes.number,
  gridRows: PropTypes.number,
  gridEdit: PropTypes.bool,
  dispatch: PropTypes.func,
  workPlace: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    gridCollums: state.grid.gridCollums,
    gridRows: state.grid.gridRows,
    gridEdit: state.grid.gridEdit,
    workPlace: state.grid.workPlace,
  };
};

export default connect(mapStateToProps)(FirstFloor);
