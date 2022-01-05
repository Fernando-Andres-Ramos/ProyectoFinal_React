import React from "react";
import styles from "./CartContainer.module.css"
import { Cart } from "../../components/Cart/Cart";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";





export function CartContainer(){
  
  let [,,,,compra] = useContext (CartContext)
  console.log(compra)

  return(
    <>
      <div className={styles.container}>
        <h1 className={styles.tituloCart}>Sus compras actuales</h1>
        <div className={styles.titulosColumnas}>
            <p >Lista de los productos</p>
            <div className={styles.detallesCompra}>
              <p className={styles.detail}>Cantidad solicitada</p>
              <p className={styles.detail}>Precios a pagar</p>
            </div>
          <div className={styles.listaProductos} >
            {compra.length!=0
            ?compra.map(producto=><Cart {...producto}/>)
            :<div><p>El carrito esta vacio</p></div>}
          </div>
        </div>
      </div>
    </>
  )
}