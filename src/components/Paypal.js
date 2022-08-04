import React, {useRef, useEffect} from "react";
import PaymentSuccess from "./PaymentSuccess";
import { useContext } from "react";
import CartContext from "../components/CartContext";


export default function Paypal(props){
    const {total} = useContext(CartContext);
    const {cart} = useContext(CartContext);
    let orderArr = cart.map((cartItem) => {
        return ` ${cartItem.name}: ${cartItem.quantity}`
    });
    console.log(props.total)
    // console.log(total)
    // console.log(cart)
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
                console.log(order);
                <PaymentSuccess />
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