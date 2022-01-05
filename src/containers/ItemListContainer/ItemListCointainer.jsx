import React ,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import styles from './ItemListContainer.module.css';
import { ItemList } from '../../components/ItemList/ItemList';
import { DatosProductos } from '../../mocks/DatosProductos';

export function ItemListContainer(greetings){

  const [misProductos, setmisProductos] = useState (null);

  const {categoryid} = useParams();

  useEffect(()=>{
    setmisProductos(null);
    PromesaProductos();
  },[categoryid])


  useEffect(() => {
    PromesaProductos()
  },[])

  function getProductos (){
    return new Promise ((resolve,reject)=>{
      setTimeout(()=>{
        if (DatosProductos)
        {
          if(categoryid)
          {
            const ProductosEncontrados = DatosProductos.filter(element => element.category === categoryid )
            resolve (ProductosEncontrados)
          }
          else  
            resolve(DatosProductos)
        }
        else 
          reject (new Error ('Error en getProductos'))
      },2000)
    })
  }

  function PromesaProductos () {
    getProductos().then(
      response => {
        setmisProductos(response)
      },
      error => console.log(`Promesa rechazada`,error)
    )
    .catch(error=>console.log(`ERROR`,'Algo salio mal',error))
  }

  return(
    <div className={styles.container}>
      <h3 className={styles.text}>{greetings.text}</h3>
      <ItemList datos={misProductos}></ItemList>
    </div>
  )
}