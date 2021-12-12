import React from "react";
import styles from './ImgCarrito.module.css'

export const Carrito = (props) => (
  <div className={styles.ImageBox}>
    <img src={props.img} alt={props.name} />
  </div>
)

