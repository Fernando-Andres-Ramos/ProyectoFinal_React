import React from 'react';
import { Link } from 'react-router-dom';
import { CardWidget } from '../CardWidget/CardWidget';
import style from './NavBar.module.css';


export function NavBar() {
  /*Logica*/
  return (
    /*Renderizado*/
    <div className={style.Conteiner}>
      <h1 className={style.Titulo}>1d10 Games</h1>
        <nav className={style.Nav}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <Link  to={`/`} style={{fontSize:30,textDecoration:'none'}}>Inicio</Link>
          <ul className={style.OpcionesDeUsuario}>
            <li><a className={style.NavList_link} href="/Home">Log in</a></li>
            <li><a className={style.NavList_link} href="/Home">Sign up</a></li>
            <li><button style={{cursor:'pointer',background:'none',border:'none'}}><CardWidget /></button></li>
          </ul>
        </div>
        <ul className={style.NavList}>
          <li><a className={style.NavList_link} href="/Home">Juegos de mesa</a></li>
          <li><a className={style.NavList_link} href="/Home">Cartas</a></li>
          <li><a className={style.NavList_link} href="/Home">Miniaturas</a></li>
          <li><a className={style.NavList_link} href="/Home">Preventas y Ofertas</a></li>
          <li><a className={style.NavList_link} href="/Home">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
}