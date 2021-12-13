import React, { useState } from "react"

export function ButtonCounter () {
  const[contador,setContador] = useState(0);
  return(
    <>
      <button style={{cursor:"pointer"}} onClick={()=>setContador(contador+1)}>
        Clicks realizados: {contador}</button>
    </>
  );
}