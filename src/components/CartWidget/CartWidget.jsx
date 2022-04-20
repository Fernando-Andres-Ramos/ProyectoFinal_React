import React from "react";
import { useContext } from "react/cjs/react.development";
import {ImageCarrito} from "../../assets/images/images";
import { CartContext } from "../../context/cartContext";
import { Carrito } from "../ImgCarrito/ImgCarrito";
import styles from './CartWidget.module.css'

export const CardWidget = () =>{

  const [addItem,removeItem,clear,isInCart,items,totalPrice,totalCount,userState,logUser] = useContext(CartContext)

  return (
    <div className={styles.flexConteiner}>
      <Carrito {...ImageCarrito.img1}/>
      {totalCount!==0
      ?<div className={styles.globoCompra}>{totalCount}</div>
      :<div></div>}

    </div>
  );
}