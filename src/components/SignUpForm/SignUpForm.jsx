import React, { useState } from "react"
import styles from "./SignUpForm.module.css"
import { addDoc, collection, getFirestore } from "firebase/firestore"

export function SignUpForm (){
    const [nombreUsuario,setNombreUsuario] = useState(false)
    const [telefono,setTelefono] = useState(false)
    const [email,setEmail] = useState(false)
    const [password,setPassword] = useState(false)

    function signUpSubmit(e){
        e.preventDefault()
        updateFirestoreContactData();
        document.getElementById("SignUpForm").reset();
    }

    function updateFirestoreContactData(){
        let UserData = {
            name: `${nombreUsuario}`,
            email: `${email}`,
            number: `${telefono}`,
            pass: `${password}`
          }
        const db = getFirestore()
        const contactCollection = collection(db,"contactUserData")
        addDoc(contactCollection,UserData).then(({id}) => console.log("La Id del FirestoreContactData es " + id))
    }
 
    return(
        <>
        <fieldset className={styles.containerForm}>
            <legend><h3>REGISTRE UN USUARIO</h3></legend>
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

    