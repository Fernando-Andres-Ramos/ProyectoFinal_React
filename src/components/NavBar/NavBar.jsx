import React from 'react';
import style from './NavBar.module.css';

export function NavBar() {
  /*Logica*/
  return (
    /*Renderizado*/
    <div className={style.Conteiner}>
      <h1 className={style.Titulo}>1d10 Games</h1>
        <nav className={style.Nav}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <a style={{fontSize:30,textDecoration:'none'}} href="./">Inicio</a>
          <ul className={style.OpcionesDeUsuario}>
            <li><a className={style.NavList_link} href="./">Log in</a></li>
            <li><a className={style.NavList_link} href="./">Sign up</a></li>
            <li><a className={style.NavList_link} href="./">Carrito</a></li>
          </ul>
        </div>
        <ul className={style.NavList}>
          <li><a className={style.NavList_link} href="./">Juegos de mesa</a></li>
          <li><a className={style.NavList_link} href="./">Cartas</a></li>
          <li><a className={style.NavList_link} href="./">Miniaturas</a></li>
          <li><a className={style.NavList_link} href="./">Preventas y Ofertas</a></li>
          <li><a className={style.NavList_link} href="./">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
}