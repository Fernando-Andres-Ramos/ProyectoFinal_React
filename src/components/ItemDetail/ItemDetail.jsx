import React from "react";
import styles from "./ItemDetail.module.css"
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";


export const ItemDetail = (item) => {
  return (
    <div className={styles.product}>
      <div className={styles.imgAndCount}>
        <img className={styles.imgProductos} src={item.dato.pictureURL} alt={`Imagen de ${item.dato.title}`}/>
        <ItemCount stock={item.dato.stock} onAdd={count => console.log(`Agregaste al carrito ${count}u. de ${item.dato.title}. Por un valor de ${count*item.dato.price}$`)}/>
      </div>
      <div className={styles.infoProducto}>
        <h3>Detalles del producto</h3>
        <p className={styles.subtituloProduct}><b>Nombre: </b>{item.dato.title}</p>
        <p><b>Descripción : </b>{item.dato.description}</p>
        <p className={styles.precio}><b>Precio del producto: </b>${item.dato.price}</p>
      </div>
      <Link to={`/`} className={styles.botonRegresar}>Volver</Link>      
    </div>
  )
}