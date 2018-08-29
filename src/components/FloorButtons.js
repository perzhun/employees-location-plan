import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Room from '@material-ui/icons/Room';
import { floorRender } from '../actions/mainGridRender';

const ITEM_HEIGHT = 48;

class FloorButtons extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
    this.props.floorRender('first floor');
  };

  handleCloseSecond = () => {
    this.setState({ anchorEl: null });
    this.props.floorRender('second floor');
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <Room style={{ fontSize: '2em', color: 'red' }} />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          <MenuItem onClick={this.handleClose}>first floor</MenuItem>

          <MenuItem onClick={this.handleCloseSecond}>second floor</MenuItem>
        </Menu>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    floorRender: floor => {
      dispatch(floorRender(floor));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(FloorButtons);
