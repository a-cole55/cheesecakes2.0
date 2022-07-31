import "./Menu.css";
// import DATA from "../Data";
import BananaPudding from "../assets/banana-min.jpg";
import BourbonPecan from "../assets/pecan (2)-min.jpg";
import CaramelApple from "../assets/caramelapple-min.jpg";
import Chocolate from "../assets/choc-min.jpg";
import Cinnamon from "../assets/cinnamon-min.jpg";
import Cookies from "../assets/cookies-min.jpg";
import SweetPotatoe from "../assets/sweetpotatoe (2)-min.jpg";
import Neo from "../assets/neopolitan-min.jpg";
import Minis from "../assets/minis-min.jpg";
import { useState } from "react";
import {Link} from "react-router-dom"
import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import e from "cors";

const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]};



export default function Menu(props){
    let totalQty = props.totalQty[0];
    let setTotal = props.totalQty[1];
    let cart = props.cartTotal[0];
    let setCart = props.cartTotal[1];
    let itemTotals = props.itemTotals[0];
    let setItemTotals = props.itemTotals[1];
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

 
    function Cheesecake(props, setShow){
        const [quantity, setQuantity] = useState(0);
    
        function addItem(){
            setQuantity(quantity < 10 ? quantity + 1 : quantity);
        }
    
        function removeItem(){
            setQuantity(quantity > 0 ? quantity - 1 : 0);
        }

        function itemTotal(props){
            setItemTotals(itemTotals = (quantity * props.price))
        }
        function checkForDuplicates(props){
          if(cart.length === 0){
            setCart(
              cart = [...cart, {"quantity": quantity, "key": props.tag, "name":props.title, "price":props.price, "img":props.img, "itemTotal": itemTotals}])
          }else{
            const duplicate = cart.some(cartItem => cartItem.key === props.tag)
            if(duplicate === false){
              setCart(
                cart = [...cart, {"quantity": quantity, "key": props.tag, "name":props.title, "price":props.price, "img":props.img, "itemTotal": itemTotals}])
            } else{
                for(let i = 0; i < cart.length; i++) {
                  if(cart[i].key === props.tag){
                    cart[i].price += props.price;
                    cart[i].quantity += quantity;
                    cart[i].itemTotal += (props.price * quantity);
                  }
                }
                cart = [...cart];
              }
          }
          }
          function totalCartQuantity(props){
            let totalCart = 0
            for(let i = 0; i < cart.length; i++) {
              totalCart += cart[i].quantity
          }
          setTotal(totalQty = totalCart)
        }

        const handleCart = (props) => {
            return (
            itemTotal(props),
            checkForDuplicates(props),
            console.log(cart),
            totalCartQuantity(props),
            console.log(totalQty),
            handleShow()
        )}
    return(
        <div className="cheesecake">
                <img src={props.img} alt=""></img>
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
                  <button id="order" type="button" onClick={() => handleCart(props)}>Add to Cart</button>
                      }
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
              <Modal.Title className="modalHeading">Item Added To Cart</Modal.Title>
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
                <Cheesecake tag="01" img={BananaPudding} alt="bourbon banana pudding cheesecake" title="Bourbon Banana Pudding" price={55} />
                <Cheesecake tag="02" img={BourbonPecan} alt="bourbon pecan pie cheesecake" title="Bourbon Pecan" price={50} />
                <Cheesecake tag="03" img={Chocolate} alt="chocolate cheesecake" title="Chocolate" price={35} />
                <Cheesecake tag="04" img={Cinnamon} alt="cinnamon roll cheesecake" title="Cinnamon Roll" price={50} />
                <Cheesecake tag="05" img={Cookies} alt="cookies and cream cheesecake" title="Cookies N' Creme" price={45} />
                <Cheesecake tag="06" img={SweetPotatoe} alt="sweet potatoe cheesecake" title="Sweet Potatoe" price={30} />
                <Cheesecake tag="07" img={Neo} alt="neapolitan cheesecake" title="Neapolitan" price={55} />
                <Cheesecake tag="08" img={CaramelApple} alt="caramel apple cheesecake" title="Caramel Apple" price={35} />
                <Cheesecake tag="09" img={Minis} alt="3 mini cheesecakes of assorted flavors" title="3x Assorted Minis" price={35} />
            </div>
        </motion.div>

    )
}