import React, { Component } from 'react';
import { AppContext } from '../Context/AppContext';
import AdminCancellationItem from './AdminCancellationItem';
import './cancellations.css';

class AdminCancellationList extends Component {
  state = {
    lid: null,
    cancellations: []
  };

  componentDidMount() {
    const lid = this.context.state.leagues[this.props.index].id;
    if (
      this.context.state.cancellations_by_league.find(x => x.league_id === lid)
    ) {
      const cancellations = this.context.state.cancellations_by_league.find(
        x => x.league_id === lid
      ).cancellations;
      this.setState({
        lid,
        cancellations
      });
    }
  }

  render() {
    return (
      <div className="cancellations">
        <div className="cancellation-pending">
          <p className="column-header">Pending Requests</p>
          {this.state.cancellations.map(cancellation => {
            if (!cancellation.acknowledged) {
              return (
                <AdminCancellationItem
                  classname="pending"
                  cancellation={cancellation}
                  index={this.props.index}
                  lid={this.state.lid}
                />
              );
            }
          })}
        </div>
        <div className="cancellation-cancelled">
          <p className="column-header">Approved Requests</p>
          {this.state.cancellations.map(cancellation => {
            if (cancellation.acknowledged && cancellation.cancelled) {
              return (
                <AdminCancellationItem
                  classname="cancelled"
                  cancellation={cancellation}
                  index={this.props.index}
                  lid={this.state.lid}
                />
              );
            }
          })}
        </div>
        <div className="cancellation-denied">
          <p className="column-header">Denied Requests</p>
          {this.state.cancellations.map(cancellation => {
            if (cancellation.acknowledged && !cancellation.cancelled) {
              return (
                <AdminCancellationItem
                  classname="denied"
                  cancellation={cancellation}
                  index={this.props.index}
                  lid={this.state.lid}
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}

AdminCancellationList.contextType = AppContext;

export default AdminCancellationList;
