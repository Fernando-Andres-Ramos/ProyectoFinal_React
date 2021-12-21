import React, {useState, useEffect } from "react"
import { DatosProductos } from "../../mocks/DatosProductos"



export function ItemDetailContainer(){

  const [ ItemElegido, setItemElegido] = useState (null)


  // useEffect(() => {
  //   useItem()
  // },[])

  const getItem = () =>{
    const buscar = 1
    return new Promise ((resolve,reject)=>{
      setTimeout(()=>{
        if (DatosProductos.find(element=>element.id=buscar))
          resolve (DatosProductos.id=buscar)
        else 
          reject (new Error ('Error en getItem'))
      },2000)
    })
  }

  function useItem () {
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
    <div>
      {console.log("Algo")}
    </div>
  );
}




