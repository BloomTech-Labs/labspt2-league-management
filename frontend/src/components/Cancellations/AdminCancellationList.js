import React, { Component } from 'react';
import { AppContext } from '../Context/AppContext';
import AdminCancellationItem from './AdminCancellationItem';

class AdminCancellationList extends Component {
    state = {
      lid: null,
      cancellations: []
    };
  
    componentDidMount() {
      const lid = this.context.state.leagues[this.props.index].id;
      if(this.context.state.cancellations_by_league.find(x => x.league_id === lid)) {
        const cancellations = this.context.state.cancellations_by_league.find(x => x.league_id === lid).cancellations
        this.setState({
          lid, 
          cancellations
        })
      }
    }

    render() {
        return (
            <div>
            {this.state.cancellations.map(cancellation => (
                  <AdminCancellationItem
                    cancellation={cancellation}
                    index={this.props.index}
                    lid={this.state.lid}
                    />
              ))}
            </div>
        )
    }
}

AdminCancellationList.contextType = AppContext;

export default AdminCancellationList;