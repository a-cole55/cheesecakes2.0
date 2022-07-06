import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import logo from "../assets/default-monochrome.svg";
import "./Header.css"

export default function Header() {
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
              <a id="aboutMe" href='#about'>About</a>
              <a id="menuSelection" href='#menu'>Menu</a>
              <a id="Placeorder" href='#order'>Order</a>
              <a href="#specials">Specials <LocalOfferIcon className="shop discount" fontSize="small"/></a>
              <a id="contactUs" href='#contact'>Contact</a>
            </div>
          </div>
      <img src={logo} alt="logo" />
      <div className="actions">
        <ShoppingBagIcon className="shop" fontSize="large"/>
      </div>
    </nav>
      </header>
    )
}