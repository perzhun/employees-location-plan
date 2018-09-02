import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Filter1 from '@material-ui/icons/Filter1';
import Filter2 from '@material-ui/icons/Filter2';
import { floorRender } from '../actions/mainGridRender';

const ITEM_HEIGHT = 48;

class FloorButtons extends React.Component {
  state = {
    anchorEl: null,
    floor: 1,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null, floor: 1 });
    this.props.floorRender('first floor');
  };

  handleCloseSecond = () => {
    this.setState({ anchorEl: null, floor: 2 });
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
          {this.props.render === 'first floor' ? (
            <Filter1 style={{ fontSize: '2em', color: '#f50057' }} />
          ) : (
            <Filter2 style={{ fontSize: '2em', color: '#f50057' }} />
          )}
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

FloorButtons.propTypes = {
  render: PropTypes.string,
  floorRender: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    render: state.render.render,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    floorRender: floor => {
      dispatch(floorRender(floor));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FloorButtons);
