import React, { useEffect, useState } from "react";

export const CartContext = React.createContext()

export const CustomProvider = ({children}) => {

    const [items,setItems] = useState([]);
    const [totalCount, setTotalCount] = useState (0);
    const [totalPrice, setTotalPrice] = useState (0);


    function addItem(item, quantity){
       let cartCompra = {item,quantity}
       let cartAux = []
       if(isInCart(item.dato.id)){
        console.log(`Esta en el 🛒`)
        cartCompra = items.find(element => element.item.dato.id==item.dato.id)
        cartCompra.quantity = cartCompra.quantity += quantity
        cartAux = [...items]
       }
       else{
           console.log(`No esta en el 🛒`)
           cartAux = cartCompra
       }
       setItems([cartAux, ...items])
    }

    function removeItem(itemID){
        let cartAux = items.filter(element=>element.item.dato.id!=itemID) 
        setItems(cartAux)
    }

    function clear(){
        setItems([])
    }

    function isInCart(id){
        return items && items.some(element => element.item.dato.id === id)
    }

    return(
        <CartContext.Provider value={[addItem,removeItem,clear,isInCart,items]}>
            {children}
        </CartContext.Provider>
    )
}


