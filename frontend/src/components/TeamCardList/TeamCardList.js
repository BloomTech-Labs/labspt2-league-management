import React from 'react';
import Grid from '@material-ui/core/Grid';

import axios from 'axios';
import TeamCard from './TeamCard.js';
import NewTeamCard from './NewTeamCard.js';


class TeamCardList extends React.Component {
  state = {};

  componentDidMount() {
    // Need to add pull route 
    // axios.get() data from Admin User Login - League Id - Team Ids in league
  }

  render() {

    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={16}>
            {/* //       {this.props.LeagueTeams.map(team => ( */}
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
            <Grid item>
              <NewTeamCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default (TeamCardList);
