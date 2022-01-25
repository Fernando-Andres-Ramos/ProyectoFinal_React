import React ,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import styles from './ItemListContainer.module.css';
import { ItemList } from '../../components/ItemList/ItemList';
import {collection, getDocs, getFirestore,query,where} from "firebase/firestore"
// import { DatosProductos } from '../../mocks/DatosProductos';

export function ItemListContainer(){

  const [misProductos, setmisProductos] = useState (null);

  const {categoryid} = useParams();


  useEffect(()=>{
    const db = getFirestore();
    if(categoryid){
      const itemCollection = query(collection(db,"items"),where("category","==",categoryid));
      getDocs(itemCollection).then((copiaDeDatos)=>{
        setmisProductos(copiaDeDatos.docs.map((doc)=>({id: doc.id, ...doc.data()})));
      });
    }
    else{
      const itemCollection = collection(db,"items");
      getDocs(itemCollection).then((copiaDeDatos)=>{
        setmisProductos(copiaDeDatos.docs.map((doc)=>({id: doc.id, ...doc.data()})));
      });
    }
  },[categoryid]);

  return(
    <div className={styles.container}>
      <ItemList datos={misProductos}></ItemList>
    </div>
  )
}