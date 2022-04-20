import React from "react";
import styles from './ItemList.module.css'
import { Item } from "../Item/Item";



export function ItemList (Items){

    return (
      <div className={styles.itemListContainer}>
        { Items.datos 
        ? Items.datos.map(producto => <Item key={producto.id}{...producto} />) 
        : <span className={styles.loadingText}>Loading...</span>}
      </div>
  );
}