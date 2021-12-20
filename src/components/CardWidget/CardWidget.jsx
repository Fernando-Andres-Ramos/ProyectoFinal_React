import React from "react";
import {ImageCarrito} from "../../assets/images/images";
import { Carrito } from "../ImgCarrito/ImgCarrito";
import styles from './CardWidget.module.css'

export const CardWidget = () =>{
  return (
    <div className={styles.flexConteiner}>
      <Carrito {...ImageCarrito.img1}/>
    </div>
  );
}