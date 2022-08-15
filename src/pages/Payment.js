import "./Payment.css";
import {useState} from "react";
import PaymentSuccess from "../components/PaymentSuccess";
import ErrorPage from "../components/Error";
import CancelledPage from "../components/CancelledPayment";
import Paypal from "../components/Paypal";
import CheckoutForm from "../components/CheckoutForm"

export default function PaymentPage(props){

    return(
        <div id="paymentPage">
            <h2>Payment Info</h2>
            <div id="paymentInfo">
                <div id="checkoutForm">
                    <CheckoutForm id="form"/>
                </div>
                <div id="paymentOptions">
                    <Paypal total={props.total} />
                </div>
            </div>
        </div>
    )
}