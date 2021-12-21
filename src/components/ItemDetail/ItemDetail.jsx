import React from "react";
import styles from "./ItemDetail.module.css"


export const ItemDetail = (item) => {
  console.log(item.dato.pictureURL)
  console.log(item.dato.title)
  console.log(item.dato.description)
  console.log(item.dato.price)

  return (
    <div className={styles.product}>
      <div>
        <img className={styles.imgProductos} src={item.dato.pictureURL}/>
      </div>
      <div className={styles.infoProducto}>
        <h3 className={styles.subtituloProduct}>{item.dato.title}</h3>
        <p>{item.dato.description}</p>
        <h4 className={styles.precio}>${item.dato.price}</h4>
        <h6 className={styles.stock}>Stock:{item.dato.stock}</h6>
      </div>
      <button style={{cursor:"pointer"}} className={styles.botonDetalles}>Regresar</button>      
    </div>
  )
}