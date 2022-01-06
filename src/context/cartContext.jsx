import React, { useEffect, useState } from "react";

export const CartContext = React.createContext()

export const CustomProvider = ({children}) => {

    const [items,setItems] = useState([]);
    const [totalCount, setTotalCount] = useState (0);
    const [totalPrice, setTotalPrice] = useState (0);


    function addItem(item, quantity){
        let cartCompra = {item,quantity}
        let cartAux = []
        console.log(cartCompra)
        if(isInCart(item.dato.id)){
            cartCompra = items.find(element=>element.item.dato.id == item.dato.id)
            //Modificio la "cantidad" que quiero comprar, esa cantidad es independiente del array "items"
            cartCompra.quantity = cartCompra.quantity + quantity
            cartAux = [...items]
        }
        else
            cartAux = [cartCompra, ...items]
       setItems(cartAux)
    }

    function isInCart(id){
        return items && items.some(element => element.item.dato.id === id)
    }

    function removeItem(itemID){
        let cartAux = items.filter(element=>element.item.dato.id!=itemID) 
        setItems(cartAux)
    }

    function clear(){
        setItems([])
    }


    return(
        <CartContext.Provider value={[addItem,removeItem,clear,isInCart,items]}>
            {children}
        </CartContext.Provider>
    )
}


