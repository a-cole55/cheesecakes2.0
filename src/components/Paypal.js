import React, {useRef, useEffect} from "react";
import ReactDOM from "react-dom";


// const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function Paypal(){
    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Cheesecake",
                            amount: {
                                currency_code: "USD",
                                value: 50.0,
                            },
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order)
            },
            onError: (err) => {
                console.log(err)
            }
        })
        .render(paypal.current);
    }, []);
    return (
        <div ref={paypal}></div>
    )
}