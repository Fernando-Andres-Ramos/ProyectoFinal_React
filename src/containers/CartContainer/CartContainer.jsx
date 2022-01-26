import React, { useEffect, useState } from "react";
import styles from "./CartContainer.module.css"
import { Cart } from "../../components/Cart/Cart";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { NavLink } from "react-router-dom";
import { getFirestore,collection,addDoc,doc,getDoc} from "firebase/firestore";
import { getAuth } from "firebase/auth";


export function CartContainer(){
  
  let [addItem,removeItem,clear,isInCart,compra,totalPrice,totalCount] = useContext (CartContext)

  const [orderId,setOrderId] = useState (null)

  useEffect(()=>{
    const db = getFirestore()
    console.log(`${orderId}`)
    const orderDoc = doc(db,"orders",`${orderId}`);
    getDoc(orderDoc).then((copiaDeDatos)=>{
    console.log(({...copiaDeDatos.data()}));
    });
  },[orderId])


  const sendOrder = () =>{
    let auth = getAuth()
    let dataUsuario = auth.currentUser
    let order = {
      buyer: {name: `${dataUsuario.displayName}`, phone: "Telefono de usuario", email:`${dataUsuario.email}`},
      items: compra,
      total: totalPrice
    }
    const db = getFirestore()
    const orderCollection = collection(db,"orders")
    addDoc(orderCollection,order).then(({id}) => setOrderId(id))
  }

  return(
    <>
      <div className={styles.container}>
        <h1 className={styles.tituloCart}>Sus compras actuales</h1>
        <div className={styles.titulosColumnas}>
          <p >Lista de los productos</p>
            <div className={styles.detallesCompra}>
              <p className={styles.detail}>Cantidad solicitada</p>
              <p className={styles.detail}>Precios a pagar</p>
              <p className={styles.detail}>Quitar producto</p>
            </div>
          <div className={styles.listaProductos} >
            {compra.length!==0
            ?compra.map(producto=><Cart {...producto}/>)
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
          <button className={styles.botonConfirmar} onClick={()=>sendOrder()}>Confirmar y pagar</button>
          <button className={styles.botonBorrar} onClick={()=>clear()}>Quitar todos los productos</button> 
        </div>
      </div>
    </>
  )
}