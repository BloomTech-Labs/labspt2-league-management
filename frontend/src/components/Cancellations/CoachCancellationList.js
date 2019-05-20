import React, { Component } from 'react';
import { AppContext } from '../Context/AppContext';
import CoachCancellationItem from './CoachCancellationItem';
import './cancellations.css';

class CoachCancellationList extends Component {
  state = {
    games: []
  };

  componentDidMount() {
    const tid = this.context.state.teams[this.props.index].id;
    if (this.context.state.schedule_by_team.find(x => x.team_id === tid)) {
      const games = this.context.state.schedule_by_team.find(
        x => x.team_id === tid
      ).games;
      this.setState({
        games
      });
    }
  }

  render() {
    return (
      <>
        <div>
          <p className="page-header">Upcoming Games</p>
          <div className="games">
            {this.state.games.map(game => {
              if (
                !game.pending_cancelled &&
                !game.cancelled &&
                new Date(game.start_time) > new Date()
              ) {
                return (
                  <CoachCancellationItem
                    classname="available-games"
                    game={game}
                    index={this.props.index}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className="coach-cancellations">
          <div className="pending-cancellation-list">
            <p className="column-header">Pending Cancellation Requests</p>
            <div className="pending-cancellation-requests">
              {this.state.games.map(game => {
                if (game.pending_cancelled && game.cancelled) {
                  return (
                    <CoachCancellationItem
                      classname="pending-request"
                      game={game}
                      index={this.props.index}
                    />
                  );
                }
              })}
            </div>
          </div>
          <div className="approved-cancellation-list">
            <p className="column-header">Approved Cancellation Requests</p>
            <div className="approved-cancellation-requests">
              {this.state.games.map(game => {
                if (!game.pending_cancelled && game.cancelled) {
                  return (
                    <CoachCancellationItem
                      classname="approved-request"
                      game={game}
                      index={this.props.index}
                    />
                  );
                }
              })}
            </div>
          </div>
          <div className="denied-cancellation-list">
            <p className="column-header">Denied Cancellation Requests</p>
            <div className="denied-cancellation-requests">
              {this.state.games.map(game => {
                if (game.pending_cancelled && !game.cancelled) {
                  return (
                    <CoachCancellationItem
                      classname="denied-request"
                      game={game}
                      index={this.props.index}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

CoachCancellationList.contextType = AppContext;

export default CoachCancellationList;
