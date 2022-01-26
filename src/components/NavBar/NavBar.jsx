import React from 'react';
import { NavLink } from 'react-router-dom';
import { CardWidget } from '../CartWidget/CartWidget';
import style from './NavBar.module.css';


export function NavBar() {
  /*Logica*/
  return (
    /*Renderizado*/
    <div className={style.Conteiner}>
      <h1 className={style.Titulo}>1d10 Games</h1>
        <nav className={style.Nav}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <NavLink  to={`/`} style={{fontSize:30,textDecoration:'none'}}>Inicio</NavLink>
          <ul className={style.OpcionesDeUsuario}>
            <li><NavLink to={`/signin`} className={style.NavList_link} href="/Home">Log in</NavLink></li>
            <li><NavLink to={`/signup`} className={style.NavList_link}>Sign up</NavLink></li>
            <li><NavLink to={`/cart`} style={{cursor:'pointer',background:'none',border:'none'}}><CardWidget /></NavLink></li>
          </ul>
        </div>
        <ul className={style.NavList}>
          <li><NavLink to={`/category/JuegoDeMesa`} className={style.NavList_link}>Juegos de mesa</NavLink></li>
          <li><NavLink to={`/category/JuegoDeCartas`} className={style.NavList_link}>Cartas</NavLink></li>
          <li><NavLink to={`/category/Miniaturas`} className={style.NavList_link}>Miniaturas</NavLink></li>
          <li><NavLink to={`/category/Ofertas`} className={style.NavList_link}>Preventas y Ofertas</NavLink></li>
          <li><NavLink to={`/category/Contacto`} className={style.NavList_link}>Contacto</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}