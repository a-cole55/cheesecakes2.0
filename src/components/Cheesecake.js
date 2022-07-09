

export default function Cheesecake(props){
    return(
        <div className="cheesecake">
                <img src={props.img} alt=""></img>
                <h3>{props.title}</h3>
                <span id="price">{props.price}</span>
                <button id="order">Add to Order</button>
                <div id="quantity">
                    <button id="remove">-</button>
                    <input disabled id="qtyCount" placeholder="0"></input>
                    <button id="add">+</button>
                </div>
        </div>
    )
}