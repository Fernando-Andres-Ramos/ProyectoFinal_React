import React from "react";
import styles from "./Footer.module.css"

function Footer (){

  return(
    <footer className={styles.footer}>
      <div className={styles.text}>
        <p style={{width:'100%'}}>Desarrollador de sitio: Fernando Ramos</p>
      </div>
    </footer>
  )
}

export default Footer;