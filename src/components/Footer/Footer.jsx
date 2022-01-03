import React from "react";
import styles from "./Footer.module.css"
import {useContext} from "react"
import {ThemeContext} from "../../App"

function Footer (){

  const black = useContext(ThemeContext);

  return(
    <footer  style={{background:`${black}`}}  className={styles.footer}>
      <div className={styles.text}>
        <p style={{width:'100%'}}>1d10 Games: Todos los derechos reservados</p>
        <p style={{width:'100%'}}>Desarrollador de sitio: Fernando Ramos</p>
      </div>
    </footer>
  )
}

export default Footer;