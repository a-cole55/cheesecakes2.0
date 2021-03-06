// import { Checkbox } from "@mui/material";
import {Link} from "react-router-dom";
import { useState } from "react";
import "./Order.css";
import Paypal from "../components/Paypal";
import { motion } from "framer-motion";


const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]};

export default function Order(props){
    let totalQty = props.totalQty[0];
    let cart = props.cartTotal[0];
    let total = props.total[0];
    let setTotal = props.total[1];
    const [promo, setPromo] = useState("");
    const [getPromo, setGetPromo] = useState("");
    const [discount, setDiscount] = useState(0);
    // let total = 0;
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

    function fullCart(cart, promo, discount, setDiscount, getPromo, setGetPromo, total, setTotal){
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
                    <div className="cartItems">
                        <div id="cart">
                        <div className="cartHeader">
                            <h3>Shopping Cart</h3>
                        </div>
                        {cart.map((item) => {
                            subtotal = subtotal + item.itemTotal
                            salesT = subtotal * .0825
                            salesTax = +(salesT.toFixed(2))
                            total = (subtotal + salesTax)
                            return (
                            <div key={item.name} className="viewItems">
                                <img src={item.img} alt={item.img}></img>
                                <div className="viewItemDetails">
                                    <div>
                                    <h3>{item.name}</h3>
                                    </div>
                                    <div>
                                    <h4>QTY: {item.quantity}</h4>
                                    </div>
                                    <div>
                                    <span>${item.price}</span>
                                    </div>
                                </div>
                                {/* <div className="subtotal">
                                    <span>${item.itemTotal}</span>
                                </div> */}
                            </div>
                            )})}
                        </div>
                        
                            <div className="total">
                                <div className="totalDetails">
                                    <span><strong>Subtotal: </strong></span>
                                    <span>${subtotal}</span>
                                </div>
                                <div className="totalDetails">
                                    <span><strong>Sales Tax </strong>(8.25%):</span>
                                    <span>${salesTax}</span>
                                </div>
                                <div>
                                    {getPromo === false &&
                                        <h5>This is an invalid code</h5>}
                                        </div>
                                    {getPromo === true &&
                                    <><div className="totalDetails"><span><strong>Discount: </strong></span>
                                    <span>-${discount = Math.round((subtotal * 0.10)*100)/100}</span></div></>}
                                </div>
                                <div className="promoCode">
                                    {/* <span><strong>PROMOCODE: </strong></span> */}
                                    <input type="text" 
                                    placeholder="PROMO CODE"
                                    value={promo} 
                                    onChange={handleChange} />
                                    <motion.button 
                                        // onMouseOver={}
                                        //   initial={{ scale:1}}
                                        //   animate={{ scale: 1.1 }}
                                        //   exit={{ scale:1}}
                                        //   transition={transition}
                                          onClick={()=>checkPromo(promo, elgDiscountCode)}>Apply</motion.button>
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
        <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        transition={transition}>
            <h1>Cheesecakes by Chelsea</h1>
            {totalQty > 0 ? fullCart(cart, promo, discount, setDiscount, getPromo, setGetPromo, total, setTotal) : emptyCart()}
        </motion.div>

    )
}