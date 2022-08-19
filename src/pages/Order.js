// import { Checkbox } from "@mui/material";
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { DeleteOutlined } from "@ant-design/icons";
import {Link} from "react-router-dom";
import { useState } from "react";
import EmptyCart from '../components/EmptyCart';
import "./Order.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import CartContext from "../components/CartContext";


const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]};

export default function Order(props){
    const [promo, setPromo] = useState("");
    const [getPromo, setGetPromo] = useState("");
    const [discount, setDiscount] = useState(0);
    let salesT = 0;
    let salesTax = 0;
    let subtotal = 0;
    
    const {cart} = useContext(CartContext);
    const {setCart} = useContext(CartContext);
    let {totalQty} = useContext(CartContext);
    const {setTotalQty} = useContext(CartContext);


    function FullCart(cart, promo, discount, setDiscount, getPromo, setGetPromo, total){
        const elgDiscountCode = "CHEESECAKE2022";

        function handleChange(event){
            setPromo(event.target.value)
        }
        //Validate Promo Code
        const checkPromo = (promo) => {
            if(promo === elgDiscountCode){
                setGetPromo(true)
                calcDiscount(discount, total, subtotal)
            }else{
                setGetPromo(false)
            }
        }
        //Calculate Discount Amount
        const calcDiscount = (discount,total,subtotal) => {
            setDiscount((subtotal * 0.10).toFixed(2))
        }
        
        //Update Cart Total
        function updateCartTotal(cart){
            subtotal = 0
            cart.forEach(item =>  subtotal += item.price);
                //CALCULATE SUBTOTAL
            //CALCULATE SALESTAX
            salesT = subtotal * .0825
            //CONVERT TO NUMBER
            salesTax = +(salesT.toFixed(2))
            //CALCULATE TOTAL
            total = (subtotal + salesTax)
            console.log(subtotal);
            console.log(salesT)
            console.log(total)
        }
            


        //ncreast Item Quantity (Increase Qty Count)
          function increaseQty(item, cart){
            setTotalQty(totalQty => totalQty + 1);
            item.quantity += 1;
            updateCartTotal(cart)
        }

        //Reduce Quantity of Item (Decrease Qty Count)
        function reduceQty(item, cart){
            setTotalQty(totalQty => totalQty - 1);
            item.quantity -= 1;
            updateCartTotal(cart)
        }
        
        //Remove Item(s) from Cart
        function removeItem(cart, item){
            setCart(cart.filter((cartItem) => cartItem !== item));
            setTotalQty(totalQty => totalQty - item.quantity)
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
                                <button id="updateCartBTN" onClick={()=> updateCartTotal(cart)}>Update Cart</button>
                            </div>
                            {/* {updateCartTotal(cart)} */}
                            {cart.map((item, index) => {
                                //CALCULATE SUBTOTAL
                            subtotal = subtotal + item.itemTotal
                            //CALCULATE SALESTAX
                            salesT = subtotal * .0825
                            //CONVERT TO NUMBER
                            salesTax = +(salesT.toFixed(2))
                            //CALCULATE TOTAL
                            total = (subtotal + salesTax)
                            return (
                            <div key={index} className="viewItems">
                                <img src={item.img} alt={item.img}></img>
                                <div className="viewItemDetails">
                                    <div className="cartItemDetails">
                                    <h3>{item.name}</h3>
                                    </div>
                                    <div className="cartItemDetails" id="quantityBTNContainer">
                                        <div className="quantityBTN">
                                            <h4>QTY: </h4>
                                            <input className="changeQtyBTN" value="-" type="button" onClick={() => reduceQty(item)}/>
                                            <input disabled className="changeQtyBTN" id="adjustQTY" value={item.quantity}></input>
                                            <input className="changeQtyBTN" value="+" type="button" onClick={() => increaseQty(item)} />
                                        </div>
                                    </div>
                                    <div className="cartItemDetails" id="itemTotalDiv">
                                    <span>${item.itemTotal}</span>
                                    </div>
                                    <div className="cartItemDetails">
                                        <span id="removeCart" onClick={()=>removeItem(cart, item)}><DeleteOutlined id="remove" style={{ fontSize: '22px' }} /></span>
                                    </div>
                                </div>
                            </div>
                            )})}
                            <div id="borderBottom"></div>
                        </div>
                      </div>  
                      <div id="borderBottom"></div>
                </div>

                <div id="cartTotal">
                    <div className="cartHeader">
                        <h3 className="shoppingHeader">Checkout</h3>
                    </div>
                  
                    <div className="promoCode">
                        <input type="text" 
                            placeholder="PROMO CODE"
                            value={promo} 
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
                        <span>-${discount}</span></div></>}


                        <div className="total">
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
                    <Link to="/payment"> <button id="placeOrder" onClick={() => props.setCartTotal(total)}>CHECKOUT</button></Link>
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
            {totalQty > 0 ? FullCart(cart, promo, discount, setDiscount, getPromo, setGetPromo) : <EmptyCart />}
        </motion.div>

    )
}