import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppContext } from '../Context/AppContext';

const styles = theme => ({

});

class AdminCancellationItem extends React.Component {
  clickAcceptHandler = e => {
    e.preventDefault();
    console.log("clickAcceptHandler()");
    // this.context.createCancellationRequest(this.props.game, () => {
    //   console.log('callback');
    // });
  }

  clickDenyHandler = e => {
    e.preventDefault();
    console.log("clickDenyHandler()");
    // this.context.createCancellationRequest(this.props.game, () => {
    //   console.log('callback');
    // });
  }

  render() {
    const { cancellation, classes } = this.props;
    return (
      <div>
        {cancellation.away_team_name} vs. {cancellation.home_team_name}
        <button onClick={this.clickAcceptHandler}>Accept</button>
        <button onClick={this.clickDenyHandler}>Deny</button>
      </div>
    );
  }
}

AdminCancellationItem.propTypes = {
  classes: PropTypes.object.isRequired
};

AdminCancellationItem.contextType = AppContext;

export default withStyles(styles)(AdminCancellationItem);