import React, { Component } from 'react';	
import StripeCheckout from 'react-stripe-checkout';	
import axios from 'axios';	

 import ChooseLeague from '../CreateLeague/ChooseLeague';	

 class Billing extends Component {	
  onTokenBasic = token => {	
    console.log('basic token', token);	
    const endpoint =	
      process.env.NODE_ENV === 'production'	
        ? 'https://league-management.herokuapp.com/stripe/billing'	
        : 'http://localhost:4000/stripe/billing';	

     axios	
      .post(endpoint, token)	
      .then(res => {	
        console.log(res.data);	
      })	
      .catch(err => {	
        console.log('Error in axios call to backend', err);	
      });	
  };	

   onTokenPremium = token => {	
    console.log('premium token', token);	
  };	

   render() {	
    return (	
      <>	
        <ChooseLeague />	
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