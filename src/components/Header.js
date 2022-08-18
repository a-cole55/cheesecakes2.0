import { ShoppingCartOutlined } from "@ant-design/icons";
import "./Header.css";
import {Link} from "react-router-dom";
import NavLogo from "../assets/navLogo.png";
import { useContext } from "react";
import CartContext from "../components/CartContext";

export default function Header(props) {
    let {totalQty} = useContext(CartContext);

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
                  <Link to="/menu" className='nav-link'>Order</Link>
                </li>
              </ul>
              <div className="actions">
                {/* conditional statement if over 9 make 9+ & if equal to 0 don't display*/}
                {totalQty > 0 && 
                <div id="cartQtyContainer">
                  <span id="cartQty">{totalQty > 9 ? "(9+)" : totalQty}</span>
                </div>}
                <Link to="/order"><ShoppingCartOutlined style={{ fontSize: '27px' }} className="hideCartIcon" /></Link>
                <Link to="/order"><span id="cartHeading" className="hideCartText">View Cart</span></Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
}