import React from "react";
import styles from "./CartContainer.module.css"
import { Cart } from "../../components/Cart/Cart";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { NavLink } from "react-router-dom";





export function CartContainer(){
  
  let [,,clear,,compra] = useContext (CartContext)

  return(
    <>
      <div className={styles.container}>
        <h1 className={styles.tituloCart}>Sus compras actuales</h1>
        <div className={styles.titulosColumnas}>
            <p >Lista de los productos</p>
            <div className={styles.detallesCompra}>
              <p className={styles.detail}>Cantidad solicitada</p>
              <p className={styles.detail}>Precios a pagar</p>
              <p className={styles.detail}>Quitar producto</p>
            </div>
          <div className={styles.listaProductos} >
            {compra.length!=0
            ?compra.map(producto=><Cart {...producto}/>)
            :<div><p>El carrito esta vacio</p></div>}
          </div>
        </div>
        <div className={styles.botonesCarrito}>
          <NavLink to={`/`} className={styles.botonSeguir}>Seguir comprando</NavLink>
          <button className={styles.botonConfirmar}>Confirmar y pagar</button>
          <button className={styles.botonBorrar} onClick={()=>clear()}>Quitar todos los productos</button> 
        </div>
      </div>
    </>
  )
}