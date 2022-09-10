import Header from "./components/Header";
import { FacebookOutlined } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";
import './App.css';
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import About from "./pages/About.js";
import Order from "./pages/Order.js";
import Specials from "./pages/Specials.js";
import PaymentPage from "./pages/Payment.js";
import PaymentSuccess from "./components/PaymentSuccess";
import ErrorPage from "./components/Error";
// import CancelledPage from "./components/CancelledPayment";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from "react";
import { CartProvider } from "./components/CartContext";
import { motion } from "framer-motion";


function App() {
  const [itemTotals, setItemTotals] = useState(0);
  const [total, setCartTotal] = useState(0)

  return (
    <Router>
    <CartProvider>
    <div className="App">
      <Header className="header" fixed="top" />
      <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/menu" element={<Menu itemTotals={[itemTotals, setItemTotals]} />} />
            <Route path="/order" element={<Order itemTotals={itemTotals} total={total} setCartTotal={setCartTotal}/>} />
            <Route path="/specials" element={<Specials/>} />
            <Route path="/payment" element={<PaymentPage total={total}/>} />
            <Route path="/success" element={<PaymentSuccess />} />;
            <Route path="*" element={<ErrorPage />} />

          </Routes>
      </div>
    <footer>
      <div id="copyright">
        <span>AColee Designs Copyright &copy; 2022. All rights reserved.</span>
      </div>
      <div id="footer">
        <motion.div id="socials" whileHover={{scale:1.1}}>
          <a href="https://acolee.netlify.app/" target="_blank" rel="noreferrer" whileHover={{scale:1.1}}><FacebookOutlined style={{ fontSize: '26px' }} /></a>
          <a href="https://github.com/a-cole55" target="_blank" rel="noreferrer" whileHover={{scale:1.1}}><InstagramOutlined style={{ fontSize: '27px' }} /></a>
        </motion.div>
        <motion.span 
          whileHover={{scale:1.1}}
          id="email"><a href="mailto:order@cheesecakes.com">order@cheesecakes.com</a></motion.span>
        <motion.span 
          whileHover={{scale:1.1}}
          id="phoneNumber">817.867.5366</motion.span>
      </div>
    </footer>
  </div>
  </CartProvider>
  </Router>
  );
}

export default App;
