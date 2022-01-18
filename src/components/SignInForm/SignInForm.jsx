import React, { useState } from "react"
import {getAuth, csignInWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

export function SignInForm(){

    
    const [email,setEmail] = useState(false)
    const [password,setPassword] = useState(false)
    const [userFinded,setUserFinded] = useState(false)
    
    function signInSubmit (e){
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email, password)
            .then((userCredencial)=>{
                const user = userCredencial.user;
                setUserFinded(user);
            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;
            });  
    }

    return(
        <>
            {userFinded?
            <h1>Bienvenido = {userFinded}</h1>
            :<div>
                <h4>INGRESE CON SU CORREO Y CONTRASEÑA</h4>
                <form>
                    <label htmlFor="email">Correo Electronico</label>
                    <input type="text" id="email" onChange={(ev)=>setEmail(ev.target.value)}></input>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" onChange={(ev)=>setPassword(ev.target.value)}></input>
                    <button type="submit" onClick={(e)=>signInSubmit(e)}>Ingresar</button>
                </form>
            </div>}
            
        </>
    )
}

    