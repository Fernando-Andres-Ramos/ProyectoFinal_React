import React from "react";

export const CartContext = React.createContext()

export const CustomProvider = ({defaultValue=[],children}) => {


    function addItem(item,quantity){

    }

    function removeItem(itemId){

    }

    function clear(){

    }

    function isInCart(id){
        (id)?true:false;
    }

    return(
        <CartContext.Provider value={addItem,removeItem,clear,isInCart}>
            {children}
        </CartContext.Provider>
    )
}


