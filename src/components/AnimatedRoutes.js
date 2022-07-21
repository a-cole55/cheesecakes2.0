import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import About from "./pages/About.js";
import Order from "./pages/Order.js";
import Specials from "./pages/Specials.js";
import { Route, Routes, useLocation}  from "react-router-dom";
import { useLocation } from "react-router-dom";

import {AnimatePresence} from 'framer-motion';

export default function AnimatedRoutes(){
    const location = useLocation();
    return(
        <AnimatePresence initial={false} exitBeforeEnter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/menu" element={<Menu totalQty= {[totalQty, setTotal]} cartTotal={[cart, setCart]} itemTotals={[itemTotals, setItemTotals]} />} />
            <Route path="/order" element={<Order totalQty= {[totalQty, setTotal]} cartTotal={[cart, setCart]} itemTotals={[itemTotals, setItemTotals]} />} />
            <Route path="/specials" element={<Specials/>} />
          </Routes>
          </AnimatePresence>
    )
}