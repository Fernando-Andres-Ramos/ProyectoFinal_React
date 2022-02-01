import React, { useState } from "react"
import styles from "./SignUpForm.module.css"
import { addDoc, collection, getFirestore } from "firebase/firestore"

export function SignUpForm (){
    const [nombreUsuario,setNombreUsuario] = useState(false)
    const [telefono,setTelefono] = useState(false)
    const [email,setEmail] = useState(false)
    const [password,setPassword] = useState(false)

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    class Usuario {
        constructor (nombre,telefono,email,password){
          this.nombre=nombre;
          this.telefono=telefono;
          this.email=email;
          this.password=password;
        }
      }

    function signUpSubmit(e){
        e.preventDefault()
        const usuario = new Usuario(nombreUsuario,telefono,email,password)
        usuarios.push(usuario)
        updateFirestoreContactData();
        document.getElementById("SignUpForm").reset();
    }

    function updateFirestoreContactData(){
        let UserData = {
            name: `${nombreUsuario}`,
            email: `${email}`,
            number: `${telefono}`
          }
        const db = getFirestore()
        const orderCollection = collection(db,"contactUserData")
        addDoc(orderCollection,UserData).then(({id}) => console.log("La Id del FirestoreContactData es " + id))
    }
 
    return(
        <>
        <fieldset className={styles.containerForm}>
            <legend>REGISTRE UN USUARIO</legend>
            <form id="SignUpForm" className={styles.formRegistro}>
                <input type="text" id="name" placeholder="Nombre" className={styles.inputSignUp} onChange={(ev)=>setNombreUsuario(ev.target.value)}></input>
                <input type="phone" id="telefono" placeholder="Telefono"  className={styles.inputSignUp} onChange={(ev)=>setTelefono(ev.target.value)}></input>
                <input type="text" id="email" placeholder="Correo electronico" className={styles.inputSignUp}  onChange={(ev)=>setEmail(ev.target.value)}></input>
                <input type="password" id="password" placeholder="Contraseña" className={styles.inputSignUp}  onChange={(ev)=>setPassword(ev.target.value)}></input>
                <button type="submit" className={styles.buttonRegistrar} onClick={(e)=>signUpSubmit(e)}>Crear usuario</button>
            </form>
        </fieldset>
            
        </>
    )
}

    