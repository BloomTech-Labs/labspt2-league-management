import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

class Billing extends Component {
  onTokenBasic = token => {
    console.log('basic token', token);

    // axios
    //   .post('', token)
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
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
          description="Basic League"
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
