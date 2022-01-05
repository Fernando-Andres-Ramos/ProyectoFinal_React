import React from "react";
import styles from "./CartContainer.module.css"
import { Cart } from "../../components/Cart/Cart";

export function CartContainer(){
  return(
    <>
      <h1 className={styles.tituloCart}>USTED HA INGRESADO AL CARRITO DE COMPRAS (EN CONSTRUCCIÓN)</h1>
      <Cart></Cart>
    </>
  )
}