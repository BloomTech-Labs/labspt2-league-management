import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

class BasicCheckout extends Component {
  onToken = token => {
    const league = {
      name: null,
      admin_user_id: null,
      league_type_id: 1
      //   teams_game_count: null,
      //   game_length: null,
      //   start_day: null,
      //   allow_monday: null,
      //   allow_tuesday: null,
      //   allow_wednesday: null,
      //   allow_thursday: null,
      //   allow_friday: null,
      //   allow_saturday: null,
      //   allow_sunday: null,
      //   monday_start_time: null,
      //   monday_end_time: null,
      //   tuesday_start_time: null,
      //   tuesday_end_time: null,
      //   wednesday_start_time: null,
      //   wednesday_end_time: null,
      //   thursday_start_time: null,
      //   thursday_end_time: null,
      //   friday_start_time: null,
      //   friday_end_time: null,
      //   saturday_start_time: null,
      //   saturday_end_time: null,
      //   sunday_start_time: null,
      //   sunday_end_time: null
    };
    const jwt = localStorage.getItem('jwt') || this.props.context.signOut();
    const options = {
      headers: {
        authorization: jwt
      }
    };
    console.log('basic token', token);
    const endpoint =
      process.env.NODE_ENV === 'production'
        ? 'https://league-management.herokuapp.com'
        : 'http://localhost:4000';

    axios
      .post(`${endpoint}/stripe/billing`, token)
      .then(res => {
        console.log(res.data);
        // axios.post to create the new league {this.props.leagueName}
        axios
          .post(
            `${endpoint}/leagues`,
            {
              ...league,
              name: this.props.leagueName
            },
            options
          )
          .then(res => {
            this.props.close();
            console.log(res);
          })
          .catch(err => {
            console.log('Error creating a new league', err);
          });
      })
      .catch(err => {
        console.log('Error in axios call to backend', err);
      });
  };

  render() {
    return (
      <StripeCheckout
        stripeKey="pk_test_VcEhOLfFL76sBbdyEX8npTmN"
        // billingAddress
        description="Basic League"
        locale="auto"
        token={this.onToken}
        label="Create League"
        panelLabel="subscribe for $5/mo"
      />
    );
  }
}

export default BasicCheckout;
