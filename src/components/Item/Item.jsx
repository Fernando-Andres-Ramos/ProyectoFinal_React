import React from 'react'
import styles from './Item.module.css'
import { NavLink } from 'react-router-dom'

export const Item = ({id, title, description, price, pictureURL}) => {
  return (
    <div className={styles.product}>
      <div>
        <img className={styles.imgProductos} src={pictureURL} alt={`Imagen de ${title}`}/>
      </div>
      <div className={styles.infoProducto}>
        <h3 className={styles.subtituloProduct}>{title}</h3>
        <p>{description}</p>
        <h4 className={styles.precio}>${price}</h4>
      </div>
      <button style={{cursor:"pointer"}} className={styles.botonDetalles}>
        <NavLink to={`/item/${id}`}>Ver mas detalles aqui</NavLink>
      </button>      
    </div>
  )
}