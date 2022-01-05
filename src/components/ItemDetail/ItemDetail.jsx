import React, { useState } from "react";
import styles from "./ItemDetail.module.css"
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";


export const ItemDetail = (item) => {

  const [addItem,removeItem,clear,isInCart] = useContext(CartContext)
  clear()
  isInCart()
  addItem()
  removeItem()
  
  const [renderCompra, setRenderCompra] = useState(false)
  
  function OnAdd(quantityToAdd) {
    console.log(`Agregaste al carrito ${quantityToAdd}u. de ${item.dato.title}. Por un valor de ${quantityToAdd*item.dato.price}$`)
    setRenderCompra(quantityToAdd)
  }


  return (

    <>
      <div className={styles.product}>
      <div className={styles.imgAndCount}>
        <img className={styles.imgProductos} src={item.dato.pictureURL} alt={`Imagen de ${item.dato.title}`}/>
        {renderCompra?
          <Link to={'/cart'} className={styles.botonConfirmar}>Confirmar compra</Link>:
          <ItemCount stock={item.dato.stock} onAdd={OnAdd}></ItemCount>}
      </div>
      <div className={styles.infoProducto}>
        <h3>Detalles del producto</h3>
        <p className={styles.subtituloProduct}><b>Nombre: </b>{item.dato.title}</p>
        <p><b>Descripción : </b>{item.dato.description}</p>
        <p className={styles.precio}><b>Precio del producto: </b>${item.dato.price}</p>
      </div>
      <Link to={`/`} className={styles.botonRegresar}>Volver</Link>      
    </div>
    </> 
  )
}