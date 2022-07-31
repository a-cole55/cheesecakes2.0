import {Elements} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const PUBLIC_KEY = "pk_test_51LN4FBEZzh1G7KbTWOrHn3rbxzq0OJitcKIAojJX91cjyQmBUvixaLvmNwZ2DjWBw5q0OcCX5C4FVR2C5lHR9bch00moEd2W6R"


const stripeTestPromise = loadStripe(PUBLIC_KEY)
export default function StripeContainer(){
    return(
        <Elements stripe={stripeTestPromise}>
            <PaymentForm/>
        </Elements>
    )
}