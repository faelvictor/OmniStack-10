const axios = require('axios');
const Dev = require('../models/Dev.js');
const parseStringAsArray = require('../utils/parseStringAsArray');

// controller tem 5 funçoes: index, show, store, update, detroy

module.exports = {
    async index(request, response) {        // listar devs
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {          // async pois a api pode demorar para responder 
        const { github_username, techs, latitude, longitude } = request.body;   // pega apenas o username do corpo do pedido/requisição

        let dev = await Dev.findOne({ github_username})
        // procurando se há algum usuário já cadastrado no banco de dados
        // Dev é o model no banco. FindOne = encontre  um baseado no 'github_username'
        
        if (!dev) { // Se dev NÃO existir, então ele cria...(retornará NULL)
                const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            // await = faz com que a função espere retornar uma resposta, para ai sim continuar o código 
        
            const { name = login, avatar_url, bio } = apiResponse.data; 
            // Name no github não é obrigatório, então fazemos name = login
            // Ou seja, se nome não existir, que seja por padrão então o login (que é obrigatório)
        
            const techsArray = parseStringAsArray(techs);
            // No meu model declarei que o tipo do atributo tecnologias é um array. Mas o usuário vai me passar uma string
            // Então aqui estamos convertendo a string em um array.
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };
        
             dev = await Dev.create({
                github_username,
                name,
                bio,
                avatar_url,
                techs: techsArray,
                location
            })
        }
    
        return response.json(dev);
    }
}