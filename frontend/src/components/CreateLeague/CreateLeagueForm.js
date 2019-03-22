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

const styles = {
  button: {
    backgroundColor: '#42b6ff'
  }
};

class FormDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Select for $5/mo
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
              id="name"
              label="League Name"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            {this.props.leagueType === 'basic' ? <BasicCheckout /> : null}

            {/* <Button onClick={this.handleClose} color="primary">
              Create League
            </Button> */}
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(FormDialog);
