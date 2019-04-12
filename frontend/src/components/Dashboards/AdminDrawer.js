import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class AdminDrawer extends Component {
  state = {
    leagueSettings: true,
    teamList: false,
    calendar: false,
    editSchedule: false,
    cancellationRequests: false
  };

  selectButton = e => {
    e.preventDefault();
    this.setState({
      leagueSettings: false,
      teamList: false,
      calendar: false,
      editSchedule: false,
      cancellationRequests: false
    });
    this.setState({
      [e.currentTarget.id]: true
    });
    this.props.displayAdminContent(e);
  };

  render() {
    const selected = {
      backgroundColor: 'white'
    };
    const listItems = [
      { name: 'leagueSettings', text: 'League Details' },
      { name: 'teamList', text: 'Teams' },
      { name: 'calendar', text: 'Calendar' },
      { name: 'editSchedule', text: 'Edit Schedule' },
      { name: 'cancellationRequests', text: 'Cancellation Requests' }
    ];
    return (
      <List onClick={this.props.handleClose}>
        {listItems.map((item, index) => {
          const { name } = item;
          return (
            <>
              <ListItem
                button
                key={item.name}
                id={item.name}
                // onClick={this.props.displayAdminContent}
                onClick={this.selectButton}
                style={this.state[name] ? selected : null}
              >
                <ListItemText primary={item.text} />
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    );
  }
}

export default AdminDrawer;
