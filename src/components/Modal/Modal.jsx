import React from "react";
import styles from "./Modal.module.css"

export function Modal() {
  return(
    <>
    <button type="button" className="open-modal" data-open="myModal">CLICK ME!</button>
      <div className={styles.modal} id="myModal">
        <div className={styles.modalDialog}>
          <header className={styles.modalHeader}>...
          <button className={styles.closeModal}></button></header>
          <section className={styles.modalContent}>...</section>
          <footer className={styles.modalFooter}>...</footer>
        </div> 
      </div>
    </>
  );
}