import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { WorkRoomTwoRender } from '../actions/firstFloorRender';
import WorkRoomTwo from './firstFloorRooms/WorkRoomTwo';

/*
 first floor components , contains a plan for all the rooms inside . the rooms are clickable and will dispatch an action to render the room .
 the component is conencted to the store to get the room state and render the components accordingly 
*/
const FirstFloor = props => (
  <div className="main-grid-grid">
    {props.room.room === 'work room two' ? (
      <WorkRoomTwo key="work-room-two" />
    ) : (
      <div className="first-floor">
        <div className="room stairs">stairs</div>
        <div className="room bathroom">bathroom</div>
        <div
          className="room sitting-room2"
          onClick={() => {
            props.dispatch(WorkRoomTwoRender());
          }}
        >
          sitting room 2
        </div>
        <div className="room meeting-room2">meeting room 2</div>
        <div className="room meeting-room1">meeting room 1</div>
        <div className="room lobby">lobby</div>
        <div className="room locker">locker</div>
        <div className="room sitting-room1">sitting room 1</div>
      </div>
    )}
  </div>
);

FirstFloor.propTypes = {
  room: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    room: state.room,
  };
};

export default connect(mapStateToProps)(FirstFloor);
