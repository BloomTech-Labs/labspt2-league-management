import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#efefef',
    width: '100%',
    // minWidth: 400,
    maxWidth: 640,
    margin: '0 auto',
    padding: '40px 20px 100px 20px'
  },
  formControl: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    margin: '20px 0',
    width: 200
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    margin: '20px 0'
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '70%',
    marginTop: 30
  },
  button: {
    height: 44,
    border: '1px solid gray'
  }
});

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        '(',
        /[1-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
};

class UserSettings extends React.Component {
  state = {
    username: 'test',
    email: 'test@test.com',
    firstName: 'Test',
    lastName: 'User',
    phone: '(555)123-1234',
    password: '',
    allowUpdate: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleButtonClick = () => {
    this.setState({ allowUpdate: true });
  };

  handleSubmit = () => {
    this.setState({ allowUpdate: false });
  };

  render() {
    const { classes } = this.props;
    const { phone } = this.state;

    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <h1
          style={{ width: '100%', textAlign: 'center', margin: '0 0 60px 0' }}
        >
          User Settings
        </h1>
        <TextField
          required
          id="standard-name"
          label="Username"
          className={classes.textField}
          value={this.state.username}
          onChange={this.handleChange('username')}
          margin="normal"
          variant="outlined"
          InputProps={{
            readOnly: !this.state.allowUpdate
          }}
        />

        <TextField
          required
          id="standard-email"
          label="Email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
          variant="outlined"
          InputProps={{
            readOnly: !this.state.allowUpdate
          }}
        />

        {/* <TextField
          id="standard-email"
          label="Email"
          className={classes.textField}
          value={this.state.password}
          onChange={this.handleChange('password')}
          margin="normal"
          InputProps={{
            readOnly: this.state.allowUpdate
          }}
        /> */}

        <TextField
          required
          id="standard-firstName"
          label="First Name"
          className={classes.textField}
          value={this.state.firstName}
          onChange={this.handleChange('firstName')}
          margin="normal"
          variant="outlined"
          InputProps={{
            readOnly: !this.state.allowUpdate
          }}
        />

        <TextField
          required
          id="standard-lastName"
          label="Last Name"
          className={classes.textField}
          value={this.state.lastName}
          onChange={this.handleChange('lastName')}
          margin="normal"
          variant="outlined"
          InputProps={{
            readOnly: !this.state.allowUpdate
          }}
        />

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="formatted-text-mask-input">
            Phone Number
          </InputLabel>
          <Input
            value={phone}
            onChange={this.handleChange('phone')}
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
            readOnly={!this.state.allowUpdate}
          />
        </FormControl>
        <div className={classes.buttons}>
          <Button className={classes.button} onClick={this.handleButtonClick}>
            Allow Updates
          </Button>
          <Button
            className={classNames(classes.button, classes.submitBtn)}
            type="submit"
          >
            Submit Updates
          </Button>
        </div>
      </form>
    );
  }
}

UserSettings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserSettings);
