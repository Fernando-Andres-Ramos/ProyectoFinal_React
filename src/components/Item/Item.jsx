import React from 'react'
import styles from './Item.module.css'
import { NavLink } from 'react-router-dom'

export const Item = ({id, title, description, price, pictureURL,cattegory}) => {
  return (
    <div className={styles.product}>
      <div>
        <img className={styles.imgProductos} src={pictureURL} alt={`Imagen de ${title}`}/>
      </div>
      <div className={styles.infoProducto}>
        <h3 className={styles.subtituloProduct}>{title}</h3>
        <p>{description}</p>
        <h4 className={styles.precio}>Precio: ${price}</h4>
      </div>
      <NavLink className={styles.botonDetalles} to={`/item/${id}`}>Ver mas detalles aqui</NavLink>    
    </div>
  )
}