import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { AppContext } from '../Context/AppContext';

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
      // { name: 'editSchedule', text: 'Edit Schedule' },
      { name: 'cancellationRequests', text: 'Cancellation Requests' }
    ];
    // const leagueName =
    return (
      <>
        <div
          style={{
            // border: '1px solid red',
            margin: '0px 0px -10px 0px',
            textAlign: 'center',
            padding: '15px',
            color: '#fff',
            backgroundColor: '#333',
            fontSize: '1.3rem'
          }}
        >
          {localStorage.getItem('leagueName')}
        </div>
        <List onClick={this.props.handleClose}>
          {/* <ListItem>
            <ListItemText primary="League Name" />
          </ListItem> */}
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
      </>
    );
  }
}

AdminDrawer.contextType = AppContext;

export default AdminDrawer;
