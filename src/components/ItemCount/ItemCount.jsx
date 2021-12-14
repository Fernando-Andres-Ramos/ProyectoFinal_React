import React,{ useState, useEffect} from "react";
import styles from './ItemCount.module.css'

function onAdd(){

}

export function ItemCount({stock,initial,onAdd}){
  const[contador,setContador] = useState(parseInt(initial));
  
  useEffect(()=>{
    console.log("estoy haciendo cambios");
  },[contador]);
  return(
    <div className={styles.ItemCountContainer}>
      <div className={styles.controles}>
        <button className={styles.botonRestar} style={{cursor:"pointer"}} onClick={()=>setContador(contador-1)}>-</button>
        <p>{contador}</p>
        <button className={styles.botonSumar} style={{cursor:"pointer"}} onClick={()=>setContador(contador+1)}>+</button>
      </div>
      <button className={styles.botonAdd} style={{cursor:"pointer"}}>Agregar al carrito</button>
      <p style={{width:'100%'}}>Cantidad en Stock: {stock}</p>
    </div>
  );
}