import "./Menu.css";
import DATA from "../Data";
// import Cheesecake from "../components/Cheesecake"
import { useState, useContext, useEffect } from "react";
import {Link} from "react-router-dom"
import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartContext from "../components/CartContext";
// import e from "cors";

const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]};



export default function Menu(props){
  let itemTotals = props.itemTotals[0];
  let setItemTotals = props.itemTotals[1];
  let {cart} = useContext(CartContext);
  const {setCart} = useContext(CartContext);
  let {totalQty} = useContext(CartContext);
  const {setTotalQty} = useContext(CartContext);

//Module Functionality
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => setShow(true);
  function Cheesecake(props) {
    const [quantity, setQuantity] = useState(0);

    //Add Items To Cart (Increase Count)
    function addItem(){
        setQuantity(quantity < 10 ? quantity + 1 : quantity);
    }

    //Remove Items From Cart (Decrease Count)
    function removeItem(){
        setQuantity(quantity > 0 ? quantity - 1 : 0);
    }
    //Calculate Items Subtotal
    function itemTotal(props){
        setItemTotals(itemTotals = (quantity * props.price))
    }
    
    //Check for Duplicate Items in Array
    function checkForDuplicates(props){
      if(cart.length === 0){
        setCart(
          cart => [...cart, {"quantity": quantity, "key": props.tag, "name":props.title, "price":props.price, "img":props.img, "itemTotal": itemTotals}])
      }else{
        const duplicate = cart.some(cartItem => cartItem.name === props.title)
        if(duplicate === false){
          setCart(
            cart => [...cart, {"quantity": quantity, "key": props.tag, "name":props.title, "price":props.price, "img":props.img, "itemTotal": itemTotals}])
        } else{
            for(let i = 0; i < cart.length; i++) {
              if(cart[i].name === props.title){
                cart[i].price += props.price;
                cart[i].quantity += quantity;
                cart[i].itemTotal += (props.price * quantity);
              }
            }
            setCart(cart => [...cart]);
          }
      }
      }
    const handleCart = (props) => {
      return (
        itemTotal(props),
        checkForDuplicates(props),
        console.log(cart),
        setTotalQty(totalQty => totalQty + quantity),
        handleShow()
    )}

    //Session Storage for Cart and TotalQty
    useEffect(() => {
      sessionStorage.setItem('user-cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
      sessionStorage.setItem('total-cartQty', JSON.stringify(totalQty));
      console.log(totalQty)
    }, [totalQty]);

    return(
        <div className="cheesecake">
          <img src={props.img} alt={props.alt}></img>
          <h3>{props.title}</h3>
          <span id="price">${props.price}</span>
          <div id="menuBTNS">
            <div id="quantity">
              <button id="remove" onClick={removeItem}>-</button>
              <input disabled id="qtyCount" value={quantity}></input>
              <button id="add" onClick={addItem}>+</button>
            </div>
            <div id="addToCartBTN">
              {quantity > 0 && 
                <button id="order" type="button" onClick={() => handleCart(props)}>Add to Cart</button>}
            </div>
          </div>
        </div>
        )};

  return(
      <motion.div
        className="menuBG"
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        transition={transition}>
          <h1>Menu</h1>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="modalTitle">
              <Modal.Title className="modalHeading">Item(s) Added To Cart</Modal.Title>
            </Modal.Header>
            <Modal.Footer className="modalFooter">
              <Button variant="secondary" onClick={handleClose} className="modalBTN">
                Continue Shopping
              </Button>
              <Link to="/order">
                <Button variant="primary" onClick={handleClose} className="modalBTNCart">
                  View Cart
                </Button>
              </Link>
            </Modal.Footer>
        </Modal>
          <div className="menu">
          {DATA.map((dataItem, index) => {
            return (
              <Cheesecake key={index} img={dataItem.img} alt={dataItem.alt} title={dataItem.name} price={dataItem.price}/>
            )})};
          </div>
      </motion.div>
  )
}