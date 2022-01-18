import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './containers/ItemListContainer/ItemListCointainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './containers/CartContainer/CartContainer';
import {SignUpForm} from './components/SignUpForm/SignUpForm';
import { SignInForm } from './components/SignInForm/SignInForm';
import Footer from './components/Footer/Footer';
import {CustomProvider} from './context/cartContext'
// import { Modal } from './components/Modal/Modal';
export function App() {
  return (
    <BrowserRouter>
      <CustomProvider>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer/>}/>
            <Route exact path="/category/:categoryid" element={<ItemListContainer/>}/>
            <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route exact path="/cart" element={<CartContainer/>}/>
            <Route exact path="/signup" element={<SignUpForm />}></Route>
            <Route exact path="/signin" element={<SignInForm />}></Route>
          </Routes>
          <Footer />
      </CustomProvider>
    </BrowserRouter>
  );
}
