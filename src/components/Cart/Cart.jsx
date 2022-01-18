import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css"
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

export function Cart (producto){

  const [,removeItem] = useContext(CartContext)

  // const [ handleStock, setHandleStock]=useState(0)

  // useEffect(()=>{
  //   console.log(handleStock)
  //   const db = getFirestore()
  //   const itemDoc = doc(db,"items",`${producto.item.dato.id}`)
  //   let nuevoStock = producto.item.dato.stock + handleStock
  //   updateDoc(itemDoc,{stock: nuevoStock})
  // },[handleStock])

  function discountStock (cantidad){
    const db = getFirestore()
    const itemDoc = doc(db,"items",`${producto.item.dato.id}`)
    let nuevoStock = producto.item.dato.stock - cantidad
    updateDoc(itemDoc,{stock: nuevoStock})
    }

  discountStock (producto.quantity)

    return(
      <>
        <div className={styles.container}>
          <div className={styles.miniDetalle}>
            <p>{producto.item.dato.title}</p>
            <img className={styles.miniImagen} src={producto.item.dato.pictureURL} alt="imagen_producto" />
          </div>
          <div className={styles.numeros}>
            <p className={styles.detail}>{producto.quantity}</p>
            <p className={styles.detail}>${(producto.quantity)*(producto.item.dato.price)}</p>
            <div className={styles.detail}>
            <button onClick={()=>removeItem(producto.item.dato.id)} className={styles.buttonRemove}>X</button>
            </div>
          </div>
        </div>
      </>
    )
}