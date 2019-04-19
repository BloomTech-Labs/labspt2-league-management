import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { AppContext } from '../Context/AppContext';

const styles = theme => ({

});

class CoachCancellationItem extends React.Component {
  clickHandler = e => {
    e.preventDefault();
    this.context.createCancellationRequest(this.props.game, () => {
      console.log('callback');
    });
  }

  render() {
    const { game, classes } = this.props;
    return (
      <div>
        {game.away_team_name} vs. {game.home_team_name}
        <button onClick={this.clickHandler}>Request Cancellation</button>
      </div>
    );
  }
}

CoachCancellationItem.propTypes = {
  classes: PropTypes.object.isRequired
};

CoachCancellationItem.contextType = AppContext;

export default withStyles(styles)(CoachCancellationItem);