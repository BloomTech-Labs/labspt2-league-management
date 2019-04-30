import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppContext } from '../Context/AppContext';

const styles = theme => ({});

class CoachCancellationItem extends React.Component {
  clickHandler = e => {
    e.preventDefault();
    this.context.createCancellationRequest(this.props.game, () => {
      console.log('callback');
    });
  };

  render() {
    const { game, classname } = this.props;
    const year = String(new Date(game.start_time).getYear());
    return (
      <div className={classname}>
        {/* <div className="cancellation-title"> */}
        <p className="cancellation-title">
          {game.away_team_name} vs. {game.home_team_name}
        </p>
        <p className="cancellation-time">
          {new Date(game.start_time).getMonth() + 1}/
          {new Date(game.start_time).getDate()}/{'20' + year.substr(1, 2)}
        </p>
        {!game.pending_cancelled && !game.cancelled ? (
          <div className="request-btn" onClick={this.clickHandler}>
            Request Cancellation
          </div>
        ) : null}
        {/* </div> */}
      </div>
    );
  }
}

CoachCancellationItem.propTypes = {
  classes: PropTypes.object.isRequired
};

CoachCancellationItem.contextType = AppContext;

export default withStyles(styles)(CoachCancellationItem);
