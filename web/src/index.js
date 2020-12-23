import React from 'react';          /* Importando o react.
Importamos o react em todo o arquivo javascript que for utilizar HTML dentro dele.
O HTML vai estar dentro de um arquivo JS
JSX = JavaScript + HTML*/
import ReactDOM from 'react-dom';   /* Importa o ReactDOM.
O ReactDom da a possibilidade de se comunicar com a árvore de elementos da aplicação (html) */
import App from './App';

ReactDOM.render(      // Está 'renderizando' ou injetando o código HTML (<App \>) para dentro da div 'root'
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
