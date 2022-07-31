// import { Checkbox } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {Link} from "react-router-dom";
import { useState } from "react";
import "./Order.css";
import Paypal from "../components/Paypal";
import { motion } from "framer-motion";
import HomeImg from "../assets/bourbonpecan-min.jpg";
import Home2 from "../assets/strawberrys-min.jpg"


const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]};

export default function Order(props){
    let totalQty = props.totalQty[0];
    let cart = props.cartTotal[0];
    let setCart = props.cartTotal[1]
    let total = props.total[0];
    let setTotal = props.total[1];
    const [promo, setPromo] = useState("");
    const [getPromo, setGetPromo] = useState("");
    const [discount, setDiscount] = useState(0);
    const [placeOrder, setPlaceOrder] = useState(false)
    let salesT = 0;
    let salesTax = 0;
    let subtotal = 0;
    // let discount = 0;


    function EmptyCart(){
        return (
            <div className="cartContent2">
                <h2><Link to="/menu"><strong id="visitHereLink">Visit Here</strong></Link> To Add Items to Your Shopping Bag</h2>
                <img id="smallImg" className="hide" src={Home2} alt="cheesecake img"></img>
                <img id="bgImg" className="hide" src={HomeImg} alt="cheesecake img"></img>
                
            </div>
        )
    }

    function FullCart(cart, promo, discount, setDiscount, getPromo, setGetPromo, total, setTotal, placeOrder, setPlaceOrder, setCart){
        const elgDiscountCode = "CHEESECAKE2022";
        const [disabled, setDisabled] = useState(false);

        function handleChange(event){
            setPromo(event.target.value)
        }

        const checkPromo = (promo) => {
            if(promo === elgDiscountCode){
                setGetPromo(true)
                // calcDiscount()
            }else{
                setGetPromo(false)
            }
        }

        const displayPayment = (placeOrder) =>{
            setPlaceOrder(placeOrder => !placeOrder)
        }

        function removeItem(cart,itemToRemove){
            console.log(itemToRemove)
            setCart(cart.filter((item) => item !== itemToRemove));

        }

        return (
            <div className="cartContent">
                <div className="cart">
                    <div className="cartItems">
                        <div id="cart">
                            <div className="cartHeader">
                                <h3 className="shoppingHeader">Shopping Cart</h3>
                                <span id="totalQtyHeader">({totalQty} {totalQty > 1 ? "Items" : "Item"})</span>
                            </div>
                            <div className="cartActions">
                                <Link to="/menu"><h4 id="continueShopping">Continue Shopping</h4></Link>
                                <button id="updateCartBTN">Update Cart</button>
                            </div>
                            {cart.map((item) => {
                            subtotal = subtotal + item.itemTotal
                            salesT = subtotal * .0825
                            salesTax = +(salesT.toFixed(2))
                            total = (subtotal + salesTax)
                            return (
                            <div key={item.key} className="viewItems">
                                <img src={item.img} alt={item.img}></img>
                                <div className="viewItemDetails">
                                    <div className="cartItemDetails">
                                    <h3>{item.name}</h3>
                                    </div>
                                    <div className="cartItemDetails">
                                    <h4>QTY: {item.quantity}</h4>
                                    </div>
                                    <div className="cartItemDetails">
                                    <span>${item.itemTotal}</span>
                                    </div>
                                    <div className="cartItemDetails">
                                    <DeleteOutlineOutlinedIcon id="remove" /><span onClick={()=>removeItem(cart, item)}>Remove</span>
                                    </div>
                                </div>
                            </div>
                            )})}
                        </div>
                      </div>  
                </div>

                <div id="cartTotal">
                    <div className="cartHeader">
                        <h3 className="shoppingHeader">Checkout</h3>
                    </div>
                  
                    <div className="promoCode">
                        <input type="text" 
                            placeholder="PROMO CODE"
                            value={promo} 
                            disabled = {disabled}
                            onChange={handleChange} />
                        <button 
                            onClick={()=>checkPromo(promo, elgDiscountCode)}>Apply</button>
                    </div>

                    <div>
                        {getPromo === false &&
                            <h5>This is an invalid code</h5>}
                    </div>
                    <div className="totalDetails">
                                <span><strong>Subtotal: </strong></span>
                                <span>${subtotal}</span>
                            </div>
                    {getPromo === true &&
                        <><div className="totalDetails"><span><strong>Discount: </strong></span>
                        <span>-${discount = (subtotal * 0.10).toFixed(2)}</span></div></>}


                        <div className="total">
                            {/* <div className="totalDetails">
                                <span><strong>Subtotal: </strong></span>
                                <span>${subtotal}</span>
                            </div> */}
                            <div className="totalDetails">
                                <span><strong>Sales Tax </strong>(8.25%):</span>
                                <span>${salesTax}</span>
                            </div>
                            <div className="finalTotal">
                                <h3>Total:</h3>
                                <span>${getPromo === false ? total : total = total-(+discount)}</span>
                            </div>
                    </div>
                <div className="billing">
                    <button id="placeOrder" 
                    onClick={()=> {
                        displayPayment(placeOrder);
                        setDisabled(disabled => !disabled)
                    }}>CHECKOUT</button>
                    {placeOrder === true && <Paypal cart={cart} total={total}/>}
                    {/* <Paypal cart={cart} total={total}/> */}
                </div>
                </div>
            </div>
        )
    }
    return(
        <motion.div
        id="orderContent"
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        transition={transition}>
            {totalQty > 0 ? FullCart(cart, promo, discount, setDiscount, getPromo, setGetPromo, total, setTotal, placeOrder, setPlaceOrder, setCart) : EmptyCart()}
        </motion.div>

    )
}