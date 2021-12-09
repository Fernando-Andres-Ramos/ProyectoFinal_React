import './NavBar.css';
function NavBar() {

  return (
    <div className="Conteiner-NavBar">
      <h1 className='Titulo'>1d10 Games</h1>
      <nav className='Nav'>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <a style={{fontSize:30,textDecoration:'none'}} href="./">Inicio</a>
          <ul className="OpcionesDeUsuario">
            <li><a className="Nav-List_link" href="./">Log in</a></li>
            <li><a className="Nav-List_link" href="./">Sign up</a></li>
            <li><a className="Nav-List_link" href="./">Carrito</a></li>
          </ul>
        </div>
        <ul className="Nav-List">
          <li><a className="Nav-List_link" href="./">Juegos de mesa</a></li>
          <li><a className="Nav-List_link" href="./">Cartas</a></li>
          <li><a className="Nav-List_link" href="./">Miniaturas</a></li>
          <li><a className="Nav-List_link" href="./">Preventas y Ofertas</a></li>
          <li><a className="Nav-List_link" href="./">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;