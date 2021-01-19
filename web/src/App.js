import React, { useState,  useEffect } from 'react';

import './global.css';  /* Importa o global.css */ 
import './app.css';
import './sidebar.css';
import './main.css';

function App() {      /* O nosso App.js é uma função que retorna um conteúdo HTML.
  Detalhe que estamos trabalhando um código HTML dentro de JavaScript (JSX)*/

  /* Porque eu separei tudo entre divs? 
  É preciso colocar divs em volta de cada conjunto label+input para nao termos complicaçoes no css. E também
  já que o nosso layout é de cima para baixo, quando precisamos colocar um item do lado outro precisamos
  fazer uma outra div, por isso em 'latitude' e 'longitude' há duas divs em torno. Na div pai chamei o 
  'div.input.group'.Outra alternativa é usar grid
  */

  // Estamos guardando as informaçoes do formulário em variáveis do estado do componente
  // E agora quando formos usar essas variáveis, eu vou ter acesso em tempo real ao oque o usuario digitou 
  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  // função para disparar quando o usuario clicar no Submit
  async function handleSubmit(e) {
    // Como o submit tem como comportamento padrão enviar o usuario para outra tela, vamos evitar esse comportamento padrão mexendo no evento
    e.preventDefault(); // previnindo o comportamento padrão do formulário

  }

  // 'navegator.geolocation.getCurrentPosition();'  função do navegador para pegar lati/longi
  // eu não posso só jogar essa função dentro do App, pois o React tem propriedades/estado, e toda vez
  // que o estado/propriedade for alterado, a função App executa toda de novo, e não posso deixar isso acontecer.
  // Então, oque fazer ? Usamos o useEffect do React.
  // useEffect serve para dispararmos uma função toda vez que uma informação alterar ou uma unica vez durante a rendereização do componente
  
  // useEffect: 1º parâmetro: qual função executar, 2º parametro: quando executar. Se for vazio, ele executa 1 vez.
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => { // se deu sucesso
        const { latitude, longitude} = position.coords;  // pegamos a latitude e longitude de coords

        // Agora precisamos jogar dentro do HTML. Se tivesse usando o HTML comum uriamos usar algo parecido com isso:
        // document.GetElementoById('laitude).value = latitude;
        // Isso chama-se programação declarativa, estou declarando oque eu quero
        // Mas no React usamos um paradigma de programação imperativa
        // Mas oque é essa programação imperativa? Vou então criar um ESTADO, e meu componente precisa saber comportar baseado no estado
        // Entao vamos criar um estado para armazenar a lati/longi, com o useState

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {  // se deu erro
        console.log(err);
      },
      { // parâmetros para o getCurrentPosition
        timeout: 30000,
      }
    );
  }, []); 

  return (    // HTML
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleSubmit()}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário Github</label>
            <input name="github_username" 
            id="github_username" 
            required
            value={github_username}
            onChange={e => setGithub_username(e.target.value)}
            ></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
              ></input>
          </div>

          <div className="input-group">
            <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input type="number" 
            name="latitude" 
            id="latitude" required 
            value={latitude}
            onChange={e => setLatitude(e.target.value)} 
            // Toda vez que mudar o valor da latitude...Vou pegar o EVENTO do HTML e vou setLatitude
            // target é para pegar o input. Essa é a forma que a gente faz no React de armazenar o valor de um input dentro de um valor no estado
            // Ou seja, toda vez que o usuario digitar no input, ele vai setar no estado 
            ></input>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" required 
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
                ></input>
            </div>
          </div>
          
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/72525405?s=460&u=e3956760c80de46f3ab196f71ecfc4875e18e345&v=4" alt="Rafael Victor"/>
              <div className="user-info">
                <strong>Rafael Victor</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
              <p>Apaixonado pelas melhores tecnologias de desenvolvimento.</p>
              <a href="https://github.com/faelvictor">Acessar perfil no github</a>
            </header>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/72525405?s=460&u=e3956760c80de46f3ab196f71ecfc4875e18e345&v=4" alt="Rafael Victor"/>
              <div className="user-info">
                <strong>Rafael Victor</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
              <p>Apaixonado pelas melhores tecnologias de desenvolvimento.</p>
              <a href="https://github.com/faelvictor">Acessar perfil no github</a>
            </header>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/72525405?s=460&u=e3956760c80de46f3ab196f71ecfc4875e18e345&v=4" alt="Rafael Victor"/>
              <div className="user-info">
                <strong>Rafael Victor</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
              <p>Apaixonado pelas melhores tecnologias de desenvolvimento.</p>
              <a href="https://github.com/faelvictor">Acessar perfil no github</a>
            </header>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/72525405?s=460&u=e3956760c80de46f3ab196f71ecfc4875e18e345&v=4" alt="Rafael Victor"/>
              <div className="user-info">
                <strong>Rafael Victor</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
              <p>Apaixonado pelas melhores tecnologias de desenvolvimento.</p>
              <a href="https://github.com/faelvictor">Acessar perfil no github</a>
            </header>
          </li>
        </ul>
      </main>
    </div>
  );  
}

export default App;
