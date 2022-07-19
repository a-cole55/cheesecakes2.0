import React, {useRef, useEffect} from "react";


export default function Paypal(cart,total){
    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err, cart, total) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: `Cheesecake Order: ${cart}`,
                            amount: {
                                currency_code: "USD",
                                value: cart.price,
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