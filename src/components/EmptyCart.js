import HomeImg from "../assets/bourbonpecan-min.jpg";
import Home2 from "../assets/strawberrys-min.jpg";
import {Link} from "react-router-dom";


export default function EmptyCart(){
    return (
        <div className="cartContent2">
            <h2><Link to="/menu"><strong id="visitHereLink">Visit Here</strong></Link> To Add Items to Your Cart</h2>
            <img id="smallImg" className="hide" src={Home2} alt="cheesecake img"></img>
            <img id="bgImg" className="hide" src={HomeImg} alt="cheesecake img"></img>
            
        </div>
    )
}