import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
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
    allowUpdate: false
  };

  endpoint =
    process.env.NODE_ENV === 'production'
      ? 'https://league-management.herokuapp.com/settings'
      : 'http://localhost:4000/settings';

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

    const { username, email, first_name, last_name, phone } = this.state;
    const body = { username, email, first_name, last_name, phone };

    axios.put(this.endpoint, body, options)
      .then(res => {
        // put the token in local storage and sign in again
        localStorage.setItem('jwt', res.data.token);
        // this.props.signin();

        this.setState({ allowUpdate: false });
        this.getData();
      })
      .catch(err => {
        console.log('err from Submit handler in User Settings', err)
      })
  };

  getData() {
    const token = localStorage.getItem('jwt') || this.props.context.signOut();
    const options = {
      headers: {
        authorization: token
      }
    };
    const endpoint =
      process.env.NODE_ENV === 'production'
        ? 'https://league-management.herokuapp.com/settings'
        : 'http://localhost:4000/settings';

    axios
      .get(this.endpoint, options)
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
            <Navbar context={context} />
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
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

UserSettings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserSettings);
