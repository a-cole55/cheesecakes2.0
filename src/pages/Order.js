import { Checkbox } from "@mui/material";
import {Link} from "react-router-dom";
import { useState } from "react";
import "./Order.css";

export default function Order(props){
    let totalQty = props.totalQty[0];
    // let setTotal = props.totalQty[1];
    let cart = props.cartTotal[0];
    // let setCart = props.cartTotal[1];
    const [checked, setChecked] = useState(false);
    let total = 0;
    let salesT = 0;
    let salesTax = 0;
    let subtotal = 0;

    function emptyCart(){
        return (
            <h2><Link to="/menu">Visit Here</Link> To Add Items to Your Shopping Bag</h2>
        )
    }

    function fullCart(cart){
        return (
            <div className="cartContent">
                <div className="cart">
                    <h3>View Cart</h3>
                    <div className="cartItems">
                        {cart.map((item) => {
                            subtotal = subtotal + item.itemTotal
                            salesT = subtotal * .0825
                            salesTax = +(salesT.toFixed(2))
                            total = (subtotal + salesTax)
                            return (
                            <div key={item.name} className="viewItems">
                                <img src={item.img} alt={item.img}></img>
                                <div className="viewItemDetails">
                                    <h3>{item.name}</h3>
                                    <h4>QTY: {item.quantity}</h4>
                                    <span>${item.price}</span>
                                </div>
                                <div className="subtotal">
                                    {/* <h3>Subtotal:</h3> */}
                                    <span>${item.itemTotal}</span>
                                </div>
                            </div>
                            )})}
                            <div className="total">
                                <div>
                                    <span><strong>Subtotal: </strong></span>
                                    <span>${subtotal}</span>
                                </div>
                                <div>
                                    <span><strong>Sales Tax (8.25%): </strong></span>
                                    <span>${salesTax}</span>
                                </div>
                                <div className="promoCode">
                                    <span><strong>PROMOCODE: </strong></span>
                                    <input></input>
                                    <button>Redeem</button>
                                </div>
                                <h3>Total:</h3>
                                <span>${total}</span>
                            </div>
                    </div>
                </div>
                <div className="billing">
                    <form>
                        <div className="formInput">
                            <label>First Name:</label>
                            <input type="text"></input>
                        </div>
                        <div className="formInput">
                            <label>Last Name:</label>
                            <input type="text"></input>
                        </div>
                        <div className="formInput">
                            <label>Email:</label>
                            <input type="email"></input>
                        </div>
                        <div className="formInput">
                            <label>Phone Number:</label>
                            <input type="tel"></input>
                        </div>
                        <div className="formInput">
                            <label>Mailing Address:</label>
                            <input type="text"></input>
                        </div>
                        <div className="formInput">
                            <label>City:</label>
                            <input type="text"></input>
                        </div>
                        <div className="formInput">
                            <label>State:</label>
                            <input type="text"></input>
                        </div>
                        <div className="formInput">
                            <label>Zipcode:</label>
                            <input type="number"></input>
                        </div>
                        <div className="billingInfo">
                            <h3>Billing Info</h3>
                            <div className="billingBorder">
                                <Checkbox onClick={()=> setChecked(checked => !checked)}></Checkbox><label>Billing Address Different from Shipping</label>
                                {checked && 
                                <div className="billingAddress">
                                    <div className="formInput">
                                        <label>Mailing Address:</label>
                                        <input type="text"></input>
                                    </div>
                                    <div className="formInput">
                                        <label>City:</label>
                                        <input type="text"></input>
                                    </div>
                                    <div className="formInput">
                                        <label>State:</label>
                                        <input type="text"></input>
                                    </div>
                                    <div className="formInput">
                                        <label>Zip code:</label>
                                        <input type="number"></input>
                                    </div>
                                </div>
                                }
                        </div>
                        </div>

                        <button className="formSubmit">Place Order</button>
                    </form>
                </div>
            </div>
        )
    }
    return(
        <div>
            <h1>Cheesecakes by Chelsea</h1>
            {totalQty > 0 ? fullCart(cart) : emptyCart()}

        </div>

    )
}