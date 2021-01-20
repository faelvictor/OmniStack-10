const { Router } = require('express');  // Importando apenas o Routes da biblioteca Express
const axios = require('axios');

const routes = Router();

// criando rotas 

// Tipos de parâmetros:
// Query params: request.query (Filtros, ordenação, paginação...)
// Route params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alteração de um registro)

routes.post('/devs', async (request, response) => {          // async pois a api pode demorar para responder 
    const { github_username } = request.body;   // pega apenas o username do corpo do pedido/requisição
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    // await = faz com que a função espere retornar uma resposta, para ai sim continuar o código 

    console.log(apiResponse.data);
    return response.json({ messege: 'Hello '});
}); 

module.exports = routes;