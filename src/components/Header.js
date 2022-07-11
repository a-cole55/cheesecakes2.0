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
        <div className="dropdown">
            <button className="dropbtn">
                <div className="container">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </button>
            <div className="dropdown-content">
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/order">Order</Link>
              <Link to="/specials">Specials <LocalOfferIcon className="shop discount" fontSize="small"/></Link>
              <Link to="/about">About</Link>

            </div>
          </div>
      {/* <img src={logo} alt="logo" /> */}
      <div className="actions">
        <Link to="/order"><ShoppingBagOutlinedIcon className='shop' fontSize='large'/></Link>
        {/* conditional statement if over 9 make 9+ & if equal to 0 don't display*/}
        {quantity > 0 && 
        <span id="cartQty">{quantity > 9 ? "9+" : quantity}</span>}
      </div>
    </nav>
      </header>
    )
}