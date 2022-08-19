import { ShoppingCartOutlined } from "@ant-design/icons";
import "./Header.css";
import {NavLink} from "react-router-dom";
import NavLogo from "../assets/navLogo.png";
import { useContext } from "react";
import CartContext from "../components/CartContext";

export default function Header(props) {
    let {totalQty} = useContext(CartContext);

    return(
      <header className="App-header">

        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <NavLink to="/"><img src={NavLogo} alt="cheesecake logo" className="navbar-brand"></img></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/menu" className='nav-link' id="menuNav" aria-current="page">Menu</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/specials" className='nav-link'>Specials</NavLink>
                </li>
                <li className="nav-item action-btn">
                  <NavLink to="/menu" className='nav-link'>Order</NavLink>
                </li>
              </ul>
              <div className="actions">
                {/* conditional statement if over 9 make 9+ & if equal to 0 don't display*/}
                {totalQty > 0 && 
                <div id="cartQtyContainer">
                  <span id="cartQty">{totalQty > 9 ? "(9+)" : totalQty}</span>
                </div>}
                <NavLink to="/order"><ShoppingCartOutlined style={{ fontSize: '27px' }} className="hideCartIcon" /></NavLink>
                <NavLink to="/order"><span id="cartHeading" className="hideCartText">Cart</span></NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
}