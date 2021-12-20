import React from 'react';
import styles from './ItemListContainer.module.css'

export function ItemListContainer(greetings){
  //Este es el contenedor para el futuro catalogo
  return(
    <div className={styles.container}>
      <h3 className={styles.text}>{greetings.text}</h3>
    </div>
  )
}