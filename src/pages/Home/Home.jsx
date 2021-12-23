import React from 'react';
import { ItemListContainer } from '../../containers/ItemListContainer/ItemListCointainer';
import { ItemDetailContainer } from '../../containers/ItemDetailContainer/ItemDetailContainer';



export function Home (){
  const Mensaje ='¡Bienvenid@ a nuestra tienda! ¡Aqui podras comprar juegos de mesa, cartas y más! (Sitio en construcción)'
  return(
    <React.Fragment>
      <ItemListContainer text={Mensaje}/>
      <ItemDetailContainer/>
    </React.Fragment>
  );
}