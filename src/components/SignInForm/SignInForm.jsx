import React, { useEffect, useState } from "react";
import { FirebaseClient } from '../../firebase/client';


export function SignInForm(){
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [userFinded,setUserFinded] = useState(null);
    const firebase = new FirebaseClient();

    useEffect(()=>{
        console.log(userFinded)
    },[userFinded])
    
    function signInSubmit (e){
        e.preventDefault()
        buscarUsuario()
    }

//Solicitar los productos que cumplan con el email. Se solicita al client.js
    const buscarUsuario = async () => {
        try {
         let userValue = await firebase.getUserByEmail(email)
         console.log(userValue)
         setUserFinded(userValue)
        //  console.log(Object.values(value[0]))
        //  setUserFinded(Object.values(value[0]))
        }
        catch(error){
         console.log(error)
         console.log("No existe este usuario")
        }   
     } 

    function logState (){
        setUserFinded(false)
    }
    

    return(
        <>
            {userFinded?
            <div>
                <h1>Bienvenido {userFinded}</h1> 
                <button type="submit" onClick={(e)=>logState(e)}>borrarUsuario</button>
            </div>
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

    