import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { ItemDetailContainer } from './containers/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './containers/ItemListContainer/ItemListCointainer';
// import { Home } from './pages/Home/Home';
// import { cartContext } from './context/cartContext';

// const [state,setState] = useState[("test")]
// return(
//   <>
//     <cartContext.Provider value={state}>
//       <ItemListContainer></ItemListContainer>
//     </cartContext.Provider>
//   </>
// )


const Mensaje ='¡Bienvenid@ a nuestra tienda! ¡Aqui podras comprar juegos de mesa, cartas y más! (Sitio en construcción)'

function App() {



  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer text={Mensaje}/>}/>
        <Route exact path="/category/:categoryid" element={<ItemListContainer text={Mensaje}/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
