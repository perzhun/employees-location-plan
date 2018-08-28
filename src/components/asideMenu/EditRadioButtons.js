import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
//import FormLabel from '@material-ui/core/FormLabel';

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
    value: 'Grid settings',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

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
              classes={{
                label: classes.label,
              }}
            />
            <FormControlLabel
              value="Work place settings"
              control={<Radio />}
              label="Work place settings"
              classes={{
                label: classes.label,
              }}
            />
            <FormControlLabel
              value="Employee location settings"
              control={<Radio />}
              label="Employee location settings"
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
};

export default withStyles(styles)(RadioButtonsGroup);
