import React from "react";
import './ImgCarrito.module.css'

export const Carrito = (props) => (
  <div>
    <img src={props.img} alt={props.name} />
  </div>
)

