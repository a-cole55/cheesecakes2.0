import { createContext, useState } from "react";


const CartContext = createContext();

export function CartProvider({children}){
    const [total, setCartTotal] = useState(0);
    const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem('user-cart')) || []);
    const [totalQty, setTotalQty] = useState(JSON.parse(sessionStorage.getItem('total-cartQty')) || 0);



    return(
        <CartContext.Provider value={{total, setCartTotal, cart, setCart, totalQty, setTotalQty}}>{children}</CartContext.Provider>
    )
}
export default CartContext;