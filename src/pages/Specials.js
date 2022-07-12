import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import "../pages/Specials.css"

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

        </div>

        
    )
}