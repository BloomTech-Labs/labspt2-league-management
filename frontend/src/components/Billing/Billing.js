import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const endpoint =
  process.env.NODE_ENV === 'production'
    ? 'https://league-management.herokuapp.com/api/stripe'
    : 'http://localhost:4000/api/stripe';

class Billing extends Component {
  onTokenBasic = token => {
    console.log('basic token', token);

    axios
      .post(this.endpoint, token)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. How this is done is up to you. Using
    // XHR, fetch, or a GraphQL mutation is typical.
  };

  onTokenPremium = token => {
    console.log('premium token', token);
  };

  render() {
    return (
      <>
        <StripeCheckout
          stripeKey="pk_test_VcEhOLfFL76sBbdyEX8npTmN"
          // billingAddress
          description="Basic League"
          locale="auto"
          token={this.onTokenBasic}
          label="Basic League - $5/mo"
          panelLabel="subscribe for $5/mo"
        />

        <StripeCheckout
          stripeKey="pk_test_VcEhOLfFL76sBbdyEX8npTmN"
          // billingAddress
          description="Premium League"
          locale="auto"
          token={this.onTokenPremium}
          label="Premium League - $15/mo"
          panelLabel="subscribe for $15/mo"
        />
      </>
    );
  }
}

export default Billing;
