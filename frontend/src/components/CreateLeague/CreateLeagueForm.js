import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

import BasicCheckout from '../Stripe/BasicCheckout';
import PremiumCheckout from '../Stripe/PremiumCheckout';

const styles = {
  container: {
    width: '90%',
    margin: '0 auto'
  },
  button: {
    width: '100%',
    // border: '1px solid #eee',
    backgroundColor: '#1565c0',
    marginBottom: 8,
    color: 'white',
    '&:hover': {
      color: '#333',
      boxShadow: '1px 1px 2px #1565c0'
    }
  }
};

class CreateLeagueForm extends React.Component {
  state = {
    open: false,
    leagueName: ''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, leagueName: '' });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    const { classes, leagueType } = this.props;
    const price =
      leagueType === 'basic' ? 5 : leagueType === 'premium' ? 15 : null;
    return (
      <div className={classes.container}>
        <Button
          className={classes.button}
          disabled={leagueType !== 'basic'}
          style={leagueType !== 'basic' ? { color: '#ccc' } : null}
          onClick={this.handleClickOpen}
        >
          {leagueType === 'basic'
            ? `Select for $${price}/mo`
            : 'Currently Unavailable'}
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create League</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter the name of the league. Then click the "Create
              League" to enter your billing information
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              name="leagueName"
              value={this.state.leagueName}
              onChange={this.handleChange}
              label="League Name"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            {this.props.leagueType === 'basic' ? (
              <BasicCheckout
                leagueName={this.state.leagueName}
                close={this.handleClose}
              />
            ) : (
              <PremiumCheckout
                leagueName={this.state.leagueName}
                close={this.handleClose}
              />
            )}

            {/* <Button onClick={this.handleClose} color="primary">
              Create League
            </Button> */}
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(CreateLeagueForm);
