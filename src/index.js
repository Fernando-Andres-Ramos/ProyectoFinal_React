import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from "firebase/app";
import './index.css';
import {App} from './App';

const firebaseConfig = {
  apiKey: "AIzaSyBOsfkAdzx3PkFkNQUnbIUuFFFA1DfGTmc",
  authDomain: "awesome-vigil-329805.firebaseapp.com",
  projectId: "awesome-vigil-329805",
  storageBucket: "awesome-vigil-329805.appspot.com",
  messagingSenderId: "905383150617",
  appId: "1:905383150617:web:85b0779d561adf8de79688"
};

const app = initializeApp(firebaseConfig);

//ReactDOM es una funcion para renderizar.
//Requiere 2 parametros, el componente a renderizar y el ID del html donde se renderiza
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('root'));
