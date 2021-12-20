import React,{ useState} from "react";
import styles from './ItemCount.module.css'

export function ItemCount({stock,initial=1,onAdd}){
  const[contador,setContador] = useState(parseInt(initial));
  
  function botonSumar (){
    if (contador<stock)
    {
      setContador(contador+1)
    }
  }

  function botonRestar (){
    if (contador>0)
    {
      setContador(contador-1)
    }
  }

  return(
    <div className={styles.ItemCountContainer}>
      <div className={styles.controles}>
        <button className={styles.botonRestar} style={{cursor:"pointer"}} onClick={botonRestar} disabled={contador<=0}>-</button>
        <p>{contador}</p>
        <button className={styles.botonSumar} style={{cursor:"pointer"}} onClick={botonSumar} disabled={contador>=stock}>+</button>
        <button onClick={()=>onAdd(contador)} className={styles.botonAdd} style={{cursor:"pointer"}} disabled={contador>stock || contador<=0}>Agregar al carrito</button>
      </div>
      <p style={{width:'100%'}}>Cantidad en Stock: {stock-contador}</p>
    </div>
  );
}