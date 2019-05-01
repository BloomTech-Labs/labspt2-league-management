import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import Navbar from '../Dashboards/Navbar';
import { AppContext } from '../Context/AppContext';

const styles = theme => ({
  container: {
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#efefef',
    width: '100%',
    // minWidth: 400,
    maxWidth: 640,
    margin: '65px auto 0 auto',
    padding: '40px 20px 100px 20px',
    minHeight: 'calc(100vh - 65px)'
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
    flexWrap: 'wrap',
    width: '70%',
    marginTop: 30
  },
  button: {
    height: 44,
    margin: '0 1% 15px 1%',
    minWidth: 175,
    border: '1px solid gray'
  },
  dialogMessage: {
    color: 'red'
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
      placeholderChar={'#'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
};

class UserSettings extends React.Component {
  state = {
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    phone: '',
    password: '',
    allowUpdate: false,
    open: false,
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ 
      open: false, 
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleButtonClick = () => {
    this.setState({ allowUpdate: true });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem('jwt');
    const options = {
      headers: {
        authorization: token
      }
    };

    const endpoint = '/settings';

    const { username, email, first_name, last_name, phone } = this.state;
    const body = { username, email, first_name, last_name, phone };

    axios
      .put(endpoint, body, options)
      .then(res => {
        // put the token in local storage and sign in again
        localStorage.setItem('jwt', res.data.token);
        // this.props.signin();

        this.setState({ allowUpdate: false });
        this.getData();
      })
      .catch(err => {
        console.log('err from Submit handler in User Settings', err);
      });
  };

  handleSubmitDialog = e => {
    e.preventDefault();
    const token = localStorage.getItem('jwt');
    const options = {
      headers: {
        authorization: token
      }
    };

    const endpoint = '/settings/password';

    const { oldPassword, newPassword, confirmPassword } = this.state;
    const body = { oldPassword, newPassword, confirmPassword };

    axios
      .put(endpoint, body, options)
      .then(res => {

      })
      .catch(err => {
        console.log('Error from submit handler in Change Password', err);
      });

  }

  getData() {
    const token = localStorage.getItem('jwt') || this.context.signOut();
    const options = {
      headers: {
        authorization: token
      }
    };

    const endpoint = '/settings';

    axios
      .get(endpoint, options)
      .then(res => {
        const { username, email, first_name, last_name, phone } = res.data;
        this.setState({ username, email, first_name, last_name, phone });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { classes } = this.props;
    const { phone } = this.state;

    return (
      <AppContext.Consumer>
        {context => (
          <div style={{ backgroundColor: '#999' }}>
            <Navbar context={context} loggedIn={true} />
            <form
              className={classes.container}
              noValidate
              autoComplete="off"
              onSubmit={this.handleSubmit}
            >
              <h1
                style={{
                  width: '100%',
                  textAlign: 'center',
                  margin: '0 0 60px 0'
                }}
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

              <TextField
                required
                id="standard-firstName"
                label="First Name"
                className={classes.textField}
                value={this.state.first_name}
                onChange={this.handleChange('first_name')}
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
                value={this.state.last_name}
                onChange={this.handleChange('last_name')}
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
                <Button
                  className={classes.button}
                  onClick={this.handleButtonClick}
                >
                  Update Information
                </Button>
                <Button
                  className={classNames(classes.button, classes.submitBtn)}
                  type="submit"
                >
                  Submit Updates
                </Button>
              </div>
              <div className={classes.buttons}>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                  Change Password
                </Button>
              </div>
            </form>
            <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Change Password</DialogTitle>
          <DialogContent>
            <DialogContentText className={classes.dialogMessage}>
              Errors will go here
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="oldPassword"
              label="Old Password"
              type="password"
              value={this.state.oldPassword}
              onChange={this.handleChange('oldPassword')}
              fullWidth
            />
            <TextField
              margin="dense"
              id="newPassword"
              label="New Password"
              type="password"
              value={this.state.newPassword}
              onChange={this.handleChange('newPassword')}
              fullWidth
            />
            <TextField
              margin="dense"
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              value={this.state.confirmPassword}
              onChange={this.handleChange('confirmPassword')}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmitDialog} color="primary">
              Change
            </Button>
          </DialogActions>
        </Dialog>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

UserSettings.contextType = AppContext;

UserSettings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserSettings);
