// import { Checkbox } from "@mui/material";
import {Link} from "react-router-dom";
import { useState } from "react";
import "./Order.css";
import Paypal from "../components/Paypal"

export default function Order(props){
    let totalQty = props.totalQty[0];
    let cart = props.cartTotal[0];
    const [promo, setPromo] = useState("");
    const [getPromo, setGetPromo] = useState("");
    const [discount, setDiscount] = useState(0);
    // const [total, setTotal] = useState(0)
    let total = 0;
    let salesT = 0;
    let salesTax = 0;
    let subtotal = 0;
    // let discount = 0;


    function emptyCart(){
        return (
            <div className="cartContent2">
                <h2><Link to="/menu">Visit Here</Link> To Add Items to Your Shopping Bag</h2>
            </div>
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
                                {/* <div className="subtotal">
                                    <span>${item.itemTotal}</span>
                                </div> */}
                            </div>
                            )})}
                            <div className="total">
                                <div className="totalDetails">
                                    <span><strong>Subtotal: </strong></span>
                                    <span>${subtotal}</span>
                                </div>
                                <div className="totalDetails">
                                    <span><strong>Sales Tax </strong>(8.25%):</span>
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
                                    <span>-${discount = +(subtotal * 0.10).toFixed(2)}</span></div></>}
                                </div>
                                <div className="finalTotal">
                                    <h3>Total:</h3>
                                    <span>${getPromo === false ? total : total = total-discount}</span>
                                </div>
                    </div>
                </div>
                <div className="billing">
                    <Paypal cart={cart} total={total}/>
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