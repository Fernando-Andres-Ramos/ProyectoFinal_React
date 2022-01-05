import React, { useEffect, useState } from "react";

export const CartContext = React.createContext()

export const CustomProvider = ({children}) => {

    const [items,setItems] = useState([]);
    const [totalCount, setTotalCount] = useState (0);
    const [totalPrice, setTotalPrice] = useState (0);


    function addItem(item, quantity){
       let cartCompra = {item,quantity}
       let cartAux = []
       cartAux = cartCompra
       setItems([cartCompra, ...items])
    }

    function removeItem(itemID){
        console.log("Contexto removido")
    }

    function clear(){
        console.log("Contexto limpiado")
    }

    function isInCart(id){
    //   if(cartItems)
    //     cartItems.some(producto=>producto.item.id == item.id)
    }

    return(
        <CartContext.Provider value={[addItem,removeItem,clear,isInCart]}>
            {children}
            {console.log(items)}
        </CartContext.Provider>
    )
}


