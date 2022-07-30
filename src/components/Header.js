import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./Header.css";
import {Link} from "react-router-dom";
import NavLogo from "../assets/navLogo.png"

export default function Header(props) {
    let quantity = props.totalQty[0];


    return(
      <header className="App-header">

        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <Link to="/"><img src={NavLogo} alt="cheesecake logo" class="navbar-brand"></img></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                  <Link to="/menu" className='nav-link menuNav' aria-current="page">Menu</Link>
                </li>
                <li class="nav-item">
                  <Link to="/order" className='nav-link'>Order</Link>
                </li>
                <li class="nav-item">
                <Link to="/specials" className='nav-link'>Specials <LocalOfferIcon className="shop discount" fontSize="small"/></Link>
                </li>
              </ul>
              {/* <span class="navbar-text">
                Navbar text with an inline element
              </span> */}
              <div className="actions">
                <Link to="/order"><ShoppingCartOutlinedIcon className='shop' fontSize='large'/>
                <span id="cartHeading">Cart</span></Link>
                {/* conditional statement if over 9 make 9+ & if equal to 0 don't display*/}
                {quantity > 0 && 
                <Link to="/order"><span id="cartQty">{quantity > 9 ? "9+" : quantity}</span></Link>}
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
}