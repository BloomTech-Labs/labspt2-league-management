import React from 'react';
import Grid from '@material-ui/core/Grid';
import TeamCard from './TeamCard.js';
import { AppContext } from '../Context/AppContext';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  content: {
    fontFamily: 'Montserrat',
    // backgroundColor: '#eee',
    height: 'auto',
    minHeight: 'calc(100vh - 63px)',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '95%'
  }
});

class TeamCardList extends React.Component {
  state = {
    teams: []
  };

  componentDidMount() {
    const lid = this.context.state.leagues[this.props.index].id;
    if (this.context.state.teams_by_league.find(x => x.league_id === lid)) {
      const teams = this.context.state.teams_by_league.find(
        x => x.league_id === lid
      ).teams;
      this.setState({
        teams
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.content}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={24}>
              {this.state.teams.map(team => (
                <Grid key={team.id} item>
                  <TeamCard
                    id={team.id}
                    name={team.name}
                    coach_name={team.coach_name}
                    coach_email={team.coach_email}
                    coach_phone={team.coach_phone}
                    wins={team.wins}
                    losses={team.losses}
                    ties={team.ties}
                    index={this.props.index}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

TeamCardList.contextType = AppContext;

export default withStyles(styles, { withTheme: true })(TeamCardList);
