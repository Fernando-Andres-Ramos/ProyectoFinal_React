import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './containers/ItemListContainer/ItemListCointainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './containers/CartContainer/CartContainer';
import Footer from './components/Footer/Footer';
import {CustomProvider} from './context/cartContext'




const Mensaje ='¡Bienvenid@ a nuestra tienda! ¡Aqui podras comprar juegos de mesa, cartas y más! (Sitio en construcción)'

export function App() {

  return (
    <BrowserRouter>
      <CustomProvider>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer text={Mensaje}/>}/>
            <Route exact path="/category/:categoryid" element={<ItemListContainer text={Mensaje}/>}/>
            <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route exact path="/cart" element={<CartContainer/>}/>
          </Routes>
          <Footer />
      </CustomProvider>
    </BrowserRouter>
  );
}
