import React from 'react'
import styles from './Item.module.css'

export const Item = ({id, title, description, price, pictureURL}) => {
  return (
    <div className={styles.product}>
      <div>
        <img src={pictureURL} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <span>{description}</span>
        <h5>${price}</h5>
      </div>      
    </div>
  )
}