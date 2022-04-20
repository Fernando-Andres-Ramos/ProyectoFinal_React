import React, {useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from "./ItemDetailContainer.module.css"
import { ItemDetail } from "../../components/ItemDetail/ItemDetail"
import { FirebaseClient } from "../../firebase/client"


export function ItemDetailContainer(){
  const [ ItemElegido, setItemElegido] = useState (null)
  const {id} = useParams()
  const firebase = new FirebaseClient();


//Solicitar el producto que cumplan con la id. Se solicita al client.js

  const detallesDeProducto = async () => {
    try {
      const value = await firebase.getItemById(id)
      setItemElegido(value)
    }
    catch(error){
      console.log(error)
    }
  } 

  useEffect(()=>{
    detallesDeProducto();
  },[]);

  return (
    <div className={styles.container}>
      {ItemElegido?<ItemDetail dato={ItemElegido}/>:<span className={styles.loadingText}>Loading...</span>}
    </div>
  );
}


