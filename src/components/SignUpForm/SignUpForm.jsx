import React, { useState } from "react"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

export function SignUpForm (){

    const [email,setEmail] = useState(false)
    const [password,setPassword] = useState(false)
    
    function signUpSubmit (e){
        e.preventDefault()
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email, password)
            .then((userCredencial)=>{
                console.log(userCredencial)
                const user = userCredencial.user;
            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;
            });  
    }

    return(
        <>
            <h4>REGISTRE UN USUARIO</h4>
            <form>
                <label htmlFor="email">Correo Electronico</label>
                <input type="text" id="email" onChange={(ev)=>setEmail(ev.target.value)}></input>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" onChange={(ev)=>setPassword(ev.target.value)}></input>
                <button type="submit" onClick={(e)=>signUpSubmit(e)}>Crear usuario</button>
            </form>
        </>
    )
}

    