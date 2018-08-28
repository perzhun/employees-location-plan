import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { adminAuth } from '../../actions/menu';

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

class AdminMode extends React.Component {
  state = {
    checkedA: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    this.props.adminAuth(event.target.checked);
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
};

const mapDispatchToProps = dispatch => {
  return {
    adminAuth: enabled => {
      dispatch(adminAuth(enabled));
    },
  };
};

export default compose(
  withStyles(styles, { name: 'AdminMode' }),
  connect(
    null,
    mapDispatchToProps,
  ),
)(AdminMode);
