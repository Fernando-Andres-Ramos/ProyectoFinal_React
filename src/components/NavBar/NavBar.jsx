import React from 'react';
import { NavLink } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import style from './NavBar.module.css';
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export function NavBar() {
  /*Logica*/
  const [addItem,removeItem,clear,isInCart,items,totalPrice,totalCount,userState,logUser] = useContext(CartContext)
  return (
    /*Renderizado*/
    <div className={style.Conteiner}>
      <h1 className={style.Titulo}>1d10 Games</h1>
        <nav className={style.Nav}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <NavLink  to={`/`} className={style.homeLink}>Home</NavLink>
          <ul className={style.OpcionesDeUsuario}>
            {userState
            ?<li><button className={style.buttonLogOut} onClick={()=>logUser(false)} >Cerrar Sesión</button></li>
            :<li><NavLink to={`/signin`} className={style.NavList_link}>Log in</NavLink></li>}
            <li><NavLink to={`/signup`} className={style.NavList_link}>Sign up</NavLink></li>
            <li><NavLink to={`/cart`} style={{cursor:'pointer',background:'none',border:'none'}}><CartWidget /></NavLink></li>
          </ul>
        </div>
        <ul className={style.NavList}>
          <li><NavLink to={`/category/JuegoDeMesa`} className={style.NavList_link}>Juegos de mesa</NavLink></li>
          <li><NavLink to={`/category/JuegoDeCartas`} className={style.NavList_link}>Cartas</NavLink></li>
          <li><NavLink to={`/category/Miniaturas`} className={style.NavList_link}>Miniaturas</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}