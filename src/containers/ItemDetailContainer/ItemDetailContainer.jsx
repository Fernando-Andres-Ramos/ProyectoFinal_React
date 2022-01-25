import React, {useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from "./ItemDetailContainer.module.css"
import { ItemDetail } from "../../components/ItemDetail/ItemDetail"
import {doc,getDoc,getFirestore} from "firebase/firestore"
// import { DatosProductos } from "../../mocks/DatosProductos"



export function ItemDetailContainer(){
  const [ ItemElegido, setItemElegido] = useState (null)

  const {id} = useParams()

  useEffect(()=>{

    const db = getFirestore();
    const itemDoc = doc(db,"items",id);
    getDoc(itemDoc).then((copiaDeDatos)=>{
      setItemElegido(({id: copiaDeDatos.id, ...copiaDeDatos.data()}));
    });
  },[]);

  return (
    <div className={styles.container}>
      {ItemElegido?<ItemDetail dato={ItemElegido}/>:<span className={styles.loadingText}>Buscando información</span>}
    </div>
  );
}


