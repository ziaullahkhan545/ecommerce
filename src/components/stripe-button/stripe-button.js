import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeButton({ price }) {
    const stripePrice = price * 100;
    const pubKey = 'pk_test_51LaCiPSCVQErrS31clZIXqp7AXnaW8eBfJe8NdLHg5a5Io6otgZAeUSVb7zlF5ykeCQT0c4p7MfuvSEGba7Uk6g100O7iSpJtm';
    const onToken = (token) => {
        console.log(token);
        alert('Payment has been done successfully');
    }
    return (
        <>
            <StripeCheckout 
                label="Pay Now"
                name="eCommerece APP"
                shippingAddress
                billingAddress
                image=''
                description={`your total price is $${price}`}
                token={onToken}
                amount={stripePrice}
                panelLabel="Pay Now"
                stripeKey={pubKey}
            />
        </>
    )
}

export default StripeButton;
