import Header from "./components/Header";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './App.css';
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import About from "./pages/About.js";
import Order from "./pages/Order.js";
import Specials from "./pages/Specials.js";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from "react"


function App() {
  const [totalQty, setTotal] = useState(0);
  const [cart, setCart] = useState([])

  return (
    <Router>
    <div className="App">
      <Header className="header" totalQty = {[totalQty, setTotal]}/>
      <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/menu" element={<Menu totalQty= {[totalQty, setTotal]} cartTotal={[cart, setCart]} />} />
            <Route path="/order" element={<Order/>} />
            <Route path="/specials" element={<Specials/>} />
          </Routes>
      </div>
    <footer>
        <span id="email">email@cheesecakes.com</span>
        <div id="socials">
          <FacebookIcon className="shop" fontSize="large"/>
          <InstagramIcon className="shop" fontSize="large"/>
        </div>
        <span>555-555-5555</span>
    </footer>
  </div>
  </Router>
  );
}

export default App;
