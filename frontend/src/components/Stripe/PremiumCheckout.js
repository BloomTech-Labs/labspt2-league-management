import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

class PremiumCheckout extends Component {
  onToken = token => {
    console.log('basic token', token);
    // const endpoint =
    //   process.env.NODE_ENV === 'production'
    //     ? 'https://league-management.herokuapp.com/stripe/billing'
    //     : 'http://localhost:4000/stripe/billing';

    // axios
    //   .post(endpoint, token)
    //   .then(res => {
    //     console.log(res.data);
    //     // axios.post to create the new league {this.props.leagueName}
    //     this.props.close();
    //   })
    //   .catch(err => {
    //     console.log('Error in axios call to backend', err);
    //   });
  };

  render() {
    return (
      <StripeCheckout
        stripeKey="pk_test_VcEhOLfFL76sBbdyEX8npTmN"
        // billingAddress
        description="Premium League"
        locale="auto"
        token={this.onToken}
        label="Create League"
        panelLabel="subscribe for $15/mo"
      />
    );
  }
}

export default PremiumCheckout;
