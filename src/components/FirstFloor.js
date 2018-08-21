import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RenderRoom } from '../actions/FloorRoomRender';
import Room from './Room';
/*
 first floor components , contains a plan for all the rooms inside . the rooms are clickable and will dispatch an action to render the room .
 the component is conencted to the store to get the room state and render the components accordingly 
*/
const FirstFloor = props => (
  <div className="main-grid-grid">
    {props.room === 'first floor' ? (
      <div className="first-floor">
        <div className="room stairs">stairs</div>
        <div className="room bathroom">bathroom</div>
        <div
          className="room work-room2"
          onClick={() => props.dispatch(RenderRoom('work room two'))}
        >
          work room 2
        </div>
        <div className="room meeting-room2">meeting room 2</div>
        <div className="room meeting-room1">meeting room 1</div>
        <div
          className="room lobby"
          onClick={() => props.dispatch(RenderRoom('first floor lobby'))}
        >
          lobby
        </div>
        <div className="room locker">locker</div>
        <div
          className="room work-room1"
          onClick={() => props.dispatch(RenderRoom('work room one'))}
        >
          work room 1
        </div>
      </div>
    ) : (
      <Room roomName={props.room} />
    )}
  </div>
);

FirstFloor.propTypes = {
  room: PropTypes.string,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    room: state.room.room,
  };
};

export default connect(mapStateToProps)(FirstFloor);
