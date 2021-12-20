import React , {useState, useEffect} from "react";
import styles from './ItemList.module.css'
import { Item } from "../Item/Item";






export function ItemList (Items){
      const [misProductos, setmisProductos] = useState (null);

      useEffect(() => {
        PromesaProductos()
      },[])
  
      function getProductos (){
        return new Promise ((resolve,reject)=>{
          setTimeout(()=>{
            if (Items)
              resolve (Items)
            else 
              reject (new Error ('Error en getProductos'))
          },2000)
        })
      }
    
      function PromesaProductos () {
        getProductos().then(
          response => {
            console.log(`Promesa resuelta`, response)
            setmisProductos(response.Datos)
          },
          error => console.log(`Promesa rechazada`,error)
        )
        .catch(error=>console.log(`ERROR`,'Algo salio mal',error))
      }
    

    return (
      <div>
        { misProductos ? misProductos.map(producto => <Item {...producto} />) : <span>Cargando productos...</span>}
      </div>
  );
}