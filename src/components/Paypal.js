import React, {useRef, useEffect} from "react";


export default function Paypal(props){
    console.log(props.cart);
    let orderArr = props.cart.map((cartItem) => {
        return ` ${cartItem.name}: ${cartItem.quantity}`
    });
    // console.log(orderArr);                                          )
    const paypal = useRef();



    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [{
                            description: `${orderArr}`,
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
    }, [props, orderArr]);
    return (
        <div ref={paypal}></div>
    )
}