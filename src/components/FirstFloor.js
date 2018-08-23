import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

/*import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';*/
//import Employee from './Employee';

/*
 first floor components , contains a plan for all the rooms inside .
  the rooms are clickable and will dispatch an action to render the room .
 the component is conencted to the store to get the room state and render the components accordingly
*/

const FirstFloor = props => {
  /*const { dummyData } = props;
  dummyData.sort((a, b) => a.place - b.place);*/
  const CustomGrid = styled.div`
    grid-template-rows: repeat(${props.gridRows}, 1fr);
    grid-template-columns: repeat(${props.gridCollums}, 1fr);
  `;
  let divCells = [];
  for (let i = 0; i < props.gridRows * props.gridCollums; i++) {
    divCells.push(
      <div
        className={props.gridEdit}
        key={i}
        onClick={e => {
          //e.target.className = `${props.gridEdit}` + ` grid-cell--active`;
          e.target.style.borderColor = 'green';
          return <div className="grid-cell--active" />;
        }}
      />,
    );
  }
  return (
    <div className="main-grid-grid">
      <CustomGrid className="first-floor">
        {/*
        <div className="first-floor__work-room1">
          {dummyData.map((person, index) => {
            return (
              <span key={index} className="first-floor__employee">
                <Employee person={person} />
              </span>
            );
          })}
        </div>
        <div className="first-floor__work-room2">work 2</div>
        */}
        {divCells}
      </CustomGrid>
    </div>
  );
};

FirstFloor.propTypes = {
  dummyData: PropTypes.array,
  gridCollums: PropTypes.number,
  gridRows: PropTypes.number,
};

const mapStateToProps = state => {
  return {
    gridCollums: state.grid.gridCollums,
    gridRows: state.grid.gridRows,
    gridEdit: state.grid.gridEdit,
  };
};

export default connect(mapStateToProps)(FirstFloor);
