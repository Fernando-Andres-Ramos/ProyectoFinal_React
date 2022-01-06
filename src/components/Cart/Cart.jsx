import React from "react";
import styles from "./Cart.module.css"
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export function Cart (producto){

  const [,removeItem] = useContext(CartContext)

    return(
      <>
        <div className={styles.container}>
          <div className={styles.miniDetalle}>
            <p>{producto.item.dato.title}</p>
            <img className={styles.miniImagen} src={producto.item.dato.pictureURL} alt="imagen_producto" />
          </div>
          <div className={styles.numeros}>
            <p className={styles.detail}>{producto.quantity}</p>
            <p className={styles.detail}>${(producto.quantity)*(producto.item.dato.price)}</p>
            <div className={styles.detail}>
            <button onClick={()=>removeItem(producto.item.dato.id)} className={styles.buttonRemove}>X</button>
            </div>
          </div>
        </div>
      </>
    )
}