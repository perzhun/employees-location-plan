import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {
  adminAuth,
  EnableEditing,
  settingsOption,
  activateGrid,
} from '../../actions/menu';

const styles = () => ({
  colorSwitchBase: {
    color: '#D7ECCA',
    '&$colorChecked': {
      color: 'rgb(245, 0, 87)',
      '& + $colorBar': {
        backgroundColor: 'rgb(245, 0, 87)',
      },
    },
  },
  colorBar: {},
  colorChecked: {},
  root: {
    color: 'white',
    fontWeight: 'bold',
  },
});

class AdminMode extends React.Component {
  state = {
    checkedA: false,
  };

  handleChange = name => event => {
    let enable = event.target.checked;
    this.setState({ [name]: enable });
    this.props.adminLogin(enable);
    /*this.props.EnableEditing(enable);
    if (enable === false) {
      this.props.activateGrid(enable);
    }
    this.props.settingsOption('');*/
  };

  render() {
    const { classes } = this.props;

    return (
      <FormControlLabel
        control={
          <Switch
            checked={this.state.checkedA}
            onChange={this.handleChange('checkedA')}
            value="checkedA"
            classes={{
              switchBase: classes.colorSwitchBase,
              checked: classes.colorChecked,
              bar: classes.colorBar,
            }}
          />
        }
        label="Admin Authenticated"
        classes={{
          label: classes.root,
        }}
      />
    );
  }
}

AdminMode.propTypes = {
  classes: PropTypes.object.isRequired,
  adminAuth: PropTypes.func,
  EnableEditing: PropTypes.func,
  settingsOption: PropTypes.func,
  activateGrid: PropTypes.func,
  adminLogin: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
  return {
    adminLogin: enabled => {
      dispatch(adminAuth(enabled));
      dispatch(EnableEditing(enabled));
      if (enabled === false) {
        dispatch(activateGrid(enabled));
      }
      dispatch(settingsOption(''));
    },
    /*
    adminAuth: enabled => {
      dispatch(adminAuth(enabled));
    },
    EnableEditing: enabled => {
      dispatch(EnableEditing(enabled));
    },
    settingsOption: option => {
      dispatch(settingsOption(option));
    },
    activateGrid: enabled => {
      dispatch(activateGrid(enabled));
    },
    */
  };
};

export default compose(
  withStyles(styles, { name: 'AdminMode' }),
  connect(null, mapDispatchToProps),
)(AdminMode);
