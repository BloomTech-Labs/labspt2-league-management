import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { AppContext } from '../Context/AppContext';

const styles = theme => ({

});

class CoachCancellationItem extends React.Component {
  render() {
    console.log(this.props);
    console.log(this.state);
    const { game, classes } = this.props;

    return (
      <div>
        {game.away_team_name} vs. {game.home_team_name}
      </div>
    );
  }
}

CoachCancellationItem.propTypes = {
  classes: PropTypes.object.isRequired
};

CoachCancellationItem.contextType = AppContext;

export default withStyles(styles)(CoachCancellationItem);