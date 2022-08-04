import Header from "./components/Header";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './App.css';
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import About from "./pages/About.js";
import Order from "./pages/Order.js";
import Specials from "./pages/Specials.js";
import PaymentPage from "./pages/Payment.js";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from "react";
import { CartProvider } from "./components/CartContext";


function App() {
  const [totalQty, setTotal] = useState(0);
  const [itemTotals, setItemTotals] = useState(0);
  const [total, setCartTotal] = useState(0)

  return (
    <Router>
    <CartProvider>
    <div className="App">
      <Header className="header" totalQty = {[totalQty, setTotal]}/>
      <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/menu" element={<Menu totalQty= {[totalQty, setTotal]} itemTotals={[itemTotals, setItemTotals]} />} />
            <Route path="/order" element={<Order totalQty= {totalQty} setTotal={setTotal} itemTotals={itemTotals} total={total} setCartTotal={setCartTotal}/>} />
            <Route path="/specials" element={<Specials/>} />
            <Route path="/payment" element={<PaymentPage total={total}/>} />
          </Routes>
      </div>
    <footer>
        <span id="email">email@cheesecakes.com</span>
        <div id="socials">
          <a href="https://acolee.netlify.app/" target="_blank" rel="noreferrer"><FacebookIcon className="shop" fontSize="large"/></a>
          <a href="https://github.com/a-cole55" target="_blank" rel="noreferrer"><InstagramIcon className="shop" fontSize="large"/></a>
        </div>
        <span id="phoneNumber">555-555-5555</span>
    </footer>
  </div>
  </CartProvider>
  </Router>
  );
}

export default App;
