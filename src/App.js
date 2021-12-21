import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './containers/ItemListContainer/ItemListCointainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import { DatosProductos } from './mocks/DatosProductos';
import { ItemList } from './components/ItemList/ItemList';
import { ItemDetailContainer } from './containers/ItemDetailContainer/ItemDetailContainer';

//Lista de información de producto para el desafio 5
const productosEnVenta = [{
  id: 1,
  title: "Ajedrez",
  description:"Juego de mesa de estrategia, 32 piezas",
  price: 500,
  stock: 15
},{
  id:2,
  title:"Cartas",
  description: "Juego de cartas con 50 unidades",
  price: 300,
  stock: 20
},{
  id:3,
  title: "Shenga",
  description:"Juego de bloques con 50 piezas",
  price: 400,
  stock: 10
},{
  id:4,
  title: "Monopoly",
  description: "El famoso juego Monopoly",
  price: 9000,
  stock: 5
}]



const Item1 = ({title, price, stock}) => {
  function mostrarConsola (cantidad) {
    console.log(`Agregaste al carrito ${cantidad}u. de ${title}. Por un valor de ${cantidad*price}$`)
  } 
  return (
    <div style={{textAlign:'center',margin:'5px',border:'1px solid aqua',width:'100%',color:'#009C8C', fontSize:'20px'}}>
      <p>Producto: {title}</p>
      <p>Precio: ${price}</p>
      <ItemCount stock={stock} onAdd={count => mostrarConsola(count)}/>
    </div>
  )
}

function Home (){
  // const Mensaje ='¡Bienvenid@ a nuestra tienda! ¡Aqui podras comprar juegos de mesa, cartas y más! (Sitio en construcción)'

  return(
    <React.Fragment>
      <NavBar />
      <ItemListContainer/>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'center',border:'1px solid green'}}>
        <h2 style={{margin:'100px',textAlign:'center'}}>Indique la cantidad que desea comprar</h2>
        {productosEnVenta.map(item => <Item1 key={item.id}{...item}/>)}
      </div>
      <ItemList Datos={DatosProductos}/>
      <ItemDetailContainer/>
    </React.Fragment>
  );
}

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Home" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
