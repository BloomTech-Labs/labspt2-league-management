import React from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import { AppContext } from '../Context/AppContext';

// const styles = theme => ({});

class AdminCancellationItem extends React.Component {
  clickAcceptHandler = e => {
    e.preventDefault();
    console.log('clickAcceptHandler()');
    this.context.updateCancellationRequest(
      this.props.cancellation,
      true,
      this.props.lid,
      () => {
        console.log('clickAcceptHandler(): callback');
      }
    );
  };

  clickDenyHandler = e => {
    e.preventDefault();
    console.log('clickDenyHandler()');
    this.context.updateCancellationRequest(
      this.props.cancellation,
      false,
      this.props.lid,
      () => {
        console.log('clickDenyHandler(): callback');
      }
    );
  };

  render() {
    const { cancellation, classes, classname } = this.props;
    return (
      <div className={classname}>
        <p className="cancellation-title">
          {cancellation.away_team_name} vs. {cancellation.home_team_name}
        </p>
        <p className="cancellation-time">
          {cancellation.start_time} - {cancellation.end_time}
        </p>
        <div className="btns">
          {!cancellation.acknowledged ? (
            <div
              className="cancellation-approve-btn"
              onClick={this.clickAcceptHandler}
            >
              Accept
            </div>
          ) : null}
          {!cancellation.acknowledged ? (
            <div
              className="cancellation-deny-btn"
              onClick={this.clickDenyHandler}
            >
              Deny
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

AdminCancellationItem.propTypes = {
  classes: PropTypes.object.isRequired
};

AdminCancellationItem.contextType = AppContext;

// export default withStyles(styles)(AdminCancellationItem);
export default AdminCancellationItem;
