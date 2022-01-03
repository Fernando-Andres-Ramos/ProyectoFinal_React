import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './containers/ItemListContainer/ItemListCointainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './containers/CartContainer/CartContainer';
import Footer from './components/Footer/Footer';
// import { Home } from './pages/Home/Home';
// import { cartContext } from './context/cartContext';

export const ThemeContext = React.createContext();



const Mensaje ='¡Bienvenid@ a nuestra tienda! ¡Aqui podras comprar juegos de mesa, cartas y más! (Sitio en construcción)'

export function App() {

  const [color, setColor] = useState("aqua")


  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer text={Mensaje}/>}/>
        <Route exact path="/category/:categoryid" element={<ItemListContainer text={Mensaje}/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route exact path="/cart" element={<CartContainer/>}/>
      </Routes>
    <ThemeContext.Provider value={color}> 
      <button onClick={()=>setColor("green")}>VERDE</button>
      <button onClick={()=>setColor("red")}>ROJO</button>
      <button onClick={()=>setColor("yellow")}>AMARILLO</button>
      <Footer />
    </ThemeContext.Provider>
    </BrowserRouter>
  );
}
