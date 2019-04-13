import React from 'react';
import Grid from '@material-ui/core/Grid';

import TeamCard from './TeamCard.js';
import { AppContext } from '../Context/AppContext';

class TeamCardList extends React.Component {
  state = {
    // leagues: this.props.context.state.leagues,
    // leagues: this.context.state.leagues
    teams: []
  };

  componentDidMount() {
    const lid = this.context.state.leagues[this.props.index].id;
    if(this.context.state.teams_by_league.find(x => x.league_id === lid)) {
      const teams = this.context.state.teams_by_league.find(x => x.league_id === lid).teams
      this.setState({ 
        teams
      })
      console.log('teams_by_league in TeamCardList', teams);
    }
  }

  render() {
    // console.log('context check in TeamCardList', this.context.state.leagues);
    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={16}>
            {/* {[0, 1, 2, 3, 4, 5, 6, 7].map(team => ( */}
              {this.state.teams.map(team => (

              <Grid key={team.id} item>
                <TeamCard
                  id={team.id}
                  name={team.name}
                  coach_email={team.coach_email}
                  coach_phone={team.coach_phone}
                  wins={team.wins}
                  losses={team.losses}
                  ties={team.ties}
                  />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

TeamCardList.contextType = AppContext;

export default TeamCardList;
