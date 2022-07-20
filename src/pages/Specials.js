import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import "../pages/Specials.css";
import HomeImg from "../assets/bourbonpecan.jpg";
import Home2 from "../assets/strawberrys.jpg";

export default function Specials(){
    return(
        <div className="specials">
            <div className="specialsHeading">
                <h1>Specials</h1>
                <LocalOfferIcon className="shop discount" fontSize="large"/>
            </div>
            <div className="coupon">
                <h2>Cheesecake Lovers Special</h2>
                <span>10% off Any Purchase</span>
                <h3>PROMOCODE: </h3>
                <h4>CHEESECAKE2022</h4>
            </div>
            <img id="smallImg" src={Home2} alt="cheesecake img"></img>
            <img id="bgImg" src={HomeImg} alt="cheesecake img"></img>

        </div>

        
    )
}