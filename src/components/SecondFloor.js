import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  secondCabinetOneRender,
  secondCabinetTwoRender,
  secondWorkRoomRender,
  secondWorkRoomOneRender,
  secondWorkRoomTwoRender,
  secondWorkRoomThreeRender,
  secondWorkRoomFourRender,
  secondCabinetThreeRender,
} from '../actions/secondFloorRender';
import SecondCabinetOne from './secondFloorRoom/SecondCabinetOne';
import SecondCabinetThree from './secondFloorRoom/SecondCabinetThree';
import SecondCabinetTwo from './secondFloorRoom/SecondCabinetTwo';
import SecondWorkRoom from './secondFloorRoom/SecondWorkRoom';
import SecondWorkRoomOne from './secondFloorRoom/SecondWorkRoomOne';
import SecondWorkRoomTwo from './secondFloorRoom/SecondWorkRoomTwo';
import SecondWorkRoomThree from './secondFloorRoom/SecondWorkRoomThree';
import SecondWorkRoomFour from './secondFloorRoom/SecondWorkRoomFour';

/*
 second floor components , contains a plan for all the rooms inside . the rooms are clickable and will dispatch an action to render the room .
 the component is conencted to the store to get the room state and render the components accordingly 
*/

const SecondFloor = props => (
  <div className="main-grid-grid">
    {(() => {
      switch (props.secondRoom.secondRoom) {
        case 'second room':
          return <SecondWorkRoom />;
        case 'second room one':
          return <SecondWorkRoomOne />;
        case 'second room two':
          return <SecondWorkRoomTwo />;
        case 'second room three':
          return <SecondWorkRoomThree />;
        case 'second room four':
          return <SecondWorkRoomFour />;
        case 'second cabinet one':
          return <SecondCabinetOne />;
        case 'second cabinet two':
          return <SecondCabinetTwo />;
        case 'second cabinet three':
          return <SecondCabinetThree />;
        default:
          return (
            <div className={'second-floor'}>
              <div className="f2-room second-floor__stairs">stairs</div>
              <div
                className="f2-room second-floor__cabinet1"
                onClick={() => {
                  props.dispatch(secondCabinetOneRender());
                }}
              >
                cabinet 1
              </div>
              <div
                className="f2-room second-floor__cabinet2"
                onClick={() => {
                  props.dispatch(secondCabinetTwoRender());
                }}
              >
                cabinet 2
              </div>
              <div
                className="f2-room second-floor__work-room"
                onClick={() => {
                  props.dispatch(secondWorkRoomRender());
                }}
              >
                work room
              </div>
              <div
                className="f2-room second-floor__work-room1"
                onClick={() => {
                  props.dispatch(secondWorkRoomOneRender());
                }}
              >
                work room
              </div>
              <div
                className="f2-room second-floor__work-room2"
                onClick={() => {
                  props.dispatch(secondWorkRoomTwoRender());
                }}
              >
                work room
              </div>
              <div
                className="f2-room second-floor__work-room3"
                onClick={() => {
                  props.dispatch(secondWorkRoomThreeRender());
                }}
              >
                work room
              </div>
              <div
                className="f2-room second-floor__work-room4"
                onClick={() => {
                  props.dispatch(secondWorkRoomFourRender());
                }}
              >
                work room{' '}
              </div>
              <div
                className="f2-room second-floor__cabinet3"
                onClick={() => {
                  props.dispatch(secondCabinetThreeRender());
                }}
              >
                cabinet 3{' '}
              </div>
              <div className="f2-room second-floor__lobby">lobby </div>
              <div className="f2-room second-floor__stairs2">stairs</div>
            </div>
          );
      }
    })()}
  </div>
);

SecondFloor.propTypes = {
  secondRoom: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    secondRoom: state.secondRoom,
  };
};

export default connect(mapStateToProps)(SecondFloor);
