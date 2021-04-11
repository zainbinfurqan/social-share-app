import React from 'react';
import ReactDOM from "react-dom";
import PayPalButton from '../../Components/PaypalButton'


function Payment(props) {
    return (
        <>
            <PayPalButton />
        </>
        // PayPalButton = window.paypal.Buttons.driver("react", {
        //     React,
        //     ReactDOM
        // })
    );
}

export default Payment;