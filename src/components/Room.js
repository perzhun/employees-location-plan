import React from 'react';
import PropTypes from 'prop-types';

const Room = props => <div className="room--rendered">{props.roomName}</div>;

Room.propTypes = {
  roomName: PropTypes.string,
};

export default Room;
