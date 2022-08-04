import { createContext, useState } from "react";


const CartContext = createContext();

export function CartProvider({children}){
    const [total, setCartTotal] = useState(0);
    const [cart, setCart] = useState([]);



    return(
        <CartContext.Provider value={{total, setCartTotal, cart, setCart}}>{children}</CartContext.Provider>
    )
}
export default CartContext;