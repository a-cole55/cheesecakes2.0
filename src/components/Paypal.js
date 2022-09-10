import React, {useRef, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
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
    const venmo = useRef();
    let navigate = useNavigate();



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
                navigate("/success");
            },
            onError: (err) => {
                console.log(err);
                navigate("*");
            }
        })
        .render(paypal.current);
    }, [props, orderArr]);
    return (
        <div>
            <div ref={paypal}></div>
            {/* <div id="paypal-button-container">
                window.paypal.Buttons().render('#paypal-button-container')
            </div> */}
        </div>

    )
}