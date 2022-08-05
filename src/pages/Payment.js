import {useState} from "react";
import PaymentSuccess from "../components/PaymentSuccess";
import ErrorPage from "../components/Error";
import CancelledPage from "../components/CancelledPayment";
import Paypal from "../components/Paypal";

export default function PaymentPage(props){

    return(
        <div id="paymentPage">
            <h2>Submit Payment</h2>
            <Paypal total={props.total} />
        </div>
    )
}