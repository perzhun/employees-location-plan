import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {
  EnableEditing,
  activateGrid,
  settingsOption,
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
    marginRight: '1em',
  },
  formControlLabel: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    margin: '0 auto',
    justifyContent: 'space-between',
  },
});

class CustomizedSwitches extends React.Component {
  state = {
    checkedA: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    this.props.enableEditing(event.target.checked);
    if (!event.target.checked) {
      this.props.activateGrid(false);
      this.props.settingsOption('');
    }
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
        label="Enable editing"
        classes={{
          label: classes.root,
          root: classes.formControlLabel,
        }}
      />
    );
  }
}

CustomizedSwitches.propTypes = {
  classes: PropTypes.object.isRequired,
  enableEditing: PropTypes.func,
  activateGrid: PropTypes.func,
  settingsOption: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
  return {
    enableEditing: enabled => {
      dispatch(EnableEditing(enabled));
    },
    activateGrid: enabled => {
      dispatch(activateGrid(enabled));
    },
    settingsOption: option => {
      dispatch(settingsOption(option));
    },
  };
};

export default compose(
  withStyles(styles, { name: 'CustomizedSwitches' }),
  connect(
    null,
    mapDispatchToProps,
  ),
)(CustomizedSwitches);
