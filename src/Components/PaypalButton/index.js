import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import scriptLoader from 'react-async-script-loader'

let PayPalButton_ = null;

function PayPalButton(props) {
    window.React = React;
    window.ReactDOM = ReactDOM;
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        if (props.isScriptLoaded) {
            if (props.isScriptLoadSucceed) {
                PayPalButton_ = window.paypal.Buttons.driver("react", {
                    React,
                    ReactDOM,

                },

                );
                setShowButton(true)
            }
        }
    }, [props.isScriptLoaded, props.isScriptLoadSucceed])


    function createOrder(data, actions) {
        console.log("createOrder", data)
        return actions.order.create({
            purchase_units: [
                {
                    description: +"Mercedes G-Wagon",
                    amount: {
                        currency_code: "USD",
                        value: .5
                    }
                }
            ]
        });
    };

    function onApprove(data, actions) {
        console.log("data", data)
        actions.order.capture().then(details => {
            const paymentData = {
                payerID: data.payerID,
                orderID: data.orderID
            };
            console.log("Payment Approved: ", data);
            // this.setState({ showButtons: false, paid: true });
        });
    }
    return (
        <div>
            {showButton && <PayPalButton_
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
            />}
        </div>
    );
}
const KEY = 'AQ9FVMtkZKvCdLl5S2Kywq3PM-1JjPSShyYz7zFqQsmk2eftbGMh2w9YfoAdn9CLpxSMdA9TAzWC2jKh'
const disableCard = 'mastercard,amex,visa,discover,jcb,elo,hiper'
const disableFunding = 'credit,bancontact,blik,eps,giropay,ideal,mercadopago,mybank,p24,sepa,sofort,venmo,card'

export default
    scriptLoader(`https://www.paypal.com/sdk/js?client-id=${KEY}&components=buttons&disable-funding=${disableFunding}`)(PayPalButton);
