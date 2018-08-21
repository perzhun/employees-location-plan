import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/*
 second floor components , contains a plan for all the rooms inside . the rooms are clickable and will dispatch an action to render the room .
 the component is conencted to the store to get the room state and render the components accordingly 
*/

const SecondFloor = () => (
  <div className="main-grid-grid">
    <div className={'second-floor'}>
      <div className="f2-room second-floor__stairs">stairs</div>
      <div className="f2-room second-floor__cabinet1">cabinet 1</div>
      <div className="f2-room second-floor__cabinet2">cabinet 2</div>
      <div className="f2-room second-floor__sitting-room">sitting room</div>
      <div className="f2-room second-floor__sitting-room1">sitting room</div>
      <div className="f2-room second-floor__sitting-room2">sitting room</div>
      <div className="f2-room second-floor__sitting-room3">sitting room</div>
      <div className="f2-room second-floor__sitting-room4">sitting room </div>
      <div className="f2-room second-floor__cabinet3">cabinet 3 </div>
      <div className="f2-room second-floor__lobby">lobby </div>
      <div className="f2-room second-floor__stairs2">stairs</div>
    </div>
  </div>
);

SecondFloor.propTypes = {
  render: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    render: state.render,
  };
};

export default connect(mapStateToProps)(SecondFloor);
