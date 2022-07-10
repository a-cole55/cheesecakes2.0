import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
// import logo from "../assets/default-monochrome.svg";
import "./Header.css";
import {Link} from "react-router-dom";

export default function Header(props) {
    let quantity = props.totalQty[0];
    // let setQuantity = props.total[1];


    return(
      <header className="App-header">
      <nav>
        <div class="dropdown">
            <button class="dropbtn">
                <div class="container">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </button>
            <div class="dropdown-content">
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              {/* <Link to="/order">Order</Link> */}
              <Link to="/specials">Specials <LocalOfferIcon className="shop discount" fontSize="small"/></Link>
              <Link to="/about">About</Link>

            </div>
          </div>
      {/* <img src={logo} alt="logo" /> */}
      <div className="actions">
        <ShoppingBagOutlinedIcon className='shop' fontSize='large'/>
        {/* conditional statement if over 9 make 9+ & if equal to 0 don't display*/}
        {quantity > 0 && 
        <span id="cartQty">{quantity > 9 ? "9+" : quantity}</span>}
      </div>
    </nav>
      </header>
    )
}