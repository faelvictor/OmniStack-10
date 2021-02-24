const Dev = require('../models/Dev.js');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        // buscar todos devs num raio de 10km 
        // filtrar por tecnologia
        const{ latitude, longitude, techs } = request.query;
    
        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray  
                // vc quer encontrar as tecnologias que estão dentro de techsArray   
                // esse '$in' é um operador lógico do MongoDB
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude], // encontrar usuários perto desse ponto 
                    },
                    $maxDistance: 10000, // de no máximo 10km
                },
            }
        })

        return response.json({devs});
    }
}