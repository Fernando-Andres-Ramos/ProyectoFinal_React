import React from "react";
import ImageCarrito from "../../assets/images/images";
import { Carrito } from "../ImgCarrito/ImgCarrito";

export const CardWidget = () =>{
  return (
    <React.Fragment>
      <Carrito {...ImageCarrito.img1}/>
    </React.Fragment>
  );
}