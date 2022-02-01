import React, {useState } from "react";
import { FirebaseClient } from '../../firebase/client';
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import styles from "./SignInForm.module.css"


export function SignInForm(){

    const [addItem,removeItem,clear,isInCart,items,totalPrice,totalCount,userState,logUser] = useContext(CartContext)
    const firebase = new FirebaseClient();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [mensajesError,setMensaje] = useState(false)
    
    function signInSubmit (e){
        e.preventDefault()
        buscarUsuario()
    }

    function handleInfo(userInfo){
        switch (userInfo){
            case 1:
                setMensaje("Complete con su correo");
                userInfo = false;
                break;
            case 2:
                setMensaje("Este correo no esta registrado");
                userInfo = false;
                break;
            case 3:
                setMensaje("Contraseña incorrecta. Intente nuevamente");
                userInfo = false;
                break;
            default:
                logUser(userInfo);
                break;
        }
    }

//Solicitar los productos que cumplan con el email. Se solicita al client.js
    const buscarUsuario = async () => {
        try {
         let userValue = await firebase.getUserByEmail(email,password)
         handleInfo(userValue)
         setTimeout(()=>{setMensaje(false)},3000)
        }
        catch(error){
         console.log(error)
         console.log("No existe este usuario")
        }   
     } 

    return(
        <>
            <fieldset className={styles.containerForm}>
                <legend><h3 className={styles.title}>INGRESE CON SU CORREO Y CONTRASEÑA</h3></legend>
                {userState
                ?<h2 className={styles.mensajeBienvenida}>Bienvenid@ {userState[0].name}</h2> 
                :<form className={styles.formRegistro}>
                    <input type="text" placeholder="Correo Electronico" id="email" className={styles.inputSignUp} onChange={(ev)=>setEmail(ev.target.value)}></input>
                    <input type="password" placeholder="Contraseña" id="password" className={styles.inputSignUp} onChange={(ev)=>setPassword(ev.target.value)}></input>
                    <button type="submit" className={styles.buttonRegistrar} onClick={(e)=>signInSubmit(e)}>Ingresar</button>
                </form>
                }
                {mensajesError?<h4 className={styles.mensajeDeError}>{mensajesError}</h4>:<></>}
            </fieldset>
        </>

    )
}

    