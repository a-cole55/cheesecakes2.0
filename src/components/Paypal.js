import React, {useRef, useEffect} from "react";


export default function Paypal(props){

    const paypal = useRef();



    useEffect((total) => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [{
                            description: `Cheesecake Order: ${props.cart}`,
                            amount: {
                                value: props.total
                            },
                        }]
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
    });
    return (
        <div ref={paypal}></div>
    )
}