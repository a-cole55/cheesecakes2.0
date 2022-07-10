// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
// import logo from "../assets/default-monochrome.svg";
import "./Header.css";
import {Link} from "react-router-dom"

export default function Header(props) {
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
        {/* <ShoppingBagIcon className="shop" fontSize="large"/> */}
        <ShoppingBagOutlinedIcon className='shop' fontSize='large'/>
        {/* conditioal statement if over 9 make 9+ & if equal to 0 don't display*/}
        <span id="cartQty">0</span>
      </div>
    </nav>
      </header>
    )
}