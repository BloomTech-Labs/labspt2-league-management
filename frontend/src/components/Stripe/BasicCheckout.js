import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

class BasicCheckout extends Component {
  onToken = token => {
    const league = {
      name: '',
      admin_user_id: '',
      league_type_id: '',
      teams_game_count: 0,
      game_length: null,
      start_day: null,
      allow_monday: null,
      allow_tuesday: null,
      allow_wednesday: null,
      allow_thursday: null,
      allow_friday: null,
      allow_saturday: null,
      allow_sunday: null,
      monday_start_time: null,
      monday_end_time: null,
      tuesday_start_time: null,
      tuesday_end_time: null,
      wednesday_start_time: null,
      wednesday_end_time: null,
      thursday_start_time: null,
      thursday_end_time: null,
      friday_start_time: null,
      friday_end_time: null,
      saturday_start_time: null,
      saturday_end_time: null,
      sunday_start_time: null,
      sunday_end_time: null
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
        ? 'https://league-management.herokuapp.com/stripe/billing'
        : 'http://localhost:4000/stripe/billing';

    axios
      .post(endpoint, token)
      .then(res => {
        console.log(res.data);
        // axios.post to create the new league {this.props.leagueName}
        axios
          .post(
            'http://localhost:4000/leagues',
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
            console.log(err);
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
