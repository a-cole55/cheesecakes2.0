import { useState } from "react";

export default function Cheesecake(props){
    const [quantity, setQuantity] = useState(0);

    function addItem(){
        setQuantity(quantity < 10 ? quantity + 1: quantity)
    }

    function removeItem(){
        setQuantity(quantity > 0 ? quantity - 1 : 0)
    }

    return(
        <div className="cheesecake">
                <img src={props.img} alt=""></img>
                <h3>{props.title}</h3>
                <span id="price">{props.price}</span>
                <button id="order" onClick={quantity}>Add to Order</button>
                <div id="quantity">
                    <button id="remove" onClick={removeItem}>-</button>
                    <input disabled id="qtyCount" value={quantity}></input>
                    <button id="add" onClick={addItem}>+</button>
                </div>
        </div>
    )
}