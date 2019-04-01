import React, { Component } from 'react';
import { withRouter } from "react-router";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

class BasicCheckout extends Component {
  onToken = token => {
    const league = {
      name: null,
      admin_user_id: null
    };
    const jwt = localStorage.getItem('jwt') || this.props.context.signOut();
    const options = {
      headers: {
        authorization: jwt
      }
    };
    // console.log('basic token', token);
    const endpoint =
      process.env.NODE_ENV === 'production'
        ? 'https://league-management.herokuapp.com'
        : 'http://localhost:4000';

    axios
      .post(`${endpoint}/stripe/billing`, token)
      .then(res => {
        console.log(res.data);
        console.log(league);
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
            this.props.history.push('/league/setup');
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

export default withRouter(BasicCheckout);
