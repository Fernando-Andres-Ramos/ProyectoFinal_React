import React from "react";
import { useContext } from "react";
import {ImageCarrito} from "../../assets/images/images";
import { CartContext } from "../../context/cartContext";
import { Carrito } from "../ImgCarrito/ImgCarrito";
import styles from './CartWidget.module.css'

export function CartWidget (){
  const [addItem,removeItem,clear,isInCart,items,totalPrice,totalCount,userState,logUser] = useContext(CartContext)
  return (
    <div className={styles.flexConteiner}>
      <Carrito {...ImageCarrito.img1}/>
      {/* <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="una imagen" width={"50px"} /> */}
      {totalCount!==0
      ?<div className={styles.globoCompra}>{totalCount}</div>
      :<div></div>}
    </div>
  );
}