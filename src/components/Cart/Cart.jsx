import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";


export function Cart (){
    let [,,,,compra] = useContext (CartContext)
    console.log(compra)
    return(
      <>
        {compra.length!=0?console.log("Hay cosas en el carrito"):console.log("El carrito esta vacio")}
      </>
    )
}