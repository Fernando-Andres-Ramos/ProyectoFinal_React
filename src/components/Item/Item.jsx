import React from 'react'
import styles from './Item.module.css'

export const Item = ({id, title, price, pictureURL}) => {
  return (
    <div className={styles.product}>
      <div>
        <img src={pictureURL}/>
      </div>
      <div>
        <h3>{title}</h3>
        <h5>${price}</h5>
      </div>      
    </div>
  )
}