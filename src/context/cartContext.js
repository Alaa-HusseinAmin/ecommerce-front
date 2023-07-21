import { createContext, useState } from "react"


export let CartContext=createContext(0)

export default function CartContextProvider(children){
    const [CartCount,setCartCount]=useState(0)

    function changeCart(){
        setCartCount(CartCount + 1)
    }
    return<CartContext.Provider value={{CartCount,changeCart}}>
     {children}
    </CartContext.Provider>
}