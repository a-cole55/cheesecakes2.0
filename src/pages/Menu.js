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
import { motion } from "framer-motion";
// import e from "cors";

const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]};



export default function Menu(props){
    let totalQty = props.totalQty[0];
    let setTotal = props.totalQty[1];
    let cart = props.cartTotal[0];
    let setCart = props.cartTotal[1];
    let itemTotals = props.itemTotals[0];
    let setItemTotals = props.itemTotals[1];
 
    function Cheesecake(props){
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

        const handleCart = (props) => {
            return (
            setTotal(totalQty = totalQty + quantity),
            itemTotal(props),
            setCart(cart = [...cart, {"quantity": quantity, "key": props.tag, "name":props.title, "price":props.price, "img":props.img, "itemTotal": itemTotals}]),
            console.log(cart)
        )}
    return(
        <div className="cheesecake">
                <img src={props.img} alt=""></img>
                <h3>{props.title}</h3>
                <span id="price">${props.price}</span>
                <div id="quantity">
                        <button id="remove" onClick={removeItem}>-</button>
                        <input disabled id="qtyCount" value={quantity}></input>
                        <button id="add" onClick={addItem}>+</button>
                    </div>
                {quantity > 0 && 
                <button id="order" type="button" onClick={() => handleCart(props)}>ADD</button>
                    }
        </div>
        )};


    return(
        <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        transition={transition}>
            <h1>Menu</h1>
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