import React, {useRef, useEffect} from "react";


export default function Paypal(cart){
    const paypal = useRef();



    useEffect(() => {

        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Cheesecake Order",
                            amount: {
                                value: 50.00,
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