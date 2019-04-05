import React from 'react';
import Grid from '@material-ui/core/Grid';
import TeamCard from './TeamCard.js';
// import NewTeamCard from './NewTeamCard.js';
import { AppContext } from '../Context/AppContext';
import LeagueSetupTeams from '../LeagueSetupTeams/LeagueSetupTeams';

class TeamCardList extends React.Component {
  state = {
    leagues: this.context.state.leagues
  };

  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={16}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map(team => (
              <Grid key={team} item>
                <TeamCard
                  team={team}
                  key={team.id}
                  id={team.id}
                  name={team.name}
                  email={team.coach_email}
                  phone={team.coach_phone_number}
                  wins={team.wins}
                  losses={team.losses}
                  ties={team.ties}
                />
              </Grid>
            ))}
            {/* <Grid item>
              <NewTeamCard />
            </Grid> */}
          </Grid>

          <Grid container justify="center" spacing={16}>
            {this.state.leagues.map(team => (
              // {this.state.leagues.leagueIndex(somethingLikeThis).teams.map(team => ();
              <Grid key={team} item>
                <TeamCard
                  team={team}
                  key={team.id}
                  id={team.id}
                  name={team.name}
                  email={team.coach_email}
                  phone={team.coach_phone_number}
                  wins={team.wins}
                  losses={team.losses}
                  ties={team.ties}
                />
              </Grid>
            ))}
            {/* <Grid item>
              <NewTeamCard />
            </Grid> */}
          </Grid>
          <LeagueSetupTeams />
        </Grid>
      </Grid>
    );
  }
}

TeamCardList.contextType = AppContext;

export default TeamCardList;
