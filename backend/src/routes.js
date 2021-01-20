const { Router } = require('express');  // Importando apenas o Routes da biblioteca Express
const axios = require('axios');
const Dev = require('./models/Dev.js');

const routes = Router();

// criando rotas 

// Tipos de parâmetros:
// Query params: request.query (Filtros, ordenação, paginação...)
// Route params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alteração de um registro)

routes.post('/devs', async (request, response) => {          // async pois a api pode demorar para responder 
    const { github_username, techs } = request.body;   // pega apenas o username do corpo do pedido/requisição
    
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    // await = faz com que a função espere retornar uma resposta, para ai sim continuar o código 

    const { name = login, avatar_url, bio } = apiResponse.data; 
    // Name no github não é obrigatório, então fazemos name = login
    // Ou seja, se nome não existir, que seja por padrão então o login (que é obrigatório)

    const techsArray = techs.split(',').map(tech => techs.trim());
    // No meu model declarei que o tipo do atributo tecnologias é um array. Mas o usuário vai me passar uma string
    // Então aqui estamos convertendo a string em um array.
    // Split = pra cada virgula eu vou cortar a string.
    // .map = está percorrendo todo o array e o trim está tirando todos os espaços antes e depois

    const dev = await Dev.Create({
        github_username,
        name,
        bio,
        avatar_url,
        techs: techsArray
    })

    return response.json({ messege: 'Hello '});
}); 

module.exports = routes;