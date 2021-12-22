import React from "react";
import styles from './ItemList.module.css'
import { Item } from "../Item/Item";



export function ItemList (Items){

    return (
      <div className={styles.itemListContainer}>
        { Items.datos 
        ? Items.datos.map(producto => <Item key={producto.id}{...producto} />) 
        : <span style={{fontSize:'35px',marginBottom:'3rem'}}>Cargando detalle de productos...</span>}
      </div>
  );
}