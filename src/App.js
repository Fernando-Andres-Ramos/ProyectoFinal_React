import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './containers/ItemListContainer/ItemListCointainer';
import { ItemCount } from './components/ItemCount/ItemCount';



const PRODUCTOS = [{
  id: 1,
  title: "Ajedrez",
  description:"Clasico juego de ajedrez para disfrutar",
  price: 500
},{
  id:2,
  title:"Cartas",
  description: "Juego de cartas para toda la familia",
  price: 300
},{
  id:3,
  title: "Shenga",
  description:"Pone a prueba tu concentración, o simplemente reite con tus amigos",
  price: 400,
},{
  id:4,
  title: "Monopoly",
  description: "El famoso juego Monopoly",
  price: 9000,
}]



function App() {

  const Mensaje ='¡Bienvenid@ a nuestra tienda! ¡Aqui podras comprar juegos de mesa, cartas y más! (Sitio en construcción)';

  return (
    <div>
      <NavBar />
      <ItemListContainer text={Mensaje}/>
      <ItemCount stock="5" initial="1"/>
    </div>
  );
}

export default App;
