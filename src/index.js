import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//ReactDOM es una funcion para renderizar.
//Requiere 2 parametros, el componente a renderizar y el ID del html donde se renderiza
ReactDOM.render(
  <React.StrictMode><App /></React.StrictMode>,
  document.getElementById('root')
);
