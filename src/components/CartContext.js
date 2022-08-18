import { createContext, useState } from "react";


const CartContext = createContext();

export function CartProvider({children}){
    const [total, setCartTotal] = useState(0);
    const [cart, setCart] = useState([]);
    const [totalQty, setTotalQty] = useState(0);



    return(
        <CartContext.Provider value={{total, setCartTotal, cart, setCart, totalQty, setTotalQty}}>{children}</CartContext.Provider>
    )
}
export default CartContext;