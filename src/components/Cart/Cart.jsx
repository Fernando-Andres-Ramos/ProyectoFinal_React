import React from "react";
import styles from "./Cart.module.css"

export function Cart (producto){
  console.log(producto.item.dato.title)
    return(
      <>
        <div className={styles.container}>
          <div className={styles.miniDetalle}>
            <p>{producto.item.dato.title}</p>
            <img className={styles.miniImagen} src={producto.item.dato.pictureURL} alt="imagen_producto" />
          </div>
          <div className={styles.numeros}>
            <p className={styles.detail}>{producto.quantity}</p>
            <p className={styles.detail}>{(producto.quantity)*(producto.item.dato.price)}$</p>
          </div>
        </div>
      </>
    )
}