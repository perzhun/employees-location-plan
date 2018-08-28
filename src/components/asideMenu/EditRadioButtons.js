import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { settingsOption, activateGrid } from '../../actions/menu';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 2,
  },
  group: {
    margin: 0,
  },
  label: {
    color: 'white',
  },
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.settingsOption(event.target.value);
    if (
      event.target.value === 'Grid settings' ||
      event.target.value === 'Work place settings'
    ) {
      this.props.activateGrid(true);
    } else {
      this.props.activateGrid(false);
    }
  };

  UNSAFE_componentWillReceiveProps() {
    if (!this.props.editingEnabled) {
      this.setState({ value: '' });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="Settings"
            name="Settings"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="Grid settings"
              control={<Radio />}
              label="Grid settings"
              disabled={!this.props.editingEnabled}
              classes={{
                label: classes.label,
              }}
            />
            <FormControlLabel
              value="Work place settings"
              control={<Radio />}
              label="Work place settings"
              disabled={!this.props.editingEnabled}
              classes={{
                label: classes.label,
              }}
            />
            <FormControlLabel
              value="Employee location settings"
              control={<Radio />}
              label="Employee location settings"
              disabled={!this.props.editingEnabled}
              classes={{
                label: classes.label,
              }}
            />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
  editingEnabled: PropTypes.bool,
  settingsOption: PropTypes.func,
  activateGrid: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    editingEnabled: state.menu.editingEnabled,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    settingsOption: option => {
      dispatch(settingsOption(option));
    },
    activateGrid: enabled => {
      dispatch(activateGrid(enabled));
    },
  };
};

export default compose(
  withStyles(styles, { name: 'RadioButtonsGroup' }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(RadioButtonsGroup);
