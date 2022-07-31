// import { Checkbox } from "@mui/material";
// import { useState } from "react";

// export default function FullCart(props){
//     let totalQty = props.totalQty[0];
//     let cart = props.cartTotal[0];
//     const [checked, setChecked] = useState(false);
//     const [promo, setPromo] = useState("");
//     const [getPromo, setGetPromo] = useState("");
//     let total = 0;
//     let salesT = 0;
//     let salesTax = 0;
//     let subtotal = 0;
//     let discount = 0;

//     function handleChange(event){
//         setPromo(event.target.value)
//     }

//     // let discount = total * 0.10;
//     //         return discount
//     function checkPromo(promo){
//         console.log(promo)
//         if(promo === "CHEESECAKE2022"){
//             // discount = total * 0.10;
//             // setGetPromo(true)
//             return true
//         }else{
//             // setGetPromo(false)
//             return false
//         }
//     }

//     return (
//         <div className="cartContent">
//             <div className="cart">
//                 <h3>View Cart</h3>
//                 <div className="cartItems">
//                     {cart.map((item) => {
//                         subtotal = subtotal + item.itemTotal
//                         salesT = subtotal * .0825
//                         salesTax = +(salesT.toFixed(2))
//                         total = (subtotal + salesTax)
//                         return (
//                         <div key={item.name} className="viewItems">
//                             <img src={item.img} alt={item.img}></img>
//                             <div className="viewItemDetails">
//                                 <h3>{item.name}</h3>
//                                 <h4>QTY: {item.quantity}</h4>
//                                 <span>${item.price}</span>
//                             </div>
//                             <div className="subtotal">
//                                 <span>${item.itemTotal}</span>
//                             </div>
//                         </div>
//                         )})}
//                         <div className="total">
//                             <div>
//                                 <span><strong>Subtotal: </strong></span>
//                                 <span>${subtotal}</span>
//                             </div>
//                             <div>
//                                 <span><strong>Sales Tax (8.25%): </strong></span>
//                                 <span>${salesTax}</span>
//                             </div>
//                             {/* <div className="promoCode">
//                                 <span><strong>PROMOCODE: </strong></span>
//                                 <input type="text" value={promo} onChange={handleChange}></input>
//                                 <button onClick={checkPromo}>Redeem</button>
//                             </div>
//                             <div>
//                             {checkPromo === false &&
//                                 <h5>This is an invalid code</h5>}
//                                 </div>
//                             {checkPromo === true &&
//                             <span>- ${discount}</span>}
//                             <h3>Total:</h3>
//                             <span>${total}</span>
//                         </div> */}
//                         </div>
//                 </div>
//             </div>
//             <div className="billing">
//                 <form>
//                     <div className="formInput">
//                         <label>First Name:</label>
//                         <input type="text"></input>
//                     </div>
//                     <div className="formInput">
//                         <label>Last Name:</label>
//                         <input type="text"></input>
//                     </div>
//                     <div className="formInput">
//                         <label>Email:</label>
//                         <input type="email"></input>
//                     </div>
//                     <div className="formInput">
//                         <label>Phone Number:</label>
//                         <input type="tel"></input>
//                     </div>
//                     <div className="formInput">
//                         <label>Mailing Address:</label>
//                         <input type="text"></input>
//                     </div>
//                     <div className="formInput">
//                         <label>City:</label>
//                         <input type="text"></input>
//                     </div>
//                     <div className="formInput">
//                         <label>State:</label>
//                         <input type="text"></input>
//                     </div>
//                     <div className="formInput">
//                         <label>Zipcode:</label>
//                         <input type="number"></input>
//                     </div>
//                     <div className="billingInfo">
//                         <h3>Billing Info</h3>
//                         <div className="billingBorder">
//                             <Checkbox onClick={()=> setChecked(checked => !checked)}></Checkbox><label>Billing Address Different from Shipping</label>
//                             {checked && 
//                             <div className="billingAddress">
//                                 <div className="formInput">
//                                     <label>Mailing Address:</label>
//                                     <input type="text"></input>
//                                 </div>
//                                 <div className="formInput">
//                                     <label>City:</label>
//                                     <input type="text"></input>
//                                 </div>
//                                 <div className="formInput">
//                                     <label>State:</label>
//                                     <input type="text"></input>
//                                 </div>
//                                 <div className="formInput">
//                                     <label>Zip code:</label>
//                                     <input type="number"></input>
//                                 </div>
//                             </div>
//                             }
//                     </div>
//                     </div>

//                     <button className="formSubmit">Place Order</button>
//                 </form>
//             </div>
//         </div>
//     )
// }