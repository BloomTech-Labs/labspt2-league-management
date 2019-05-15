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
import { withSnackbar } from 'notistack';
import Navbar from '../Dashboards/Navbar';
import { AppContext } from '../Context/AppContext';

const styles = theme => ({
  container: {
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    // minWidth: 400,
    maxWidth: 640,
    margin: '65px auto 0 auto',
    padding: '40px 20px 100px 20px',
    minHeight: 'calc(100vh - 65px)',
    fontFamily: 'Montserrat'
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
    backgroundColor: '#333',
    // border: '1px solid gray',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#777'
    }
  },
  submitBtn: {
    height: 44,
    margin: '0 1% 15px 1%',
    minWidth: 175,
    backgroundColor: '#24D830',
    color: '#333',
    '&:hover': {
      backgroundColor: '#32C156'
    }
  },
  pwButton: {
    height: 44,
    margin: '0 1% 15px 1%',
    minWidth: 175,
    backgroundColor: '#1565c0',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#0e4c93'
    }
    // border: '1px solid gray'
  },
  message: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '20px',
    color: 'red'
  },
  dialogMessage: {
    color: 'red',
    fontFamily: 'Montserrat'
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
  constructor(props) {
    super(props);

    this.oldPasswordRef = React.createRef();
    this.newPasswordRef = React.createRef();
    this.confirmPasswordRef = React.createRef();
  }

  state = {
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    phone: '',
    allowUpdate: false,
    message: '',
    focus: 1,
    error: 0,
    open: false,
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    dialogMessage: '',
    dialogFocus: 1,
    dialogError: 0
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleEntered = () => {};

  handleClose = () => {
    this.setState({
      open: false,
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      dialogMessage: '',
      dialogFocus: 1,
      dialogError: 0
    });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
      error: 0,
      message: '',
      dialogError: 0,
      dialogMessage: ''
    });
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

    if (!username) {
      this.setState({
        message: 'Username cannot be empty',
        focus: 1,
        error: 1
      });
    } else if (!email) {
      this.setState({
        message: 'Email cannot be empty',
        focus: 2,
        error: 2
      });
    } else if (!first_name) {
      this.setState({
        message: 'First Name cannot be empty',
        focus: 3,
        error: 3
      });
    } else if (!last_name) {
      this.setState({
        message: 'Last Name cannot be empty',
        focus: 4,
        error: 4
      });
    } else {
      axios
        .put(endpoint, body, options)
        .then(res => {
          // put the token in local storage and sign in again
          localStorage.setItem('jwt', res.data.token);
          // this.props.signin();

          this.setState({ allowUpdate: false });
          this.getData();
          this.props.enqueueSnackbar('Information updated', {
            variant: 'success'
          });
        })
        .catch(err => {
          this.props.enqueueSnackbar('Unable to update information', {
            variant: 'error'
          });
        });
    }
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

    if (!oldPassword) {
      this.setState({
        dialogMessage: 'Old password cannot be empty',
        dialogFocus: 1,
        dialogError: 1
      });
    } else if (!newPassword) {
      this.setState({
        dialogMessage: 'New password cannot be empty',
        dialogFocus: 2,
        dialogError: 2
      });
    } else if (!confirmPassword) {
      this.setState({
        dialogMessage: 'Confirm password cannot be empty',
        dialogFocus: 3,
        dialogError: 3
      });
    } else {
      if (newPassword === confirmPassword) {
        axios
          .post(endpoint, body, options)
          .then(res => {
            this.handleClose();
            this.props.enqueueSnackbar(res.data.message, {
              variant: 'success'
            });
          })
          .catch(err => {
            this.setState({
              dialogMessage: 'Old password is invalid'
            });
          });
      } else {
        this.setState({
          dialogMessage: 'New password and confirm password do not match',
          dialogFocus: 2,
          dialogError: 4
        });
      }
    }
  };

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
      .catch(err => {
        this.props.enqueueSnackbar('Unable to fetch user settings', {
          variant: 'error'
        });
      });
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    if (this.state.dialogFocus === 1) {
      // document.getElementById('oldPassword').focus();
    } else if (this.state.dialogFocus === 2) {
      // document.getElementById('newPassword').focus();
    } else if (this.state.dialogFocus === 3) {
      // document.getElementById('confirmPassword').focus();
    }
  }

  render() {
    const { classes } = this.props;
    const { phone, dialogFocus } = this.state;

    return (
      <AppContext.Consumer>
        {context => (
          <div
            style={{
              // background: 'rgb(21, 101, 192)',
              // background:
              //   'linear-gradient(315deg, rgba(21,101,192,1) 0%, rgba(255,255,255,1) 100%)'
              backgroundColor: '#eee'
            }}
          >
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
                  margin: '0 0 60px 0',
                  fontWeight: '200',
                  color: '#444'
                }}
              >
                User Settings
              </h1>
              <p className={classes.message}>{this.state.message}</p>
              <TextField
                required
                error={this.state.error === 1 ? true : false}
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
                error={this.state.error === 2 ? true : false}
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
                error={this.state.error === 3 ? true : false}
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
                error={this.state.error === 4 ? true : false}
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
                  style={this.state.allowUpdate ? { display: 'none' } : null}
                >
                  Update Information
                </Button>
                <Button
                  className={classes.submitBtn}
                  type="submit"
                  style={!this.state.allowUpdate ? { display: 'none' } : null}
                >
                  Submit Updates
                </Button>
              </div>
              <div className={classes.buttons} style={{ marginTop: 0 }}>
                <Button
                  className={classes.pwButton}
                  // variant="outlined"
                  // color="primary"
                  onClick={this.handleClickOpen}
                >
                  Change Password
                </Button>
              </div>
            </form>
            <Dialog
              open={this.state.open}
              onEntered={this.handleEntered}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Change Password</DialogTitle>
              <DialogContent>
                <DialogContentText className={classes.dialogMessage}>
                  {this.state.dialogMessage}
                </DialogContentText>
                <TextField
                  autoFocus
                  error={this.state.dialogError === 1 ? true : false}
                  margin="dense"
                  id="oldPassword"
                  label="Old Password"
                  type="password"
                  value={this.state.oldPassword}
                  onChange={this.handleChange('oldPassword')}
                  inputProps={{ id: 'oldPassword' }}
                  ref={this.oldPasswordRef}
                  fullWidth
                />
                <TextField
                  error={
                    this.state.dialogError === 2 || this.state.dialogError === 4
                      ? true
                      : false
                  }
                  margin="dense"
                  id="newPassword"
                  label="New Password"
                  type="password"
                  value={this.state.newPassword}
                  onChange={this.handleChange('newPassword')}
                  inputProps={{ id: 'newPassword' }}
                  ref={this.newPasswordRef}
                  fullWidth
                />
                <TextField
                  error={
                    this.state.dialogError === 3 || this.state.dialogError === 4
                      ? true
                      : false
                  }
                  margin="dense"
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange('confirmPassword')}
                  inputProps={{ id: 'confirmPassword' }}
                  ref={this.confirmPasswordRef}
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

export default withStyles(styles)(withSnackbar(UserSettings));
