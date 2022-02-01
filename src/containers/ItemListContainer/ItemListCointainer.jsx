import React ,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import styles from './ItemListContainer.module.css';
import { ItemList } from '../../components/ItemList/ItemList';
import { FirebaseClient } from '../../firebase/client';


export function ItemListContainer(){

  const [misProductos, setmisProductos] = useState (null);
  const {categoryid} = useParams();
  const firebase = new FirebaseClient();

  //Solicitar los productos que cumplan con la categoria. Se solicita al client.js
  const ProductosEncontrados = async () => {
    try {
      const value = await firebase.itemsCategory(categoryid)
      console.log(value)
      setmisProductos(value)
    }
    catch(error){
      console.log(error)
    }
  } 
  
  useEffect(()=>{
    ProductosEncontrados()
  },[categoryid]);

  return(
    <div className={styles.container}>
      <ItemList datos={misProductos}></ItemList>
    </div>
  )
}