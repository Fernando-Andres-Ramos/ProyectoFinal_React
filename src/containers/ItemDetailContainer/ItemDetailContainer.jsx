import React, {useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from "./ItemDetailContainer.module.css"
import { DatosProductos } from "../../mocks/DatosProductos"
import { ItemDetail } from "../../components/ItemDetail/ItemDetail"



export function ItemDetailContainer(){
  const [ ItemElegido, setItemElegido] = useState (null)

  const {id} = useParams()
  useEffect(()=>{
    console.log("La ID es" + id)
  },[id])

  useEffect(() => {
    promesaItem()
  },[])

  const getItem = () =>{
    return new Promise ((resolve,reject)=>{
      setTimeout(()=>{
        if (DatosProductos){
          const ProductoEncontrado = DatosProductos.find(element=>element.id == id)
          resolve (ProductoEncontrado)
          console.log([resolve])
        }
        else 
          reject (new Error ('Error en getItem'))
      },1000)
    })
  }

  function promesaItem () {
    getItem().then(
      response => {
        console.log(`Promesa resuelta`, response)
        setItemElegido(response)
      },
      error => console.log(`Promesa rechazada`,error)
    )
    .catch(error=>console.log(`ERROR`,'Algo salio mal',error))
  }


  return (
    <div className={styles.container}>
      {ItemElegido?<ItemDetail dato={ItemElegido}/>:<span style={{fontSize:'35px',marginBottom:'3rem'}}>Buscando información</span>}
    </div>
  );
}




