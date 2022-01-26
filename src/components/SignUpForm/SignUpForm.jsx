import React, { useState } from "react"
import {getAuth, createUserWithEmailAndPassword, updateProfile, updatePhoneNumber} from "firebase/auth"
import styles from "./SignUpForm.module.css"

export function SignUpForm (){
    const [nombreUsuario,setNombreUsuario] = useState(false)
    const [telefono,setTelefono] = useState(false)
    const [email,setEmail] = useState(false)
    const [password,setPassword] = useState(false)
 

    const auth = getAuth();
    
    function signUpSubmit (e){
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredencial)=>{
            console.log(userCredencial)
            updateNombre()
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
        });  
        document.getElementById("SignUpForm").reset();
    }


    function updateNombre(){
        updateProfile(auth.currentUser,{
            displayName:`${nombreUsuario}`,
        }).then(()=>{
            console.log("Usuario actualizado")
        }).catch(()=>{
            console.log("Error al actualizar")
        });
    }
 

    return(
        <>
        <fieldset className={styles.containerForm}>
            <legend>REGISTRE UN USUARIO</legend>
            <form id="SignUpForm" className={styles.formRegistro}>
                <input type="text" id="name" placeholder="Nombre" className={styles.inputSignUp} onChange={(ev)=>setNombreUsuario(ev.target.value)}></input>
                <input type="phone" id="telefono" placeholder="Telefono"  className={styles.inputSignUp} onChange={(ev)=>setTelefono(ev.target.value)}></input>
                <input type="text" id="email" placeholder="Correo electronico" className={styles.inputSignUp}  onChange={(ev)=>setEmail(ev.target.value)}></input>
                <input type="password" id="password" placeholder="Contraseña (minimo 6 digitos)" className={styles.inputSignUp}  onChange={(ev)=>setPassword(ev.target.value)}></input>
                <button type="submit" className={styles.buttonRegistrar} onClick={(e)=>signUpSubmit(e)}>Crear usuario</button>
            </form>
        </fieldset>
            
        </>
    )
}

    