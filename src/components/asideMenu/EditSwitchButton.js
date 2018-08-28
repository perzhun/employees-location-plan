import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { EnableEditing } from '../../actions/menu';

const styles = () => ({
  colorSwitchBase: {
    color: '#D7ECCA',
    '&$colorChecked': {
      color: '#7EFF33',
      '& + $colorBar': {
        backgroundColor: '#7EFF33',
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

class CustomizedSwitches extends React.Component {
  state = {
    checkedA: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    this.props.enableEditing(event.target.checked);
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
        }}
      />
    );
  }
}

CustomizedSwitches.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    enableEditing: enabled => {
      dispatch(EnableEditing(enabled));
    },
  };
};

export default compose(
  withStyles(styles, { name: 'CustomizedSwitches' }),
  connect(
    mapDispatchToProps,
    null,
  ),
)(CustomizedSwitches);
