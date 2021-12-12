import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './containers/ItemListContainer/ItemListCointainer';
function App() {

  const Mensaje ='¡Bienvenid@ a nuestra tienda! ¡Aqui podras comprar juegos de mesa, cartas y más! (Sitio en construcción)';

  return (
    <div>
      <NavBar />
      <ItemListContainer text={Mensaje}/>
    </div>
  );
}

export default App;
