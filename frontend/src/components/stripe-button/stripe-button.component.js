import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_Qo04GTMK04nhCJ0AUvB1k4qK00KkwNc7rW";

  const onToken = token => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Bone Throw Inc."
      billingAddress
      shippingAddress
      image="http://www.clker.com/cliparts/X/U/F/3/N/2/shopping-cart-logo.svg.med.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;