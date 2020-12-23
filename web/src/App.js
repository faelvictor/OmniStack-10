import React from 'react';

import './global.css';  /* Importa o global.css */ 
import './app.css';

function App() {      /* O nosso App.js é uma função que retorna um conteúdo HTML.
  Detalhe que estamos trabalhando um código HTML dentro de JavaScript (JSX)*/

  /* Porque eu separei tudo entre divs? 
  É preciso colocar divs em volta de cada conjunto label+input para nao termos complicaçoes no css. E também
  já que o nosso layout é de cima para baixo, quando precisamos colocar um item do lado outro precisamos
  fazer uma outra div, por isso em 'latitude' e 'longitude' há duas divs em torno. Na div pai chamei o 
  'div.input.group'.Outra alternativa é usar grid
  */
  return (    // HTML
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">
            <div class="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input name="latitude" id="latitude" required></input>
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
            </div>
          </div>
          
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>

      </main>
    </div>
  );  
}

export default App;
