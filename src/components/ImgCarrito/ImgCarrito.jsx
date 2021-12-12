import React from "react";
import styles from './ImgCarrito.module.css'

export const Carrito = (props) => (
  <div>
    <img src={props.img} alt={props.name} />
  </div>
)

