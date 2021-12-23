import React from "react";
import styles from "./ItemDetail.module.css"
import { ItemCount } from "../ItemCount/ItemCount";


export const ItemDetail = (item) => {
  return (
    <div className={styles.product}>
      <div>
        <img className={styles.imgProductos} src={item.dato.pictureURL} alt={`Imagen de ${item.dato.title}`}/>
      </div>
      <div className={styles.infoProducto}>
        <h3 className={styles.subtituloProduct}>{item.dato.title}</h3>
        <p>{item.dato.description}</p>
        <h4 className={styles.precio}>${item.dato.price}</h4>
        <h6 className={styles.stock}>Stock:{item.dato.stock}</h6>
        <div>
          <ItemCount stock={item.dato.stock} onAdd={count => console.log(`Agregaste al carrito ${count}u. de ${item.dato.title}. Por un valor de ${count*item.dato.price}$`)}/>
        </div>
      </div>
      <button style={{cursor:"pointer"}} className={styles.botonDetalles}>Regresar</button>      
    </div>
  )
}