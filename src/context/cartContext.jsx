import React from "react";

export const CartContext = React.createContext()

export const CustomProvider = ({defaultValue=[],children}) => {


    function addItem(){
        console.log("Contexto entendido")
    }

    function removeItem(){
        console.log("Contexto removido")
    }

    function clear(){
        console.log("Contexto limpiado")
    }

    function isInCart(){
        console.log("Contexto analizado")
    }

    return(
        <CartContext.Provider value={[addItem,removeItem,clear,isInCart]}>
            {children}
        </CartContext.Provider>
    )
}


