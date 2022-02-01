import React, { useEffect, useState } from "react";
import styles from "./CartContainer.module.css"
import { Cart } from "../../components/Cart/Cart";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { NavLink } from "react-router-dom";
import {getFirestore,collection,addDoc} from "firebase/firestore";


export function CartContainer(){
  
  const [addItem,removeItem,clear,isInCart,items,totalPrice,totalCount,userState,logUser] = useContext(CartContext)

  const [orderId,setOrderId] = useState (false)

  const db = getFirestore();

   useEffect(()=>{
     console.log(orderId)
   },[orderId])


//Envio la orden a la base de datos de "Orders", tomando la info de Auth y de la database de Users
  const sendOrder = () =>{
    if(userState){
      let order = {
        buyer: {name: `${userState[0].name}`, phone: `${userState[0].number}`, email:`${userState[0].email}`},
        compra: items,
        total: totalPrice
      }
      const orderCollection = collection(db,"orders")
      addDoc(orderCollection,order).then(({id}) => {
        setOrderId(id)
      })
      clear()
    }
    else{
      let error = "Error: Usted necesita estar logeado"
      setOrderId(error)
    }
  }

  return(
    <>
    <div className={styles.container}>
      <h1 className={styles.tituloCart}>Sus compras actuales</h1>
      {orderId
      ?<p className={styles.subtituloCart}>Número de orden: {orderId}</p>
      :<p className={styles.subtituloCart}>Seleccione "Enviar orden" para realizar su pedido</p>}
      <div className={styles.titulosColumnas}>
        <p >Lista de los productos</p>
          <div className={styles.detallesCompra}>
            <p className={styles.detail}>Cantidad solicitada</p>
            <p className={styles.detail}>Precios a pagar</p>
            <p className={styles.detail}>Quitar producto</p>
          </div>
        <div className={styles.listaProductos} >
          {items.length!==0
          ?items.map(producto=><Cart key={producto.id}{...producto}/>)
          :<div><p>El carrito esta vacio</p></div>}
        </div>
        <p>TOTAL</p>
          <div className={styles.totalCompra}>
            <p className={styles.detail}>{totalCount}</p>
            <p className={styles.detail}>{totalPrice}</p>
            <p className={styles.detail}></p>
          </div>
      </div>
      <div className={styles.botonesCarrito}>
        <NavLink to={`/`} className={styles.botonSeguir}>Seguir comprando</NavLink>
        <button className={styles.botonConfirmar} onClick={()=>sendOrder()}>Enviar orden</button>
        <button className={styles.botonBorrar} onClick={()=>clear()}>Quitar todos los productos</button> 
      </div>
    </div>
    </>
  )
}