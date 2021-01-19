const express = require('express');

const app = express();

app.use(express.json()); // faz com que o express entenda requisiçoes json
 
// criando rotas 

// Tipos de parâmetros:
// Query params: request.query (Filtros, ordenação, paginação...)
// Route params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alteração de um registro)

app.get('/', (request, response) => {
    return response.json({ messege: 'Hello '});
});

app.listen(3333); // porta do servidor