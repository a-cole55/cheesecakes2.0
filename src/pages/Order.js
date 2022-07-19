import { Checkbox } from "@mui/material";
import {Link} from "react-router-dom";
import { useState } from "react";
import "./Order.css";
import React from "react";
import ReactDOM from "react-dom";


const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function Order(props){
    let totalQty = props.totalQty[0];
    let cart = props.cartTotal[0];
    const [checked, setChecked] = useState(false);
    const [promo, setPromo] = useState("");
    const [getPromo, setGetPromo] = useState("");
    const [discount, setDiscount] = useState(0)
    let total = 0;
    let salesT = 0;
    let salesTax = 0;
    let subtotal = 0;
    // let discount = 0;


    function emptyCart(){
        return (
            <h2><Link to="/menu">Visit Here</Link> To Add Items to Your Shopping Bag</h2>
        )
    }

    function fullCart(cart, promo, discount, setDiscount, getPromo, setGetPromo){
        const elgDiscountCode = "CHEESECAKE2022"

        function handleChange(event){
            setPromo(event.target.value)
        }

        const checkPromo = (promo) => {
            if(promo === elgDiscountCode){
                setGetPromo(true)
                // calcDiscount()
            }else{
                getPromo = false;
                setGetPromo(false)
            }
        }

        const createOrder = (data, actions, total) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: `${total}`,
                  },
                },
              ],
            });
          }
        const onApprove = (data, actions) => {
            return actions.order.capture();
          }

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
                                    <span>${item.itemTotal}</span>
                                </div>
                            </div>
                            )})}
                            <div className="total">
                                <div className="totalDetails">
                                    <span><strong>Subtotal: </strong></span>
                                    <span>${subtotal}</span>
                                </div>
                                <div className="totalDetails">
                                    <span><strong>Sales Tax (8.25%): </strong></span>
                                    <span>${salesTax}</span>
                                </div>
                                <div className="promoCode">
                                    <span><strong>PROMOCODE: </strong></span>
                                    <input type="text" value={promo} onChange={handleChange} />
                                    <button onClick={()=>checkPromo(promo, elgDiscountCode)}>Redeem</button>
                                </div>
                                <div>
                                    {getPromo === false &&
                                        <h5>This is an invalid code</h5>}
                                        </div>
                                    {getPromo === true &&
                                    <><div className="totalDetails"><span><strong>Discount: </strong></span>
                                    <span>-${discount = +((subtotal * 0.10).toFixed(2))}</span></div></>}
                                </div>
                                <div className="finalTotal">
                                    <h3>Total:</h3>
                                    <span>${getPromo === false ? total : total = total-discount}</span>
                                </div>
                    </div>
                </div>
                <div className="billing">
                    <PayPalButton createOrder={(data, actions) => this.createOrder(data, actions)}
                        onApprove={(data, actions) => this.onApprove(data, actions)}/>
                    {/* <form>
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
                    </form> */}
                </div>
            </div>
        )
    }
    return(
        <div>
            <h1>Cheesecakes by Chelsea</h1>
            {totalQty > 0 ? fullCart(cart, promo, discount, setDiscount, getPromo, setGetPromo) : emptyCart()}

        </div>

    )
}