import React, { Component } from 'react';
import { AppContext } from '../Context/AppContext';
import CoachCancellationItem from './CoachCancellationItem';

class CoachCancellationList extends Component {
    state = {
      games: []
    };
  
    componentDidMount() {
      const tid = this.context.state.teams[this.props.index].id;
      if(this.context.state.schedule_by_team.find(x => x.team_id === tid)) {
        const games = this.context.state.schedule_by_team.find(x => x.team_id === tid).games
        this.setState({ 
          games
        })
      }
    }

    render() {
        return (
            <div>
            {this.state.games.map(game => (
                  <CoachCancellationItem
                    game={game}
                    index={this.props.index}
                    />
              ))}
            </div>
        )
    }
}

CoachCancellationList.contextType = AppContext;

export default CoachCancellationList;