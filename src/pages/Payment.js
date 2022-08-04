import {useState} from "react";
import PaymentSuccess from "../components/PaymentSuccess";
import ErrorPage from "../components/Error";
import CancelledPage from "../components/CancelledPayment";
import Paypal from "../components/Paypal";

export default function PaymentPage(props){

    return(
        <div>
            <Paypal total={props.total} />
        </div>
    )
}