import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./Header.css";
import {Link} from "react-router-dom";
import NavLogo from "../assets/navLogo.png"

export default function Header(props) {
    let quantity = props.totalQty[0];


    return(
      <header className="App-header">

        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to="/"><img src={NavLogo} alt="cheesecake logo" className="navbar-brand"></img></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/menu" className='nav-link' id="menuNav" aria-current="page">Menu</Link>
                </li>
                <li className="nav-item">
                <Link to="/specials" className='nav-link'>Specials</Link>
                </li>
                <li className="nav-item action-btn">
                  <Link to="/menu" className='nav-link'>Order Now</Link>
                </li>
              </ul>
              <div className="actions">
                <Link to="/order"><ShoppingCartOutlinedIcon className='shop' id="hideNavLogo" fontSize='large'/>
                <span id="cartHeading">Cart </span></Link>
                {/* conditional statement if over 9 make 9+ & if equal to 0 don't display*/}
                {quantity > 0 && 
                <span id="cartQty">{quantity > 9 ? "(9+)" : `(${quantity})`}</span>}
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
}