import React from 'react';
import classes from './NavBar.modules.css'

export function NavBar() {

  return (
    <div className={classes.ConteinerNavBar}>
      <h1 className={classes.Titulo}>1d10 Games</h1>
      <nav className={classes.Nav}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <a style={{fontSize:30,textDecoration:'none'}} href="./">Inicio</a>
          <ul className={classes.OpcionesDeUsuario}>
            <li><a className={classes.NavList_link} href="./">Log in</a></li>
            <li><a className={classes.NavList_link} href="./">Sign up</a></li>
            <li><a className={classes.NavList_link} href="./">Carrito</a></li>
          </ul>
        </div>
        <ul className={classes.NavList}>
          <li><a className={classes.NavList_link} href="./">Juegos de mesa</a></li>
          <li><a className={classes.NavList_link} href="./">Cartas</a></li>
          <li><a className={classes.NavList_link} href="./">Miniaturas</a></li>
          <li><a className={classes.NavList_link} href="./">Preventas y Ofertas</a></li>
          <li><a className={classes.NavList_link} href="./">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
}