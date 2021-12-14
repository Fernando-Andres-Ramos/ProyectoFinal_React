import React,{ useState, useEffect} from "react";


export function ItemCount({stock,initial,onAdd}){

  const[contador,setContador] = useState(parseInt(initial));

  return(
    <>
      <div>
        <button id="BotonRestar" style={{cursor:"pointer"}} onClick={()=>setContador(contador-1)}>-</button>
        <p>{contador}</p>
        <button id="BotonSumar" style={{cursor:"pointer"}} onClick={()=>setContador(contador+1)}>+</button>
      </div>
      <button style={{cursor:"pointer"}}>Agregar al carrito</button>
      <p>Cantidad en Stock: {stock}</p>
    </>
  );
}