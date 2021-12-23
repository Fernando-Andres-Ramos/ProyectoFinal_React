import React , {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './pages/Home/Home';
import { ItemDetailContainer } from './containers/ItemDetailContainer/ItemDetailContainer';
import { cartContext } from './context/cartContext';
import { ItemListContainer } from './containers/ItemListContainer/ItemListCointainer';



// const [state,setState] = useState[("test")]
// return(
//   <>
//     <cartContext.Provider value={state}>
//       <ItemListContainer></ItemListContainer>
//     </cartContext.Provider>
//   </>
// )

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/category/:id" element={<Home/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
